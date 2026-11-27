# Phase 1: JavaScript and TypeScript

**3 weeks · 7 Dec – 25 Dec**

## Goal

Write correct, readable TypeScript: data types, functions, arrays and objects, types and interfaces, generics, errors, and async code.

## Week by week

| Week | Topics |
| -- | -- |
| 1 | Variables, types, conditions, loops, functions, arrays, objects, strings |
| 2 | TypeScript types, interfaces, unions, narrowing, generics, modules |
| 3 | Errors, promises, `async`/`await`, working with JSON, putting it together |

## Learn

| Type | Resource |
| -- | -- |
| Video | [Learn JavaScript: Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg) (freeCodeCamp) |
| Video | [Learn TypeScript: Full Tutorial](https://www.youtube.com/watch?v=30LWjhZzg50) (Hitesh Choudhary, freeCodeCamp) |
| Video | [Learn TypeScript: Full Course for Beginners](https://www.youtube.com/watch?v=SpwzRDUQ1GI) (freeCodeCamp) |
| Docs | [The Modern JavaScript Tutorial](https://javascript.info/), part 1 |
| Docs | [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) |
| Docs | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) |
| Course | [Total TypeScript: Beginner's tutorial](https://www.totaltypescript.com/tutorials/beginners-typescript) |

## Exercises in this repository

Run `pnpm test phases/01-typescript`. Each folder has a file to complete and a test file that checks it.

| \# | Exercise | You practise |
| -- | -- | -- |
| 1 | `sum-of-evens` | Arrays, loops, `filter`, `reduce` |
| 2 | `word-count` | Strings, regular expressions, objects as maps |
| 3 | `phone-number` | String cleaning and validation: turn US numbers into `+1XXXXXXXXXX`, reject anything else |
| 4 | `group-by` | Generics and callbacks |
| 5 | `parse-appointment` | `unknown`, type narrowing, union result types; reject bad input and name the field |
| 6 | `retry` | `async`/`await`, errors, `RangeError` for bad input |
| 7 | `chunk` | Slicing arrays, validating arguments |
| 8 | `unique-by` | `Set`, keeping order |

## Practise more

- [ ] [Exercism TypeScript track](https://exercism.org/tracks/typescript): at least 15 exercises, with mentor feedback turned on
- [ ] [Type Challenges](https://github.com/type-challenges/type-challenges): the "easy" set

## Project: expense tracker CLI

Build a command-line expense tracker in `phases/01-typescript/project`:

- `add <amount> <category> <note>`, `list`, `summary` (total per category), `delete <id>`
- Saves to a JSON file
- Validates input and prints clear errors

## Exit checklist

- [ ] All 8 exercises pass
- [ ] Project merged
- [ ] I can explain: `let` vs `const`, `==` vs `===`, a union type, a generic, what `await` does
- [ ] I can read a TypeScript error and fix it
