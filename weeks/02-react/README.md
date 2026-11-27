# Week 2: React

**7 Dec – 11 Dec**

## Goal

Build interactive components: props, state, lists, forms with validation, custom hooks, and tests that click through them the way a user would.

## Day by day

| Day | Focus |
| -- | -- |
| Monday | Components, JSX, props, rendering lists |
| Tuesday | State, events, deriving values during render |
| Wednesday | Forms and validation with Zod |
| Thursday | Effects, custom hooks, and when you do not need an effect |
| Friday | Testing with Testing Library, catch-up, demo |

## Learn

| Type | Resource |
| -- | -- |
| Course | [React: Learn](https://react.dev/learn): "Describing the UI", "Adding Interactivity", "Managing State" |
| Docs | [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) |
| Docs | [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) |
| Docs | [Zod: Basic usage](https://zod.dev/basics) |
| Docs | [Testing Library: Queries](https://testing-library.com/docs/queries/about) and [user-event](https://testing-library.com/docs/user-event/intro) |
| Docs | [MDN: Accessibility basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility) |

## Exercises

| \# | Exercise | You practise |
| -- | -- | -- |
| 1 | `patient-card` | Props, conditional rendering, accessible markup |
| 2 | `patient-search` | State, filtering during render, empty states |
| 3 | `appointment-form` | Forms, Zod validation, error messages |
| 4 | `use-debounced-value` | Effects, cleanup, custom hooks |

Read each test file too. It shows how we test the interface: by role and label, the way a user finds things.

## Exit checklist

- [ ] All 4 exercises pass
- [ ] I can explain props vs state, why we derive values instead of copying them into state, and when an effect is needed
- [ ] I can write a test that types and clicks through a component
