# Week 3: Next.js

**14 Dec – 18 Dec**

## Goal

Build a small Next.js app with the App Router: pages and layouts, dynamic routes, server and client components, loading and error states, and data fetching with TanStack Query.

## Learn

| Type | Resource |
| -- | -- |
| Course | [Next.js: Learn](https://nextjs.org/learn/dashboard-app), chapters 1–10 |
| Docs | [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) |
| Docs | [Next.js: Dynamic routes](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes) |
| Docs | [TanStack Query: Quick start](https://tanstack.com/query/latest/docs/framework/react/quick-start) and [Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations) |
| Docs | [Learn GraphQL: Queries](https://graphql.org/learn/queries/) |
| Docs | [Tailwind CSS: Styling with utility classes](https://tailwindcss.com/docs/styling-with-utility-classes) |

## Project: clinic patients app

Create it in `weeks/03-nextjs/project` with `pnpm create next-app@latest`.

- [ ] `/patients` lists patients from a Route Handler at `/api/patients` that reads an in-memory list
- [ ] `/patients/[patientId]` is the patient's own page; an unknown id shows a not-found page
- [ ] A search box on `/patients`, reusing your week 2 search and debounce code
- [ ] A form on the patient page adds a note; it saves through a TanStack Query mutation and the note list updates without a page reload
- [ ] Loading and error states for both pages
- [ ] Styled with Tailwind; works on a phone-sized screen
- [ ] At least one test that goes through the form with Testing Library

## Exit checklist

- [ ] Project merged and demoed
- [ ] I can explain server vs client components, what a dynamic route is, and how a mutation refreshes the data on screen
