import { KodaMark } from './Icons'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className="top">
        <a className="brand" href="#top" aria-label="Koda" onClick={close}>
          <span className="brandMark" aria-hidden="true">
            <KodaMark className="markSvg" />
          </span>
          <span className="brandName">koda</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#languages">Languages</a>
          <a href="#providers">Providers</a>
          <a className="navCta" href="#quickstart">
            Quick start
          </a>
        </nav>

        <button
          className="burger"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span aria-hidden="true">☰</span>
        </button>
      </header>

      {open ? (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="drawerBackdrop" type="button" onClick={close} aria-label="Close menu" />
          <div className="drawerPanel">
            <div className="drawerTop">
              <div className="drawerTitle">Menu</div>
              <button className="drawerClose" type="button" onClick={close}>
                Close
              </button>
            </div>
            <div className="drawerLinks" role="navigation" aria-label="Mobile">
              <a href="#features" onClick={close}>
                Features
              </a>
              <a href="#languages" onClick={close}>
                Languages
              </a>
              <a href="#providers" onClick={close}>
                Providers
              </a>
              <a href="#quickstart" onClick={close} className="drawerCta">
                Quick start
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
