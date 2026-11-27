# Hints: Linked list

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

A node is { value: T; next: Node<T> | undefined }. Keep head, tail and size.

</details>

<details>
<summary>Hint 2</summary>

To remove, walk with a previous and a current pointer. Removing the head or the tail are special cases.

</details>

<details>
<summary>Hint 3</summary>

To reverse, walk once and flip each next pointer, then swap head and tail.

</details>
