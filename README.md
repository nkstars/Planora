# Planora AI

**Planora AI** is an elegant, AI-powered event planning application for weddings, birthdays, anniversaries, and community events. It turns event details, preferences, guest count, date, and budget into an actionable plan — complete with personalized ideas, a budget allocation, a preparation timeline, and a vendor checklist.

Built for **PromptWars Challenge 5: Celebration & Event Planner**.

---

## Features

- **Dashboard** — welcome overview with event summary cards, budget utilization, task-completion progress, upcoming deadlines, and a first-time empty state.
- **Guided event creation** — a polished multi-step form collecting event type, name, date, location, guest count, budget (with currency, defaulting to INR), theme, style, color palette, dietary preferences, planning priorities, and notes. Includes validation, back/next navigation, a progress indicator, and a review step.
- **AI event planner** — generates a structured, event-specific plan: concept, personalized theme, decor/food/entertainment/activity ideas, budget breakdown, preparation timeline, vendor checklist, cost-saving tips, and an event-day schedule. Powered by a deterministic local planning engine that works without any API key.
- **Budget planner** — editable category-wise breakdown, live remaining-budget calculation, overspend flagging, and cost-saving suggestions.
- **Timeline** — chronological preparation milestones with deadlines, status, overdue highlighting, and one-click completion.
- **Vendor & task manager** — tasks grouped by category with search and filters; add/edit/delete/complete; track vendor name, contact, estimated cost, booking status (Suggested → Contacted → Confirmed), and notes.
- **Personalized ideas** — theme, decor, menu, entertainment, and activity recommendations with a revise-plan action that regenerates the plan when event details change.
- **Sample event** — a clearly labelled demo event (a wedding) so evaluators can explore the full app instantly. A reset action clears all data.
- **Persistence** — all events, budgets, tasks, timeline progress, and edits are saved to `localStorage` and restored on reload.

---

## Design

Planora uses a premium editorial SaaS aesthetic:

- **Palette:** warm ivory backgrounds, muted sage green, charcoal text, and subtle champagne-gold accents.
- **Typography:** *Cormorant Garamond* serif for headings, *Plus Jakarta Sans* for body.
- **Details:** generous whitespace, rounded cards, delicate borders, soft shadows, restrained hover animations, visible focus states, and a responsive layout from mobile to desktop.

---

## Tech stack

| Layer | Choice |
|------|--------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| State | React Context + `localStorage` |
| Testing | Vitest |

No API keys or secrets are stored in the source code.

---

## Architecture

```
src/
├── App.tsx                    # Root: provider + view router
├── main.tsx                   # Entry point
├── index.css                  # Tailwind layers + design tokens
├── types/
│   ├── index.ts               # Event, Budget, Task, Timeline, Plan, Recommendation types
│   └── nav.ts                 # View navigation type
├── lib/
│   ├── constants.ts           # Event metadata, options, currency symbols
│   ├── format.ts              # Money/date formatting, date math, helpers
│   ├── storage.ts             # localStorage load/save/clear
│   ├── sampleData.ts          # Demo event factory
│   ├── planner.ts             # EventPlannerService interface + local planning engine
│   └── __tests__/planner.test.ts
├── context/
│   └── AppContext.tsx         # Global state: events, plans, tasks, timeline, budgets
├── components/
│   ├── CreateEventForm.tsx    # Multi-step guided form
│   ├── layout/
│   │   └── Layout.tsx         # Sidebar + mobile nav + header
│   └── ui/
│       ├── Banner.tsx         # Info / success / warning / error banner
│       ├── ConfirmDialog.tsx  # Confirmation modal for destructive actions
│       ├── EmptyState.tsx     # Empty-state component
│       ├── EventTypeBadge.tsx # Event type chip
│       ├── Modal.tsx          # Accessible modal dialog
│       ├── Progress.tsx       # Progress bar
│       └── Spinner.tsx        # Loading spinner
└── views/
    ├── DashboardView.tsx
    ├── MyEventsView.tsx
    ├── BudgetView.tsx
    ├── TimelineView.tsx
    ├── VendorsView.tsx
    └── IdeasView.tsx
```

### Planning engine — modular AI interface

`src/lib/planner.ts` exports an `EventPlannerService` interface:

```ts
export interface EventPlannerService {
  generatePlan(event: EventDetails, existingTasks?: Task[]): Promise<Plan>;
  revisePlan(event: EventDetails, currentPlan: Plan): Promise<Plan>;
  readonly source: 'local-engine' | 'gemini-api';
}
```

The default implementation, `localPlanner`, is a **deterministic local engine** that produces sensible, event-specific results without any network call. Its `source` is `'local-engine'`, and the UI transparently labels generated ideas as coming from the built-in engine — it never claims a real AI API was contacted.

To connect a Gemini API later, implement the same interface in a new module (e.g. `geminiPlanner.ts`) and swap it in where `localPlanner` is used. Keep the API key on a server (e.g. a Supabase Edge Function) — never expose it in frontend code.

### State management

`AppContext` is the single source of truth. It holds events, plans, tasks, timeline, and budgets, persists the entire state to `localStorage` on every change, and exposes typed actions for creating, updating, and deleting entities. Views read from and write to this context, so navigating between views never loses data.

---

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install & run

```bash
npm install
npm run dev
```

The dev server starts at the URL printed in the terminal.

### Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

---

## Testing

```bash
npm test
```

Tests cover:

- **Format utilities** — `clamp`, `pct`, `formatMoney`, `formatMoneyShort`, `addDays`, `daysUntil`.
- **Budget generation** — category allocations sum exactly to the total budget; every allocation is non-negative; the profile adapts to event type.
- **Timeline generation** — milestones are non-empty and sorted chronologically.
- **Recommendations** — every section (decor, menu, entertainment, activities, cost-saving tips, event-day schedule) is populated.
- **Task generation** — all generated tasks start as `suggested` and `not-started`.

---

## Deployment

Planora is a static SPA and can be deployed to any static host.

### General steps

1. `npm run build` — produces the `dist/` folder.
2. Upload `dist/` to your host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).
3. Set the SPA fallback / rewrite so all routes serve `index.html`.

### Netlify (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

No config needed — Vercel auto-detects Vite. The output directory is `dist`.

---

## Notes for evaluators

- Click **"Load demo event"** on the dashboard to instantly explore a fully-planned wedding with budget, timeline, vendors, and ideas.
- Use **Reset all data** (bottom of the sidebar) to clear everything and start fresh.
- All planning suggestions are generated by the built-in local engine and are clearly labelled as such — they are **not** verified vendor quotes or real-world bookings. The vendor checklist distinguishes *Suggested* tasks from *Contacted* and *Confirmed* bookings.
- No fake vendor listings or unsupported claims are included.

---

## License

MIT
