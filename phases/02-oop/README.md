# Phase 2: Object-oriented design

**2 weeks · 4 Jan – 15 Jan**

## Goal

Model real problems with classes and interfaces, keep each piece small and testable, and recognise the common design patterns used in our codebase.

## Learn

| Type | Resource |
| -- | -- |
| Docs | [TypeScript Handbook: Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html) |
| Docs | [Refactoring Guru: Design patterns](https://refactoring.guru/design-patterns): Strategy, Observer, Factory Method, Adapter, State |
| Docs | [Refactoring Guru: Code smells](https://refactoring.guru/refactoring/smells) |
| Video | [Learn TypeScript: Full Tutorial](https://www.youtube.com/watch?v=30LWjhZzg50), sections on classes, interfaces and abstract classes |

## Key ideas

| Idea | In one line |
| -- | -- |
| Encapsulation | An object protects its own data; others change it only through its methods |
| Interfaces | Code depends on what something does, not which class it is |
| Composition over inheritance | Build behaviour from small parts instead of deep class trees |
| Dependency injection | Pass collaborators in, so they can be swapped and tested |
| State machines | Write down every state and every allowed move between them |

## Exercises in this repository

Run `pnpm test phases/02-oop`.

| \# | Exercise | You practise |
| -- | -- | -- |
| 1 | `appointment-lifecycle` | A state machine: scheduled, checked-in, completed, cancelled; reject invalid moves |
| 2 | `notifier` | Interfaces and the Strategy pattern: try channels in order until one works |
| 3 | `patient-repository` | The Repository pattern and dependency injection |
| 4 | `event-bus` | The Observer pattern with typed events |

## Project: clinic waiting room

In `phases/02-oop/project`, model a clinic waiting room: patients arrive, are triaged by urgency, and are called in order. Use classes, an interface for the queue, and write your own tests.

## Exit checklist

- [ ] All 4 exercises pass
- [ ] Project merged, with your own tests
- [ ] I can explain each key idea above with an example from my code
