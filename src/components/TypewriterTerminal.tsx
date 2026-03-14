import { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  lines: string[]
  loop?: boolean
  ariaLabel?: string
  maxTypedLines?: number
  animate?: boolean
  instantKinds?: Array<LineRender['kind']>
  thinkingHoldMs?: number
  // If true, instantly commits the leading block of "instant" lines.
  instantPrefix?: boolean
}

type LineRender =
  | { kind: 'box'; text: string }
  | { kind: 'prompt'; who: 'you' | 'koda'; rest: string }
  | { kind: 'cmd'; text: string }
  | { kind: 'thinking'; text: string }
  | { kind: 'plain'; text: string }

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}

function classifyLine(line: string): LineRender {
  // Proper box-drawing, plus mojibake fallback if a copy got corrupted.
  const startsBox =
    line.startsWith('┌') ||
    line.startsWith('│') ||
    line.startsWith('└') ||
    line.startsWith('├') ||
    line.startsWith('┤') ||
    line.startsWith('â”Œ') ||
    line.startsWith('â”‚') ||
    line.startsWith('â””') ||
    line.startsWith('â”œ') ||
    line.startsWith('â”¤')

  if (startsBox) return { kind: 'box', text: line }

  // Windows shell prompt / command style
  if (line.includes('>') && !line.includes(' →') && !line.includes(' â†’')) {
    return { kind: 'cmd', text: line }
  }

  const promptMatch = /^(you|koda)\s+(?:→|â†’)\s*(.*)$/.exec(line)
  if (promptMatch) {
    const who = promptMatch[1] === 'koda' ? 'koda' : 'you'
    return { kind: 'prompt', who, rest: promptMatch[2] ?? '' }
  }

  if (/Koda is thinking/i.test(line)) {
    return { kind: 'thinking', text: line }
  }

  return { kind: 'plain', text: line }
}

const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'] as const

