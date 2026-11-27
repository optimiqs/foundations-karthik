# Phase 5: GraphQL, WebSockets and NATS

**2 weeks · 8 Mar – 19 Mar**

## Goal

Add a GraphQL API, live updates over WebSockets, and background work through a message broker to your appointments API.

## Learn

| Type | Resource |
| -- | -- |
| Video | [GraphQL Course for Beginners](https://www.youtube.com/watch?v=5199E50O7SI) (freeCodeCamp) |
| Docs | [Learn GraphQL](https://graphql.org/learn/) |
| Docs | [NestJS: GraphQL](https://docs.nestjs.com/graphql/quick-start) and [Subscriptions](https://docs.nestjs.com/graphql/subscriptions) |
| Docs | [MDN: The WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |
| Docs | [NATS documentation](https://docs.nats.io/): Concepts, then Request-Reply and JetStream |
| Video | [System Design Explained](https://www.youtube.com/watch?v=oYxTTirKY8M) (Hayk Simonyan) |

## Project: real-time appointments

Extend your phase 4 project:

- [ ] A GraphQL API for appointments alongside the REST one
- [ ] An `appointmentChanged` subscription over WebSocket that only shows a user their own clinic's appointments
- [ ] A separate worker process that receives "appointment booked" events through NATS and logs a reminder to send
- [ ] Requests from the API to the worker use NATS request and reply, with a timeout
- [ ] Every query, mutation and subscription in the Postman collection

## Exit checklist

- [ ] Project merged
- [ ] I can explain: REST vs GraphQL, how a WebSocket differs from an HTTP request, what a message broker is for, and what happens when the worker is down
