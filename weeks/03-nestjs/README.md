# Week 3: NestJS and PostgreSQL

**14 Dec – 18 Dec**

## Goal

Build a real API with the same tools as our backend: NestJS on Fastify, PostgreSQL with Drizzle, REST and GraphQL, running in Docker.

## Learn

| Type | Resource |
| -- | -- |
| Video | [Nest.js Full Course for Beginners](https://www.youtube.com/watch?v=8_X0nSrzrCw) (Dave Gray) |
| Docs | [NestJS: First steps, Controllers, Providers, Modules](https://docs.nestjs.com/first-steps) |
| Docs | [NestJS: Performance (Fastify)](https://docs.nestjs.com/techniques/performance) |
| Docs | [NestJS: GraphQL quick start](https://docs.nestjs.com/graphql/quick-start), code first |
| Docs | [Drizzle ORM: Get started with PostgreSQL](https://orm.drizzle.team/docs/get-started/postgresql-new) and [Migrations](https://orm.drizzle.team/docs/migrations) |
| Docs | [Docker: Get started](https://docs.docker.com/get-started/) and [Compose](https://docs.docker.com/compose/gettingstarted/) |

## Project: clinic appointments API

Create it in `weeks/03-nestjs/project`.

- [ ] NestJS on Fastify; PostgreSQL started with `docker compose up`
- [ ] Drizzle schema and migrations for organizations, patients and appointments
- [ ] Every request carries an organization id (a header is fine for now); every query is scoped to it
- [ ] REST: create, read, list and cancel appointments, with correct status codes
- [ ] GraphQL: an `appointments` query with cursor pagination and a `bookAppointment` mutation
- [ ] Input checked once at the boundary with Zod; clear error messages
- [ ] A provider can never have two overlapping appointments, enforced in the database
- [ ] Appointment status changes go through one state machine, reused from week 1
- [ ] Tests for tenant isolation and the overlap rule
- [ ] A Postman collection that exercises every endpoint

## Exit checklist

- [ ] Project merged and demoed
- [ ] I can explain modules, controllers and providers; what a migration is; how my code stops one organization reading another's data
