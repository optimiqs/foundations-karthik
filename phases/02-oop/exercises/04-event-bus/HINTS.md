# Hints: Event bus

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Store handlers in a Map from event name to an array of handlers.

</details>

<details>
<summary>Hint 2</summary>

Unsubscribe by filtering the handler out of its array.

</details>

<details>
<summary>Hint 3</summary>

once can be built from on: subscribe a wrapper that unsubscribes itself, then calls the handler.

</details>
