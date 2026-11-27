# Hints: Notifier

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

This is the Strategy pattern: Notifier depends on the Channel interface, never on a concrete class.

</details>

<details>
<summary>Hint 2</summary>

channels.find((c) => c.name === name) finds a channel by name.

</details>

<details>
<summary>Hint 3</summary>

Put each send in try/catch and await it, so one failure moves on to the next channel.

</details>
