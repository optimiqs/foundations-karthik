# Hints: Parse an appointment

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

unknown means you must check the type before you use it: typeof input === "object" && input !== null.

</details>

<details>
<summary>Hint 2</summary>

After that check, treat it as Record<string, unknown> and check each field one by one.

</details>

<details>
<summary>Hint 3</summary>

new Date(text) gives an Invalid Date for bad text; Number.isNaN(date.getTime()) detects it. Number.isInteger checks whole numbers.

</details>
