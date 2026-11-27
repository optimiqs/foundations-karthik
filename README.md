# Engineering foundations

A one-month programme that gets you ready to work in the Optimiq web codebase. It covers only what that codebase uses: TypeScript, React and Next.js, with data fetching and forms. In the last week you ship real work.

## Start here

```bash
git clone <your repository link>
cd <repository folder>
pnpm install
pnpm learn
```

`pnpm learn` opens your next exercise, shows the problem, and checks your answer every time you save. When everything is green, commit and run it again.

| Command | What it does |
| -- | -- |
| `pnpm learn` | Shows your next exercise and watches it until it passes |
| `pnpm progress` | Shows how far you are in each week |
| `pnpm test word-count` | Checks one exercise |
| `pnpm typecheck` | Checks your types |

Every exercise file starts with the problem, examples and rules. Write your answer in the empty function below it. Each folder also has a `HINTS.md` with three hints, each hidden until you open it.

Every push to GitHub updates your progress table in the **Actions** tab.

## The month

| Week | Dates | Focus | You finish with |
| -- | -- | -- | -- |
| [1. TypeScript](weeks/01-typescript) | 30 Nov – 4 Dec | Tools, the language, types, async code, state machines | 9 exercises |
| [2. React](weeks/02-react) | 7 Dec – 11 Dec | Components, state, forms, hooks, testing | 4 exercises |
| [3. Next.js](weeks/03-nextjs) | 14 Dec – 18 Dec | App Router, server and client components, data fetching | A small clinic app |
| [4. Optimiq web](weeks/04-optimiq) | 21 Dec – 24 Dec | Our codebase, our conventions, your first real pull request | Merged work in production code |

## Every day

| Time | What |
| -- | -- |
| Morning | Post your update on the week's Linear issue: done yesterday, plan today, anything blocking |
| About 2 hours | Learn: the videos and docs in the week's guide |
| About 4 hours | Practise: exercises and the week's project |
| 15 minutes | Write what you learned in `LEARNING-LOG.md`, in your own words |

Every Friday: a 30-minute demo of the week's work and a check of the week's exit checklist with your mentor.

## How to work

1. One branch per exercise or task: `week-1/word-count`.
2. Open a pull request when it works. The template asks what you did, what you learned and what was hard.
3. Your mentor reviews it. Fix the comments, then merge.

## When you are stuck

Try for **45 minutes**: read the error, search the docs, explain the problem out loud. Then post on the Linear issue what you tried and the exact error. Asking early is part of the job.

## Using AI tools

In weeks 1 and 2, use AI only to **explain** things, never to write the exercise for you. From week 3, use it as you would at work, and be ready to explain every line you commit.

## Progress

- [ ] Week 1: TypeScript
- [ ] Week 2: React
- [ ] Week 3: Next.js
- [ ] Week 4: Optimiq web
