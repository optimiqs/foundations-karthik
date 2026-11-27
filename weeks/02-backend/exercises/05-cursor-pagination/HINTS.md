# Hints: Cursor pagination

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Build the cursor from the last row's createdAt and id, then Buffer.from(text).toString("base64url").

</details>

<details>
<summary>Hint 2</summary>

Sort once with a comparator that uses time, then id. Use the same comparator to find rows that come after the cursor.

</details>

<details>
<summary>Hint 3</summary>

hasNextPage is true when more rows remain after the ones you returned.

</details>
