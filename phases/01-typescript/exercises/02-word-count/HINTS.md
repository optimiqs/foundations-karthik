# Hints: Word count

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Lower-case the whole text first.

</details>

<details>
<summary>Hint 2</summary>

text.match(/[a-z0-9]+('[a-z0-9]+)*/g) finds every word. match returns null when nothing matches.

</details>

<details>
<summary>Hint 3</summary>

Use an object as a counter: counts[word] = (counts[word] ?? 0) + 1.

</details>
