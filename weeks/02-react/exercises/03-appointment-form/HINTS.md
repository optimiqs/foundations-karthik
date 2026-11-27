# Hints: Appointment form

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Read the Zod basics page. z.object, z.string().trim().min(1, message) and z.coerce.number().int().min().max() cover this form.

</details>

<details>
<summary>Hint 2</summary>

In onSubmit, call event.preventDefault(), read new FormData(event.currentTarget), then schema.safeParse(...).

</details>

<details>
<summary>Hint 3</summary>

Keep errors in state as an object keyed by field name. Clear it when the input is valid.

</details>
