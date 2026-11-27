# Week 4: NATS and our backend

**21 Dec – 24 Dec**

## Goal

Add messaging with NATS to your API, then learn our backend codebase and get your first real pull request merged.

## Day by day

| Day | Focus |
| -- | -- |
| Monday | NATS: publish and subscribe, request and reply, JetStream |
| Tuesday | Add a worker to your week 3 API that receives `appointment.booked` events and processes each one once |
| Wednesday | Set up our backend with your mentor; tour the apps and packages; pick your first issue |
| Thursday | Build it, run the checks, review, merge, demo |

## Learn

| Type | Resource |
| -- | -- |
| Docs | [NATS: Concepts](https://docs.nats.io/nats-concepts/overview), then [Core NATS](https://docs.nats.io/nats-concepts/core-nats) and [JetStream](https://docs.nats.io/nats-concepts/jetstream) |
| Docs | [nats.js](https://github.com/nats-io/nats.js) |

Your mentor shares the repository access, setup steps and first issues on Linear.

## Exit checklist

- [ ] The worker receives events and processes each one once, even when NATS delivers it twice
- [ ] Our backend runs on my laptop
- [ ] My first pull request is merged
