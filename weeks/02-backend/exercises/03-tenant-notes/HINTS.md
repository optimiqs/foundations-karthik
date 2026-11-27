# Hints: Tenant-safe notes

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Store notes in a private Map keyed by id.

</details>

<details>
<summary>Hint 2</summary>

In get and delete, look up the note, then compare note.organizationId with the one asked for.

</details>

<details>
<summary>Hint 3</summary>

{ ...note } makes a copy. Sort with (a, b) => b.createdAt.getTime() - a.createdAt.getTime().

</details>
