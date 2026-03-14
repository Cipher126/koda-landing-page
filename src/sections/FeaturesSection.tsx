import type { CSSProperties, ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  icon: ReactNode
  tone: 'python' | 'js' | 'java'
  chips: string[]
}

import {
  IconBuild,
  IconDebug,
  IconExplain,
  IconProviders,
  IconRefactor,
  IconRollback,
} from '../components/Icons'
import { useInView } from '../components/useInView'

const FEATURES: Feature[] = [
  {
    title: 'Build Projects',
    description: 'Scaffold apps and wire the boring parts automatically.',
    icon: <IconBuild className="i" title="Build" />,
    tone: 'python',
    chips: ['scaffold', 'deps', 'structure'],
  },
  {
    title: 'Debug Code',
    description: 'Trace failures, propose fixes, and verify assumptions.',
    icon: <IconDebug className="i" title="Debug" />,
    tone: 'js',
    chips: ['errors', 'logs', 'rerun'],
  },
  {
    title: 'Refactor',
    description: 'Make big changes safely with minimal churn.',
    icon: <IconRefactor className="i" title="Refactor" />,
    tone: 'java',
    chips: ['cleanup', 'safe', 'diffs'],
  },
  {
    title: 'Explain Code',
    description: 'Understand unfamiliar codebases in plain language.',
    icon: <IconExplain className="i" title="Explain" />,
    tone: 'python',
    chips: ['readme', 'why', 'how'],
  },
  {
    title: 'Multi-Provider',
    description: 'Pick the best model for the moment, not the day.',
    icon: <IconProviders className="i" title="Providers" />,
    tone: 'js',
    chips: ['switch', 'context', 'cost'],
  },
  {
    title: 'Rollback',
    description: 'Undo changes cleanly when you want a different path.',
    icon: <IconRollback className="i" title="Rollback" />,
    tone: 'java',
    chips: ['undo', 'snapshots', 'safe'],
  },
]

export function FeaturesSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false })

  return (
    <section id="features" className="section" aria-label="Features">
      <div className="sectionHead">
        <h2 className="h2">Features</h2>
        <p className="sectionSub">Everything you need to ship faster.</p>
      </div>

      <div
        ref={ref}
        className={`tileGrid tileGrid3 ${inView ? 'isInView' : ''}`}
        aria-label="Feature tiles"
      >
        {FEATURES.map((feature, i) => (
          <article
            className={`tile tile-${feature.tone}`}
            key={feature.title}
            style={{ ['--i' as never]: i } as CSSProperties}
          >
            <div className="tileTop">
              <span className="tileIcon" aria-hidden="true">
                {feature.icon}
              </span>
              <div className="tileTitle">{feature.title}</div>
            </div>
            <div className="tileBlurb">{feature.description}</div>
            <div className="tileChips" aria-label={`${feature.title} tags`}>
              {feature.chips.map((chip) => (
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
