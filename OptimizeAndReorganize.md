We’re refactoring the codebase into a modern Vite + React + TypeScript project using MUI (Material UI) for the design system and styled-components for custom styling. The structure follows a feature-based architecture so each feature is self-contained (components, hooks, utils, types, tests).

This refactor ensures:

⚡ Fast builds with Vite.

🎨 Modern UI using MUI with styled-components as the styling engine.

🗂 Feature-based folders (scalable, modular, clean).

🧩 Reusable UI components (Cards, Grids, Forms).

🔄 Local mock data only — no API calls (mock repositories or in-memory stores).

✅ Type safety via TypeScript and Zod validation where needed.


Task 1 — Project Setup

Create a new Vite + React + TypeScript project.
Install @mui/material @mui/icons-material @emotion/react styled-components @emotion/styled react-router-dom zod react-hook-form.
Configure ESLint + Prettier.
Set up vite.config.ts with alias @/* → src/*.

Acceptance

Vite project compiles.

MUI and styled-components render correctly.

Aliases resolve.



Task 2 — Feature-based Folder Structure

Prompt: Refactor into this structure:

src/
  app/
    providers/
    routes/
    layout/
  features/
    card/
      components/
      hooks/
      utils/
      types/
      pages/
  components/ (shared UI)
  lib/ (helpers, theme, styled wrapper)
  styles/
    global.ts
  main.tsx


Acceptance

Each feature has its own folder.

Shared code is only in components/ or lib/.

