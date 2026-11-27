# Hints: Min heap

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Store it in an array. For index i, the parent is Math.floor((i - 1) / 2) and the children are 2i + 1 and 2i + 2.

</details>

<details>
<summary>Hint 2</summary>

push: add at the end, then swap upward while it is smaller than its parent.

</details>

<details>
<summary>Hint 3</summary>

pop: take index 0, move the last item to index 0, then swap it downward with its smaller child.

</details>
