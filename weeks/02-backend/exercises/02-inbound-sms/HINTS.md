# Hints: Inbound SMS webhook

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Read Zod's basic usage page. z.object({...}).safeParse(input) never throws.

</details>

<details>
<summary>Hint 2</summary>

z.string().regex(/^\+1\d{10}$/) checks the phone format; z.iso.datetime() checks the date; .transform turns it into a Date.

</details>

<details>
<summary>Hint 3</summary>

When parsing fails, result.error.issues[0].path[0] is the name of the field that failed.

</details>
