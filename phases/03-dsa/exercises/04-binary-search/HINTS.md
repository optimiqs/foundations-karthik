# Hints: Binary search

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Keep low = 0 and high = length - 1 and loop while low <= high.

</details>

<details>
<summary>Hint 2</summary>

mid = Math.floor((low + high) / 2).

</details>

<details>
<summary>Hint 3</summary>

If sorted[mid] is too small, search the right half (low = mid + 1); if too big, the left half.

</details>