export function TypewriterTerminal({
  lines,
  loop,
  ariaLabel,
  maxTypedLines = Number.POSITIVE_INFINITY,
  animate = true,
  instantKinds = ['box'],
  thinkingHoldMs = 900,
  instantPrefix = false,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const stableLines = useMemo(() => lines, [lines])

  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [printed, setPrinted] = useState<string[]>([])
  const [spinFrame, setSpinFrame] = useState(0)

  const loopTimeoutRef = useRef<number | null>(null)
  const holdTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (prefersReducedMotion || !animate) return

    if (instantPrefix) {
      let prefixEnd = 0
      while (prefixEnd < stableLines.length) {
        const line = stableLines[prefixEnd] ?? ''
        const render = classifyLine(line)
        if (line === '' || instantKinds.includes(render.kind)) {
          prefixEnd += 1
          continue
        }
        break
      }
      setPrinted(stableLines.slice(0, prefixEnd))
      setLineIndex(prefixEnd)
      setCharIndex(0)
    } else {
      setLineIndex(0)
      setCharIndex(0)
      setPrinted([])
    }

    setSpinFrame(0)
  }, [instantKinds, instantPrefix, prefersReducedMotion, stableLines, animate])

  useEffect(() => {
    if (prefersReducedMotion || !animate) return
    if (lineIndex >= maxTypedLines) return

    const current = stableLines[lineIndex] ?? ''
    const render = classifyLine(current)
    const isLastLine = lineIndex >= stableLines.length - 1
    const isLineComplete = charIndex >= current.length
    const isInstant = instantKinds.includes(render.kind)

    const baseTypeMs = 14
    const jitter = Math.floor(Math.random() * 24)
    const typeDelay = baseTypeMs + jitter
    const pauseAfterLine = current.length === 0 ? 250 : 420
    const pauseAfterAll = 1200

    const timeout = window.setTimeout(() => {
      if (isInstant && !isLineComplete) {
        setCharIndex(current.length)
        return
      }

      if (!isLineComplete) {
        setCharIndex((n) => n + 1)
        return
      }

      // For "instant" kinds (e.g. box drawing), render the whole consecutive
      // block in one shot so it doesn't appear line-by-line.
      if (isInstant && render.kind !== 'thinking') {
        let end = lineIndex
        while (end + 1 < stableLines.length) {
          const next = stableLines[end + 1] ?? ''
          const nextRender = classifyLine(next)
          if (!instantKinds.includes(nextRender.kind)) break
          end += 1
        }

        setPrinted((prev) => {
          const out = [...prev]
          for (let i = lineIndex; i <= end; i += 1) {
            const text = stableLines[i] ?? ''
            if (out.length === i) out.push(text)
            else out[i] = text
          }
          return out
        })
        setLineIndex(end + 1)
        setCharIndex(0)
        return
      }

      setPrinted((prev) => {
        if (prev.length === lineIndex + 1) return prev
        return [...prev, current]
      })

      if (render.kind === 'thinking') {
        if (holdTimeoutRef.current != null) window.clearTimeout(holdTimeoutRef.current)
        holdTimeoutRef.current = window.setTimeout(() => {
          setLineIndex((n) => n + 1)
          setCharIndex(0)
        }, thinkingHoldMs)
        return
      }

      if (!isLastLine) {
        setLineIndex((n) => n + 1)
        setCharIndex(0)
        return
      }

      if (!loop) return
      if (loopTimeoutRef.current != null) window.clearTimeout(loopTimeoutRef.current)
      loopTimeoutRef.current = window.setTimeout(() => {
        setLineIndex(0)
        setCharIndex(0)
        setPrinted([])
      }, pauseAfterAll)
    }, isLineComplete ? pauseAfterLine : typeDelay)

    return () => window.clearTimeout(timeout)
  }, [
    animate,
    charIndex,
    instantKinds,
    lineIndex,
    loop,
    maxTypedLines,
    prefersReducedMotion,
    stableLines,
    thinkingHoldMs,
  ])

  useEffect(() => {
    return () => {
      if (loopTimeoutRef.current != null) window.clearTimeout(loopTimeoutRef.current)
      if (holdTimeoutRef.current != null) window.clearTimeout(holdTimeoutRef.current)
    }
  }, [])

  const current = stableLines[lineIndex] ?? ''
  const typing = prefersReducedMotion ? '' : current.slice(0, charIndex)
  const currentCommitted = printed.length === lineIndex + 1

  const shown = prefersReducedMotion
    ? stableLines
    : !animate
      ? stableLines
      : lineIndex >= maxTypedLines
        ? stableLines
        : currentCommitted
          ? printed
          : [...printed, typing]

  useEffect(() => {
    if (prefersReducedMotion || !animate) return
    const lastLine = shown[shown.length - 1] ?? ''
    if (classifyLine(lastLine).kind !== 'thinking') return

    const interval = window.setInterval(() => {
      setSpinFrame((n) => (n + 1) % SPINNER_FRAMES.length)
    }, 90)
    return () => window.clearInterval(interval)
  }, [animate, prefersReducedMotion, shown])

  return (
    <section className="terminal" aria-label={ariaLabel ?? 'Terminal'}>
      <div className="terminalBar" aria-hidden="true">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="title">koda</span>
      </div>
      <pre className="terminalBody">
        <code>
          {shown.map((line, idx) => {
            const isLast = idx === shown.length - 1
            const render = classifyLine(line)

            if (render.kind === 'prompt') {
              return (
                <div className={`terminalLine prompt prompt-${render.who}`} key={idx}>
                  <span className="promptWho">{render.who}</span>
                  <span className="promptArrow"> → </span>
                  <span className="promptRest">{render.rest}</span>
                  {isLast && !prefersReducedMotion && animate ? (
                    <span className="cursor" aria-hidden="true">
                      ▋
                    </span>
                  ) : null}
                </div>
              )
            }

            if (render.kind === 'thinking') {
              // Ephemeral: only show while it's the last visible line.
              if (!isLast) return null
              const spinner = prefersReducedMotion || !animate ? '⠴' : SPINNER_FRAMES[spinFrame] ?? '⠴'
              const text = render.text.replace(/^\S+/, '').trimStart()
              return (
                <div className="terminalLine thinking" key={idx}>
                  <span className="thinkingSpinner" aria-hidden="true">
                    {spinner}
                  </span>
                  <span>{text.length ? text : 'Koda is thinking...'}</span>
                  {isLast && !prefersReducedMotion && animate ? (
                    <span className="cursor" aria-hidden="true">
                      ▋
                    </span>
                  ) : null}
                </div>
              )
            }

            return (
              <div className={`terminalLine ${render.kind}`} key={idx}>
                <span>{render.text}</span>
                {isLast && !prefersReducedMotion && animate ? (
                  <span className="cursor" aria-hidden="true">
                    ▋
                  </span>
                ) : null}
              </div>
            )
          })}
        </code>
      </pre>
    </section>
  )
}
