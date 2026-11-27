# Phase 4: Backend foundations

**3 weeks · 15 Feb – 5 Mar**

## Goal

Build a real REST API with NestJS and PostgreSQL that runs in Docker, with authentication and input validation.

## Week by week

| Week | Topics |
| -- | -- |
| 1 | HTTP in depth, Node.js, REST design, NestJS controllers, services and modules |
| 2 | SQL, PostgreSQL, Drizzle, migrations, relations, transactions |
| 3 | Authentication (password hashing, JWT), validation, Docker Compose |

## Learn

| Type | Resource |
| -- | -- |
| Video | [Intro to Backend Web Development: Node.js and Express](https://www.youtube.com/watch?v=KOutPbKc9UM) (freeCodeCamp) |
| Video | [NestJS Course for Beginners: Create a REST API](https://www.youtube.com/watch?v=GHTA143_b-s) (freeCodeCamp; Docker, PostgreSQL, auth) |
| Video | [Nest.js Full Course for Beginners](https://www.youtube.com/watch?v=8_X0nSrzrCw) (Dave Gray) |
| Video | [Learn PostgreSQL: Full Course for Beginners](https://www.youtube.com/watch?v=qw--VYLpxG4) (freeCodeCamp) |
| Docs | [Node.js: Learn](https://nodejs.org/en/learn) |
| Docs | [NestJS documentation](https://docs.nestjs.com/): Overview and Techniques sections |
| Docs | [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html) |
| Docs | [Drizzle ORM](https://orm.drizzle.team/docs/overview) |
| Docs | [Docker: Get started](https://docs.docker.com/get-started/) |
| Roadmap | [roadmap.sh: Backend](https://roadmap.sh/backend) |

## Practise

- [ ] [SQLBolt](https://sqlbolt.com/): every lesson
- [ ] [PostgreSQL Exercises](https://pgexercises.com/): Basic, Joins and Aggregates sections

## Project: clinic appointments API

In `phases/04-backend/project`, build:

- [ ] Patients, providers and appointments, with REST endpoints to create, read, update and cancel
- [ ] No two appointments for the same provider can overlap
- [ ] Sign-up and log-in with hashed passwords and JWT; every other endpoint needs a token
- [ ] Input validation with clear error messages and correct status codes
- [ ] PostgreSQL with Drizzle migrations
- [ ] `docker compose up` starts the API and the database
- [ ] A Postman collection that exercises every endpoint

## Exit checklist

- [ ] Project merged and running with `docker compose up`
- [ ] I can explain: status codes 200, 201, 400, 401, 403, 404, 409, 500; what a JOIN does; what a transaction protects; how a JWT is checked
