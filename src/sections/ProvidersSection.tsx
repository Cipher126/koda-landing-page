import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type Provider = {
  name: string
  tone: 'groq' | 'gemini' | 'openai' | 'grok' | 'ollama'
  icon: ReactNode
  models: string[]
}

import { LogoGemini, LogoGroq, LogoGrok, LogoOllama, LogoOpenAI } from '../components/Icons'

const PROVIDERS: Provider[] = [
  {
    name: 'Groq',
    tone: 'groq',
    icon: <LogoGroq className="providerSvg groq" title="Groq" />,
    models: [
      'llama-3.3-70b-versatile',
      'llama-3.1-8b-instant',
      'meta-llama/llama-4-scout-17b-16e-instruct',
      'openai/gpt-oss-120b',
      'moonshotai/kimi-k2-instruct-0905',
      'qwen/qwen3-32b',
    ],
  },
  {
    name: 'Gemini',
    tone: 'gemini',
    icon: <LogoGemini className="providerSvg gemini" title="Gemini" />,
    models: [
      'gemini-2.5-pro',
      'gemini-2.5-flash-lite',
      'gemini-2.5-flash',
      'gemini-3.1-pro-preview',
    ],
  },
  {
    name: 'OpenAI',
    tone: 'openai',
    icon: <LogoOpenAI className="providerSvg openai" title="OpenAI" />,
    models: ['gpt-5o', 'gpt-5-mini', 'gpt-5.1'],
  },
  {
    name: 'Grok',
    tone: 'grok',
    icon: <LogoGrok className="providerSvg grok" title="Grok" />,
    models: [
      'grok-4-1-fast-reasoning',
      'grok-4.20-multi-agent-beta-0309',
      'grok-4.20-beta-0309-reasoning',
      'grok-code-fast-1',
    ],
  },
  {
    name: 'Ollama',
    tone: 'ollama',
    icon: <LogoOllama className="providerSvg ollama" title="Ollama" />,
    models: ['llama3', 'codellama', 'mistral', 'gemma2', 'phi3'],
  },
]

export function ProvidersSection() {
  const [open, setOpen] = useState<string | null>(null)
  const providers = useMemo(() => PROVIDERS, [])

  return (
    <section id="providers" className="section" aria-label="Providers">
      <div className="sectionHead">
        <h2 className="h2">Providers</h2>
        <p className="sectionSub">Switch providers mid-session, never lose context.</p>
      </div>

      <div className="providerRow">
        {providers.map((provider) => {
          const isOpen = open === provider.name
          return (
          <article className="providerTile" key={provider.name}>
            <div className="providerTop">
              <span className={`providerIcon ${provider.tone}`} aria-hidden="true">
                {provider.icon}
              </span>
              <div className="providerText">
                <div className="providerName">{provider.name}</div>
                <div className="providerMeta">{provider.models.length} supported models</div>
              </div>
            </div>

            <button
              className="providerToggle"
              type="button"
              onClick={() => setOpen((cur) => (cur === provider.name ? null : provider.name))}
              aria-expanded={isOpen}
            >
              Supported models
              <span className="providerToggleIcon" aria-hidden="true">
                {isOpen ? '-' : '+'}
              </span>
            </button>

            <div className={`providerModels ${isOpen ? 'isOpen' : ''}`}>
              <div className="modelChips" role="list" aria-label={`${provider.name} models`}>
                {provider.models.map((model) => (
                  <span key={model} className="chip" role="listitem">
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )})}
      </div>
    </section>
  )
}
