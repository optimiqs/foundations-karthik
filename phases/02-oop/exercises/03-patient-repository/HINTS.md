# Hints: Patient repository

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

A Map<string, Patient> keyed by id is a good in-memory store.

</details>

<details>
<summary>Hint 2</summary>

findByPhone can loop over map.values().

</details>

<details>
<summary>Hint 3</summary>

{ ...patient } makes a shallow copy. Copy on save and on every find.

</details>
