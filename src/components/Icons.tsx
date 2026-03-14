import type { ReactNode } from 'react'
import { FaJava } from 'react-icons/fa6'
import {
  SiGooglegemini,
  SiJavascript,
  SiOllama,
  SiOpenai,
  SiPython,
  SiX,
} from 'react-icons/si'

type SvgProps = {
  className?: string
  title?: string
}

function Svg({ className, title, children }: SvgProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function KodaMark({ className, title }: SvgProps) {
  return (
    <Svg className={className} title={title}>
      <path
        d="M7 4.5h10a2.5 2.5 0 0 1 2.5 2.5v10A2.5 2.5 0 0 1 17 19.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 15.5 16.6 7.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 8.4h2.9M13.1 15.6H16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export function IconBuild({ className, title }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M102.8 57.3C108.2 51.9 116.6 51.1 123 55.3L241.9 134.5C250.8 140.4 256.1 150.4 256.1 161.1L256.1 210.7L346.9 301.5C380.2 286.5 420.8 292.6 448.1 320L574.2 446.1C592.9 464.8 592.9 495.2 574.2 514L514.1 574.1C495.4 592.8 465 592.8 446.2 574.1L320.1 448C292.7 420.6 286.6 380.1 301.6 346.8L210.8 256L161.2 256C150.5 256 140.5 250.7 134.6 241.8L55.4 122.9C51.2 116.6 52 108.1 57.4 102.7L102.8 57.3zM247.8 360.8C241.5 397.7 250.1 436.7 274 468L179.1 563C151 591.1 105.4 591.1 77.3 563C49.2 534.9 49.2 489.3 77.3 461.2L212.7 325.7L247.9 360.8zM416.1 64C436.2 64 455.5 67.7 473.2 74.5C483.2 78.3 485 91 477.5 98.6L420.8 155.3C417.8 158.3 416.1 162.4 416.1 166.6L416.1 208C416.1 216.8 423.3 224 432.1 224L473.5 224C477.7 224 481.8 222.3 484.8 219.3L541.5 162.6C549.1 155.1 561.8 156.9 565.6 166.9C572.4 184.6 576.1 203.9 576.1 224C576.1 267.2 558.9 306.3 531.1 335.1L482 286C448.9 253 403.5 240.3 360.9 247.6L304.1 190.8L304.1 161.1L303.9 156.1C303.1 143.7 299.5 131.8 293.4 121.2C322.8 86.2 366.8 64 416.1 63.9z"
      />
    </svg>
  )
}

export function IconDebug({ className, title }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L273.8 240L376 240C390.2 240 403.7 242.8 416 248L524.8 166.4C538.9 155.8 559 158.7 569.6 172.8C580.2 186.9 577.3 207 563.2 217.6L465.4 290.9C470.7 299.8 474.7 309.6 477.2 320L576 320C593.7 320 608 334.3 608 352C608 369.7 593.7 384 576 384L480 384L480 416C480 425.5 479.2 434.7 477.6 443.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM430.2 532C407 554.1 377.2 569.2 344 574.2L344 445.8L430.2 532zM296 397.8L296 574.2C244.8 566.5 201.5 534.5 178.3 490.3L115.2 537.6C101.1 548.2 81 545.3 70.4 531.2C59.8 517.1 62.7 497 76.8 486.4L160.2 423.9C160.1 421.3 160 418.7 160 416L160 384L64 384C46.3 384 32 369.7 32 352C32 334.3 46.3 320 64 320L162.8 320C166.1 306.1 172.1 293.3 180.4 282.2L296 397.8zM387.6 192L305.2 192L232.9 119.7C248.1 86.8 281.4 64 320 64C373 64 416 107 416 160L416 163.6C416 179.3 403.3 192 387.6 192z"
      />
    </svg>
  )
}

export function IconRefactor({ className, title }: SvgProps) {
  return (
    <Svg className={className} title={title}>
      <path
        d="M7 7h10M7 17h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 9.5 6.5 7 9 4.5M15 19.5 17.5 17 15 14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function IconExplain({ className, title }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"
      />
    </svg>
  )
}

export function IconProviders({ className, title }: SvgProps) {
  return (
    <Svg className={className} title={title}>
      <path
        d="M7 8.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17 20.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 6l10 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 8.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 20.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17 6 7 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export function IconRollback({ className, title }: SvgProps) {
  return (
    <Svg className={className} title={title}>
      <path
        d="M8.2 8.2H5.2V5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.4 8.2a7.8 7.8 0 1 1 2.2 9.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export function LogoPython({ className, title }: SvgProps) {
  return <SiPython className={className} role="img" aria-label={title ?? 'Python'} />
}

export function LogoJavaScript({ className, title }: SvgProps) {
  return (
    <SiJavascript className={className} role="img" aria-label={title ?? 'JavaScript'} />
  )
}

export function LogoJava({ className, title }: SvgProps) {
  return <FaJava className={className} role="img" aria-label={title ?? 'Java'} />
}

export function LogoGroq({ className, title }: SvgProps) {
  return <img className={className} src="/logos/groq.svg" alt={title ?? ''} />
}

export function LogoGemini({ className, title }: SvgProps) {
  return (
    <SiGooglegemini className={className} role="img" aria-label={title ?? 'Gemini'} />
  )
}

export function LogoOpenAI({ className, title }: SvgProps) {
  return <SiOpenai className={className} role="img" aria-label={title ?? 'OpenAI'} />
}

export function LogoOllama({ className, title }: SvgProps) {
  return <SiOllama className={className} role="img" aria-label={title ?? 'Ollama'} />
}

export function LogoGrok({ className, title }: SvgProps) {
  return <SiX className={className} role="img" aria-label={title ?? 'Grok'} />
}
