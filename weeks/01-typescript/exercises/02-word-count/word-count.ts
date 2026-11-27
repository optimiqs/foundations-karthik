/**
 * Word count  ·  Easy
 *
 * Front desk staff want to see which words patients use most in their messages.
 * Count how many times each word appears in a piece of text.
 *
 * Examples
 *
 *   wordCount("Go go GO stop")              ->  { go: 3, stop: 1 }
 *   wordCount("  Hello, world!  Hello...  ")  ->  { hello: 2, world: 1 }
 *   wordCount("don't stop, don't")          ->  { "don't": 2, stop: 1 }
 *   wordCount("")                           ->  {}
 *
 * Rules
 *
 *   - Words are counted without caring about upper or lower case; return them in lower case.
 *   - Punctuation and extra spaces are ignored.
 *   - An apostrophe inside a word belongs to the word.
 *
 * Check your answer:  pnpm learn   or   pnpm test word-count
 * Stuck? Open HINTS.md in this folder, one hint at a time.
 */
export function wordCount(text: string): Record<string, number> {
  throw new Error("Not implemented");
}
