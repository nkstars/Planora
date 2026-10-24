# Planora AI — Celebration & Event Planner

**Plan your celebration. Personalize the details. Keep the budget in view.**

Planora AI is a responsive event-planning web app built for **PromptWars Challenge 5: Celebration & Event Planner**. It helps users organize weddings, birthdays, anniversaries, and community events in one workspace.

🌐 **Live demo:** https://planora-ai-event-pla-wqvx.bolt.host/  
💻 **Source code:** https://github.com/nkstars/Planora

## Features

- **Event setup:** Create an event with its type, date, location, guest count, budget, theme, style, dietary preferences, and planning priorities.
- **Planning dashboard:** Review event summaries, budget utilization, task progress, and upcoming deadlines.
- **Structured event plans:** Generate theme ideas, decorations, food, entertainment, activities, budget allocations, preparation milestones, vendor tasks, cost-saving tips, and an event-day schedule.
- **Budget planner:** Edit category allocations, track the remaining budget, and identify potential overspending.
- **Preparation timeline:** View milestones chronologically and track task completion.
- **Vendor and task management:** Add, edit, search, filter, and complete tasks; record vendor details, estimated costs, booking status, and notes.
- **Personalized ideas:** Explore themes, decor, menus, entertainment, and activities.
- **Sample event:** Explore a sample wedding plan without completing the setup flow.
- **Local persistence:** Event data and supported edits are saved in browser `localStorage`.
- **Responsive design:** Designed for desktop, tablet, and mobile screens.

## Current AI status

The current version uses a **deterministic local planning engine** to generate structured, event-specific suggestions without an API key or network request. It does **not currently call a live Gemini or other GenAI API**.

This makes the prototype usable without external credentials, while a secure server-side GenAI integration remains a potential enhancement. Private API keys should never be placed in client-side code or a public repository.

Budget figures are planning estimates, not verified vendor quotes. Suggested vendor tasks do not mean a vendor has been contacted or booked.

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| State and persistence | React Context and browser `localStorage` |
| Tests | Vitest |

## Run locally

### Prerequisites

- Node.js 18 or later
- npm

### Install and start

```bash
git clone https://github.com/nkstars/Planora.git
cd Planora
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Available scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript checks
npm test          # Run Vitest tests
```

## How to explore

1. Open the [live demo](https://planora-ai-event-pla-wqvx.bolt.host/).
2. Load the sample event or create a new event.
3. Review the generated plan and budget breakdown.
4. Edit allocations and track preparation tasks.
5. Explore the timeline, vendor/task manager, and ideas views.
6. Refresh the page to check locally saved progress.

Use the app's reset option to clear the demo data and start again.

## Design

Planora uses a premium editorial-style interface with warm ivory backgrounds, muted sage green, charcoal text, and champagne-gold accents. The layout features generous spacing, rounded cards, subtle borders, and restrained hover effects.

## Project structure

The application separates typed models, shared application state, reusable UI components, dedicated views, planning logic, and browser persistence into organized modules.

## Deployment

The live prototype is hosted on Bolt:

https://planora-ai-event-pla-wqvx.bolt.host/

For a separate static deployment, run `npm run build` and deploy the generated `dist/` directory to a compatible static host. Configure SPA fallback routing if required.

## Built for PromptWars

**Challenge 5 — Celebration & Event Planner**

Planora explores how an interactive planning workspace can help people turn event requirements into a clear, budget-aware plan.

---

**Planora AI — Make every celebration easier to plan.**
