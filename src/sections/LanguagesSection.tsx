import type { CSSProperties, ReactNode } from 'react'

type Language = {
  name: string
  tone: 'python' | 'js' | 'java'
  fileTypes: string
  tagline: string
  chips: string[]
  icon: ReactNode
}

import { LogoJava, LogoJavaScript, LogoPython } from '../components/Icons'
import { useInView } from '../components/useInView'

const LANGUAGES: Language[] = [
  {
    name: 'Python',
    tone: 'python',
    fileTypes: '.py, .ipynb',
    tagline: 'Tooling, scripts, backends.',
    chips: ['build', 'debug', 'refactor'],
    icon: <LogoPython className="logoSvg python" title="Python" />,
  },
  {
    name: 'JavaScript',
    tone: 'js',
    fileTypes: '.js  .mjs  .ts, .jsx, .tsx',
    tagline: 'Web apps and Node services.',
    chips: ['web', 'node', 'tooling'],
    icon: <LogoJavaScript className="logoSvg js" title="JavaScript" />,
  },
  {
    name: 'Java',
    tone: 'java',
    fileTypes: '.java',
    tagline: 'Services and large codebases.',
    chips: ['services', 'cleanup', 'tests'],
    icon: <LogoJava className="logoSvg java" title="Java" />,
  },
]

export function LanguagesSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true })

  return (
    <section id="languages" className="section" aria-label="Supported languages">
      <div className="sectionHead">
        <h2 className="h2">Supported languages</h2>
        <p className="sectionSub">The ones you ship with most.</p>
      </div>

      <div
        ref={ref}
        className={`tileGrid tileGrid3 ${inView ? 'isInView' : ''}`}
        aria-label="Languages"
      >
        {LANGUAGES.map((lang, i) => (
          <article
            className={`tile tile-${lang.tone}`}
            key={lang.name}
            style={{ ['--i' as never]: i } as CSSProperties}
          >
            <div className="tileTop">
              <span className="tileIcon" aria-hidden="true">
                {lang.icon}
              </span>
              <div className="tileTitle">{lang.name}</div>
            </div>
            <div className="tileMeta">{lang.fileTypes}</div>
            <div className="tileBlurb">{lang.tagline}</div>
            <div className="tileChips" aria-label={`${lang.name} tags`}>
              {lang.chips.map((chip) => (
                <span className="miniChip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
