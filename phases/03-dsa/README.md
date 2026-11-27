# Phase 3: Data structures and algorithms

**4 weeks · 18 Jan – 12 Feb**

## Goal

Solve unfamiliar problems by recognising patterns, choosing the right data structure, and reasoning about speed and memory.

## Learn

| Type | Resource |
| -- | -- |
| Video | [Data Structures and Algorithms in JavaScript](https://www.youtube.com/watch?v=t2CEgPsws3U) (freeCodeCamp) |
| Video | [Learn Data Structures and Algorithms Visually](https://www.youtube.com/watch?v=RpLnQnurpLY) (freeCodeCamp) |
| Video | [Data Structures Easy to Advanced](https://www.youtube.com/watch?v=RBSGKlAvoiM) (freeCodeCamp), for deeper study |
| Roadmap | [NeetCode roadmap](https://neetcode.io/roadmap), with a video explanation for every problem |
| Visualise | [VisuAlgo](https://visualgo.net/) |
| Reference | [Big-O cheat sheet](https://www.bigocheatsheet.com/) |

## How to solve a problem

1. Restate it in your own words, with one example worked by hand.
2. Write the simplest correct solution first, even if it is slow.
3. Name its time and space cost.
4. Look for the pattern (hash map, two pointers, sliding window, stack, binary search, BFS/DFS, heap) that makes it faster.
5. Test edge cases: empty input, one item, duplicates, negatives.

Give each problem **30 minutes**. If you are not close, watch the NeetCode explanation, then solve it again yourself the next day without looking.

## Build the structures yourself

Run `pnpm test phases/03-dsa`.

| \# | Exercise | Used for |
| -- | -- | -- |
| 1 | `stack` | Undo, parsing, matching brackets |
| 2 | `queue` | Job queues, breadth-first search; dequeue must stay fast with 200,000 items |
| 3 | `linked-list` | Understanding pointers and references |
| 4 | `binary-search` | Searching sorted data |
| 5 | `min-heap` | Priority queues, scheduling, top K |
| 6 | `lru-cache` | Caching |
| 7 | `shortest-path` | Breadth-first search on a graph |

## LeetCode problems, rising difficulty

Solve each in TypeScript and commit it to `phases/03-dsa/leetcode/<problem-name>.ts`.

### Week 1: arrays, hashing, two pointers

- [ ] [Two Sum](https://leetcode.com/problems/two-sum/)
- [ ] [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- [ ] [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
- [ ] [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [ ] [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [ ] [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
- [ ] [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- [ ] [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
- [ ] [3Sum](https://leetcode.com/problems/3sum/)
- [ ] [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

### Week 2: sliding window, stack, binary search

- [ ] [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [ ] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [ ] [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [ ] [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [ ] [Min Stack](https://leetcode.com/problems/min-stack/)
- [ ] [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
- [ ] [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
- [ ] [Binary Search](https://leetcode.com/problems/binary-search/)
- [ ] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [ ] [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

### Week 3: linked lists and trees

- [ ] [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [ ] [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [ ] [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [ ] [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [ ] [LRU Cache](https://leetcode.com/problems/lru-cache/)
- [ ] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [ ] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [ ] [Same Tree](https://leetcode.com/problems/same-tree/)
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [ ] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

### Week 4: heaps, graphs, recursion

- [ ] [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
- [ ] [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)
- [ ] [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [ ] [Clone Graph](https://leetcode.com/problems/clone-graph/)
- [ ] [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/)
- [ ] [Subsets](https://leetcode.com/problems/subsets/)
- [ ] [Combination Sum](https://leetcode.com/problems/combination-sum/)

## After this phase

Keep going with **one problem a day** for the rest of the programme, from the NeetCode roadmap.

## Exit checklist

- [ ] All 7 structure exercises pass
- [ ] At least 30 of the 39 problems solved and committed
- [ ] In the Friday live session, I can solve an unseen easy problem and explain its time and space cost
