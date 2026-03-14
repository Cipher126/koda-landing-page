import { useEffect, useState } from 'react'
import { TypewriterTerminal } from './TypewriterTerminal'

type Props = {
  ariaLabel?: string
  compactLines: string[]
  expandedLines: string[]
}

export function ExpandableTerminal({ ariaLabel, compactLines, expandedLines }: Props) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [expanded])

  return (
    <>
      <div className="terminalWrap">
        <TypewriterTerminal
          ariaLabel={ariaLabel}
          instantKinds={['cmd', 'box', 'thinking']}
          instantPrefix
          lines={compactLines}
        />
        <button
          className="termExpandBtn"
          type="button"
          onClick={() => setExpanded(true)}
          aria-label="Expand terminal"
        >
          Expand
        </button>
      </div>

      {expanded ? (
        <div className="termModal" role="dialog" aria-modal="true">
          <button
            className="termBackdrop"
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Close terminal"
          />
          <div className="termModalPanel">
            <div className="termModalTop">
              <div className="termModalTitle">Terminal transcript</div>
              <button
                className="termCloseBtn"
                type="button"
                onClick={() => setExpanded(false)}
              >
                Close
              </button>
            </div>
            <TypewriterTerminal
              ariaLabel="Expanded terminal transcript"
              animate={false}
              lines={expandedLines}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
