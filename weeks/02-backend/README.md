# Week 2: Backend fundamentals

**7 Dec – 11 Dec**

## Goal

Learn the rules every backend change at Optimiq follows: money is whole cents, outside input is checked once where it enters, one organization never sees another's data, events can arrive twice, and lists are paged with cursors. Learn enough SQL to read and write real queries.

## Day by day

| Day | Focus |
| -- | -- |
| Monday | How HTTP works: methods, status codes, headers, JSON; money in cents |
| Tuesday | Validating input with Zod; SQL basics |
| Wednesday | Tenant safety; SQL joins and aggregates |
| Thursday | Duplicate events and idempotency; transactions |
| Friday | Cursor pagination, catch-up, demo |

## Learn

| Type | Resource |
| -- | -- |
| Docs | [MDN: An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) and [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) |
| Docs | [Zod: Basic usage](https://zod.dev/basics) |
| Practice | [SQLBolt](https://sqlbolt.com/): every lesson |
| Practice | [PostgreSQL Exercises](https://pgexercises.com/): "Basic", "Joins and Subqueries", "Aggregation" |
| Video | [Learn PostgreSQL: Full Course for Beginners](https://www.youtube.com/watch?v=qw--VYLpxG4) (freeCodeCamp), as a reference |
| Docs | [GraphQL: Pagination](https://graphql.org/learn/pagination/) |

## Exercises

| \# | Exercise | The rule it teaches |
| -- | -- | -- |
| 1 | `claim-balance` | Money is whole cents; statuses come from clear rules |
| 2 | `inbound-sms` | Check outside input once, at the boundary, with Zod |
| 3 | `tenant-notes` | One organization never sees or changes another's data |
| 4 | `process-once` | The same event can arrive twice; process it once |
| 5 | `cursor-pagination` | Page with cursors so pages stay correct as data changes |

## Exit checklist

- [ ] All 5 exercises pass
- [ ] SQLBolt done, and the three PostgreSQL Exercises sections
- [ ] I can explain why money is stored in cents, what tenant isolation means, and why events must be safe to process twice
