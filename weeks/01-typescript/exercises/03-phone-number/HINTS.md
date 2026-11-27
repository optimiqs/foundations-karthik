# Hints: Phone number

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Remove every character that is not a digit: input.replace(/\D/g, "").

</details>

<details>
<summary>Hint 2</summary>

Then look at how many digits are left: 10 is fine, 11 is fine only if the first digit is 1.

</details>

<details>
<summary>Hint 3</summary>

A number that started with +44 has the right length by accident, so check the country code.

</details>
