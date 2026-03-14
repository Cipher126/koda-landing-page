import { useEffect, useRef, useState } from 'react'

type Options = {
  rootMargin?: string
  threshold?: number
  once?: boolean
}

export function useInView<T extends Element>({
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.2,
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin, threshold },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, inView }
}

