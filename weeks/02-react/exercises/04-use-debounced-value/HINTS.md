# Hints: Debounced value hook

Open one hint at a time. Try again after each one.

<details>
<summary>Hint 1</summary>

A custom hook is a function whose name starts with use and that calls other hooks.

</details>

<details>
<summary>Hint 2</summary>

Keep the debounced value in useState. Start a setTimeout inside useEffect whenever value changes.

</details>

<details>
<summary>Hint 3</summary>

Return a cleanup function from the effect that calls clearTimeout, so a new value cancels the old timer.

</details>
