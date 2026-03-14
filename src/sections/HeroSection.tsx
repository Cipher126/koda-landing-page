import { ExpandableTerminal } from '../components/ExpandableTerminal'
import { KodaMark } from '../components/Icons'

export function HeroSection() {
  const compactLines = [
    '$ koda start',
    '┌────────────────────────────────────────────────────────────────┐',
    '│ Welcome to Koda 🤖                                             │',
    "│ Your AI coding assistant. Type your request or 'exit' to quit. │",
    '│                                                                │',
    '│ provider : groq                                                │',
    '│ model    : moonshotai/kimi-k2-instruct-0905                    │',
    '│ dir      : ~/my-project                                     │',
    '└────────────────────────────────────────────────────────────────┘',
    '',
    'you → who are you and what can you do',
    '',
    'koda →',
    '⠴  Koda is thinking...',
    "I'm Koda, your AI coding assistant built by Cipher.",
    'Expand this terminal to read the full response.',
  ]

  const expandedLines = [
    ...compactLines.slice(0, 9),
    '',
    'you → who are you and what can you do',
    '',
    'koda →',
    "I'm Koda, an AI coding assistant built by Cipher (Fabiyi Pelumi) as a final year project. I'm designed to help",
    'developers directly from the terminal.',
    '',
    'I can help you with:',
    '',
    'Core Tasks:',
    '',
    ' • Build complete projects from scratch in Python, JavaScript, or Java',
    ' • Read, write, and edit files on your machine',
    ' • Run code and analyze output/errors',
    ' • Debug code autonomously (find errors, fix them, re-run until working)',
    ' • Refactor and improve existing code',
    ' • Explain how code works in plain language',
    " • Roll back any file changes if you don't like them",
    '',
    'Languages Supported:',
    '',
    ' • Python (.py)',
    ' • JavaScript (.js, .mjs, .ts)',
    ' • Java (.java)',
    '',
    'Project Management:',
    '',
    ' • Create new project structures automatically',
    ' • Explore existing directories and file structures',
    ' • Manage snapshots of your code changes',
    '',
    "Just tell me what you want to build, fix, or understand. I'm running in a persistent session, so I remember everything",
    'we discuss until you exit.',
  ]

  return (
    <section className="hero" aria-label="Hero">
      <div className="heroLeft">
        <div className="heroLockup" aria-label="Koda">
          <div className="heroEmblem" aria-hidden="true">
            <KodaMark className="heroEmblemSvg" />
          </div>
          <span className="heroWord">koda</span>
        </div>

        <h1 className="h1">An AI coding assistant that lives in your terminal</h1>
        <p className="sub">
          Build, debug, refactor, and explain code without losing flow. Switch
          providers mid-session and keep context intact.
        </p>

        <div className="heroBadges" aria-label="Highlights">
          <span className="badge">Multi-provider</span>
          <span className="badge">Rollback</span>
          <span className="badge">Terminal-native</span>
        </div>

        <div className="heroActions">
          <a className="btn btnPrimary" href="#quickstart">
            Get Started
          </a>
          <a
            className="btn btnGhost"
            href="https://github.com/cipher126/koda"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="heroRight">
        <ExpandableTerminal
          ariaLabel="Koda terminal session"
          compactLines={compactLines}
          expandedLines={expandedLines}
        />
      </div>
    </section>
  )
}
