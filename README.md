# Engineering foundations

A 21-week programme that takes you from programming basics to building production backends with the same tools Optimiq uses: TypeScript, NestJS, PostgreSQL, GraphQL, WebSockets and NATS, then Next.js.

Everything you build lives in this repository. Every exercise and project is a pull request, so your progress is visible and every step gets feedback.

## Start here

```bash
git clone <your repository link>
cd <repository folder>
pnpm install
pnpm learn
```

`pnpm learn` opens your next exercise, shows the problem, and re-checks your answer every time you save. When everything is green, commit and run it again.

| Command | What it does |
| -- | -- |
| `pnpm learn` | Shows your next exercise and watches it until it passes |
| `pnpm progress` | Shows how far you are in every phase |
| `pnpm test word-count` | Checks one exercise |
| `pnpm typecheck` | Checks your types |

Every exercise file starts with the problem, examples and rules. Write your answer in the empty function below it. Each folder also has a `HINTS.md` with three hints, each one hidden until you open it.

Every push to GitHub updates your progress table in the **Actions** tab, so your mentor can see it without asking.

## Timeline

| Phase | Weeks | Dates | Focus |
| -- | -- | -- | -- |
| [0. Setup](phases/00-setup) | 1 | 30 Nov – 4 Dec | Terminal, Git, GitHub, editor, how the web works |
| [1. JavaScript and TypeScript](phases/01-typescript) | 3 | 7 Dec – 25 Dec | The language, from variables to generics and async |
| Catch-up week | 1 | 28 Dec – 1 Jan | Finish anything open, revise, no new material |
| [2. Object-oriented design](phases/02-oop) | 2 | 4 Jan – 15 Jan | Classes, interfaces, state machines, patterns |
| [3. Data structures and algorithms](phases/03-dsa) | 4 | 18 Jan – 12 Feb | Problem solving, rising difficulty every week |
| [4. Backend foundations](phases/04-backend) | 3 | 15 Feb – 5 Mar | HTTP, REST, NestJS, PostgreSQL, Docker |
| [5. GraphQL, WebSockets and NATS](phases/05-realtime) | 2 | 8 Mar – 19 Mar | APIs and real-time systems |
| [6. Production engineering](phases/06-production) | 1 | 22 Mar – 26 Mar | Errors, logs, security, reviews, our codebase |
| [7. Capstone project](phases/07-capstone) | 2 | 29 Mar – 9 Apr | A complete backend, end to end |
| [8. Next.js](phases/08-nextjs) | 2 | 12 Apr – 23 Apr | React and Next.js on top of your capstone |

## How each day works

| Time | What |
| -- | -- |
| Morning | Post your update on today's Linear issue: done yesterday, plan today, anything blocking |
| About 2 hours | Learn: the videos and docs listed in the phase guide |
| About 3–4 hours | Practise: exercises, problems and the phase project |
| 30 minutes | Write what you learned today in `LEARNING-LOG.md`, in your own words |

## How each week works

| When | What |
| -- | -- |
| Tuesday and Thursday | 45-minute pairing session with your mentor |
| Friday | 30-minute live session: solve a new problem while explaining your thinking |
| Friday | Weekly check-in on the phase's exit checklist |

## How to work in this repository

1. One branch per exercise or task: `phase-1/word-count`, `phase-4/appointments-api`.
2. Open a pull request when it works. The template asks what you did, what you learned, and what was hard.
3. Your mentor reviews it. Fix the comments, then merge.
4. Exercises check themselves with `pnpm learn`. A red check is not a failure. It tells you what to fix next.

## When you are stuck

1. Try for **45 minutes**: read the error, search the docs, add `console.log`, explain the problem out loud.
2. Still stuck? Post on the Linear issue: what you are trying to do, what you tried, and the exact error.
3. Questions are expected and welcome. Getting unstuck quickly is part of the job.

## Using AI tools while learning

Use AI to **explain** things: an error message, a concept, why code behaves the way it does. Do not use it to write your exercise or project code during phases 0–3; that is how the understanding gets built. From phase 4 you may use it as you would at work, and you must be able to explain every line you commit.

## Pace

Each phase ends with an exit checklist. If something is not solid yet, the phase gets up to one more week. Going slower and understanding beats going faster and guessing.

## Progress

- [ ] Phase 0: Setup
- [ ] Phase 1: JavaScript and TypeScript
- [ ] Phase 2: Object-oriented design
- [ ] Phase 3: Data structures and algorithms
- [ ] Phase 4: Backend foundations
- [ ] Phase 5: GraphQL, WebSockets and NATS
- [ ] Phase 6: Production engineering
- [ ] Phase 7: Capstone project
- [ ] Phase 8: Next.js
