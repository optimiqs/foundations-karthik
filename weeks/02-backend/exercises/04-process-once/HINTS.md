# Hints: Process each event once

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

Store the Promise, not the finished value. Then a second caller can await the same running work.

</details>

<details>
<summary>Hint 2</summary>

Map<string, Promise<string>> keyed by event id is enough.

</details>

<details>
<summary>Hint 3</summary>

Attach .catch to the promise that removes the id from the map and rethrows the error.

</details>
