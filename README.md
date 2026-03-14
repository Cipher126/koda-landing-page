# Koda (Landing Page)

Single-page marketing site for **Koda**, an AI coding assistant that lives in your terminal.

- Koda CLI repo: https://github.com/cipher126/koda
- This repo is only the landing page UI (React/Vite).

## Tech

- React + TypeScript
- Vite

## Local development

```bash
npm install
npm run dev
```

## View on your phone (same Wi-Fi)

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

1. Get your PC IP: run `ipconfig` and copy the `IPv4 Address`
2. Open on your phone: `http://<YOUR_IPV4>:5173`

If it fails, allow port `5173` through Windows Firewall.

## Build and preview

```bash
npm run build
npm run preview
```

Vite outputs production files to `dist/` (this folder is ignored by Git).

## API keys (for the Koda CLI)

The landing page itself does **not** require API keys.

The **Koda CLI** (shown in the terminal demos) expects provider keys in a `.env` file at the project root:

```env
# .env (project root)
GROQ_API_KEY=
OPENAI_API_KEY=
XAI_API_KEY=
GEMINI_API_KEY=
```

You only need the key for the provider you plan to use.

## Project structure

- `src/sections/` page sections (Hero, Features, Languages, Providers, QuickStart, Footer)
- `src/components/` UI components (terminal, header, icons)
- `src/styles/` CSS split by area, imported from `src/index.css`

