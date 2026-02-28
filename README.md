# Snaarp Dashboard

A React dashboard that matches the provided Snaarp UI design, with **drag-and-drop** reordering of sections using [@hello-pangea/dnd](https://github.com/hello-pangea/dnd).

## Getting started

**Requirements:** Node.js and npm/yarn ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
cd snaarp-dashboard-ndibe
yarn i
yarn run dev
```

Open [http://localhost:8080](http://localhost:8080).

## Features

- **Drag and drop** — Reorder dashboard sections (Cloud Network, File Sharing, Device Management, Productivity Report, Email Chart, Online Users, App Activity) by dragging the handle on the top-right of each section.
- **Layout** — Dark sidebar (Snaarp branding, search, nav, Christina Grant profile), light main area with header search and Agent Stats.
- **Charts** — Recharts for Strength donut, File Sharing bar chart, Email donut & line chart, and stat sparklines.
- **Accessibility** — Semantic HTML, ARIA where needed, keyboard-friendly drag handle.

## Tech stack

- **React 18** + TypeScript
- **Vite**
- **@hello-pangea/dnd** — drag and drop
- **Tailwind CSS** — styling
- **Recharts** — charts
- **Radix UI** (Avatar, Button, etc.) + Lucide icons

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `yarn run dev`  | Start dev server (port 8080) |
| `yarn run build`| Production build         |
| `yarn run preview` | Preview production build |
| `yarn run lint` | Run ESLint               |
| `yarn run test` | Run tests                |

## Repository & live demo

- **GitHub:** https://github.com/Ndibechinonso/snaarp
- **Live demo:** https://snaarp-ndibe.netlify.app/
