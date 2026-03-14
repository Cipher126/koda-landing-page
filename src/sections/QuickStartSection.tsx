import { TypewriterTerminal } from '../components/TypewriterTerminal'

export function QuickStartSection() {
  return (
    <section id="quickstart" className="section" aria-label="Quick start">
      <div className="sectionHead">
        <h2 className="h2">Quick start</h2>
        <p className="sectionSub">Three steps to first prompt.</p>
      </div>

      <div className="quickGrid">
        <div className="steps">
          <div className="step">
            <div className="stepTitle">Step 1</div>
            <div className="stepLabel">Clone the repo</div>
            <pre className="codeBlock">
              <code>{`git clone https://github.com/cipher126/koda\ncd koda`}</code>
            </pre>
          </div>

          <div className="step envStep">
            <div className="stepTitle">Step 2</div>
            <div className="stepLabel">Add API key(s) in `.env`</div>
            <p className="stepNote">
              Put this file in the project root. You only need the key for the
              provider you prefer (not all of them).
            </p>
            <pre className="codeBlock">
              <code>{`# .env (project root)\nGROQ_API_KEY=\nOPENAI_API_KEY=\nXAI_API_KEY=\nGEMINI_API_KEY=`}</code>
            </pre>
          </div>

          <div className="step">
            <div className="stepTitle">Step 3</div>
            <div className="stepLabel">Install</div>
            <pre className="codeBlock">
              <code>{`uv tool install --editable .`}</code>
            </pre>
          </div>

          <div className="step">
            <div className="stepTitle">Step 4</div>
            <div className="stepLabel">Start</div>
            <pre className="codeBlock">
              <code>{`koda start`}</code>
            </pre>
          </div>
        </div>

        <div className="quickTerm">
          <TypewriterTerminal
            ariaLabel="Quick start terminal"
            instantKinds={['box']}
            lines={[
              '$ git clone https://github.com/cipher126/koda',
              '$ cd koda',
              '$ export GROQ_API_KEY="your_key_here"',
              '$ uv tool install --editable .',
              '$ koda start',
              '┌────────────────────────────────────────────────────────────────┐',
              '│ Welcome to Koda 🤖                                             │',
              "│ Your AI coding assistant. Type your request or 'exit' to quit. │",
              '│                                                                │',
              '│ provider : groq                                                │',
              '│ model    : moonshotai/kimi-k2-instruct-0905                    │',
              '│ dir      : ~/my-project                                     │',
              '└────────────────────────────────────────────────────────────────┘',
              'you → hi',

              'koda →',
              "Hey! What's up? Need help with any code or projects?"
            ]}
          />
          <p className="quickHint">Tip: ask for a plan first, then iterate.</p>
        </div>
      </div>
    </section>
  )
}
