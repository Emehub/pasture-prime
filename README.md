# Cliftech React (Basic)

Production-ready React starter for **static** projects (no API layer).
Clone this repo whenever you need a fresh React app with sensible defaults already wired.

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v7**
- **React Hook Form** + **Zod** (validation ready when needed)
- **React Toastify** (notifications)
- **React Icons**
- **ESLint** + **Prettier** + **Husky** + **lint-staged**
- `@` path alias → `src/*`

## Scripts

```bash
pnpm dev          # start dev server
pnpm build        # type-check + production build
pnpm type-check   # TypeScript only
pnpm lint         # eslint
pnpm lint:fix     # eslint --fix
pnpm format       # prettier --write
pnpm preview      # preview production build
```

## Folder structure

```
src/
├── assets/               # images, svgs, fonts
├── components/
│   ├── common/           # Button, Input, Spinner, Container, LoadingScreen, ErrorBoundary
│   └── layout/           # Navbar, Footer, MainLayout
├── config/               # env validation (zod)
├── constants/            # ROUTES, APP, BREAKPOINTS
├── hooks/                # useDebounce, useLocalStorage, useMediaQuery, useToggle, useClickOutside
├── lib/                  # cn() helper
├── pages/                # HomePage, NotFoundPage
├── router/               # GlobalRoute (BrowserRouter + MainLayout outlet)
├── types/                # shared TS types
├── utils/                # formatters, storage, validators (zod schemas)
├── App.tsx               # ErrorBoundary + Router + ToastContainer
└── main.tsx              # React root
```

## Using as a template

1. Use this repo as a GitHub template, or clone it:
   ```bash
   git clone https://github.com/<you>/cliftech-react-basic new-project
   cd new-project && pnpm install
   cp .env.example .env
   ```
2. Update `APP` in `src/constants/app.ts` and `name` in `package.json`.
3. Add routes to `src/constants/routes.ts` and wire them in `src/router/GlobalRoute.tsx`.
4. `pnpm dev`.

## Environment

Copy `.env.example` → `.env`. All env variables must be prefixed with `VITE_` and are validated
via Zod in `src/config/env.ts` — add new keys there.

## Notes

- This template is **API-free** — no HTTP client, no React Query, no data-fetching plumbing.
- A separate template handles API-based projects (axios, interceptors, React Query, env URLs).
