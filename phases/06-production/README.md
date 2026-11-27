# Phase 6: Production engineering

**1 week · 22 Mar – 26 Mar**

## Goal

Learn what makes code safe to run for real users, and how the Optimiq team works day to day.

## Learn

| Type | Resource |
| -- | -- |
| Docs | [OWASP Top Ten](https://owasp.org/www-project-top-ten/) |
| Docs | [System Design Primer](https://github.com/donnemartin/system-design-primer): the "Index of system design topics" |
| Docs | [Refactoring Guru: Refactoring](https://refactoring.guru/refactoring) |

## Topics

| Topic | What to do |
| -- | -- |
| Errors | Handle every failure on purpose; never swallow an error |
| Logging | Structured logs with a request ID; never log passwords, tokens or patient data |
| Configuration | Secrets come from environment variables, never from code |
| Security | Validate every input, check permissions on every request, keep each organisation's data separate |
| Reliability | Timeouts, retries that do not duplicate work, health checks |
| Teamwork | Small pull requests, clear descriptions, reviewing others' code kindly and specifically |

## Practise

- [ ] Apply each topic above to your phase 5 project, one pull request per topic
- [ ] Review one of your mentor's pull requests and leave at least three useful comments
- [ ] A guided tour of the Optimiq codebase with your mentor

## Exit checklist

- [ ] Each topic applied and merged
- [ ] I can explain why each topic matters, with an example of what goes wrong without it
