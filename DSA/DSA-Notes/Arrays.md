# 📘 DSA Revision: Arrays

## ✅ 1. What is an Array?

- Arrays are ordered collections of elements.
- Stored in **contiguous memory** locations.
- Allows **random access** via index in `O(1)` time.
- In JavaScript, arrays are **dynamic** (resizable).

---

## 🔁 2. Common Array Operations

| Operation | Code (JS) | Time Complexity |
|----------|------------|-----------------|
| Access | `arr[i]` | O(1) |
| Update | `arr[i] = x` | O(1) |
| Insert at end | `arr.push(x)` | O(1) amortized |
| Remove from end | `arr.pop()` | O(1) |
| Insert at front | `arr.unshift(x)` | O(n) |
| Remove from front | `arr.shift()` | O(n) |
| Search | `arr.includes(x)` / loop | O(n) |
| Sort | `arr.sort()` | O(n log n) (depends on algorithm)|

---

## 🧠 3. Key Iteration Patterns

### a. Forward Loop
```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### b. Reverse Loop
```js
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
```

### c. For-of Loop
```js
for (const num of arr) {
  console.log(num);
}
```

### d. Two Pointers
```js
let left = 0, right = arr.length - 1;
while (left < right) {
  // process arr[left] and arr[right]
  left++;
  right--;
}
```

---

## 🔂 4. Common Problem Patterns

| Pattern | Example |
|--------|---------|
| Find max/min | Loop through and compare |
| Reverse array | Two-pointer swap |
| Rotate array | Slice + concat, or in-place reversal |
| Prefix sum | Running total in new array |
| Count frequency | Use JS object or `Map` |
| Kadane’s Algorithm | Max subarray sum (LeetCode 53) |
| Remove duplicates | Two-pointer overwrite |
| Merge sorted arrays | Two-pointer or extra space |

---

## ⚠️ 5. Edge Cases to Watch

- Empty array: `[]`
- One element: `[42]`
- All same elements: `[1, 1, 1]`
- Duplicates: `[1, 2, 2, 3]`
- Negative numbers
- Large values (check for integer overflow if language needs it)

---

## 🛡️ 6. In-Place vs Extra Space

**In-place** means modifying the input array directly.
- Try to solve using minimal additional variables.
- Avoid `arr.slice()`, `arr.concat()`, or spreading unless allowed.

---

## 🧮 7. Math + Arrays Combo

- Use `%` for circular arrays.
- `Math.max()`, `Math.min()` are handy for comparisons.
- Calculate prefix sums or moving averages using math tricks.
- Use XOR for finding unique elements (bit manipulation).

---

## 🧊 8. JavaScript-Specific Tips

- Clone array: `let copy = [...arr]` or `arr.slice()`
- Compare arrays: `JSON.stringify(arr1) === JSON.stringify(arr2)`
- Sort numerically: `arr.sort((a, b) => a - b)`
- Remove duplicates: `let unique = [...new Set(arr)]`
- Frequency count:
```js
let freq = {};
for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}
```

---

## 🧩 9. Must-Know Problems (LeetCode Premium Ready)

| Problem | Topic |
|--------|-------|
| LeetCode 53 – Maximum Subarray | Kadane's Algorithm |
| LeetCode 26 – Remove Duplicates from Sorted Array | Two Pointers |
| LeetCode 189 – Rotate Array | Reversal Technique |
| LeetCode 283 – Move Zeroes | In-place overwrite |
| LeetCode 121 – Best Time to Buy and Sell Stock | Max profit logic |
| LeetCode 1 – Two Sum | HashMap lookup |
| LeetCode 88 – Merge Sorted Array | Two Pointers in-place |

---

## 📌 Final Advice

> “The trick with arrays is not just solving the problem, but understanding **why** a pattern works and **when** to use it.”

Practice identifying:
- When to use two pointers
- When prefix sum helps
- When frequency map is optimal
- Whether you can reduce space from O(n) → O(1)

---

# 🧭 Two Pointer Technique in Arrays

The **Two Pointer** approach uses two indices (or pointers) to solve problems efficiently in linear time.

---

## 🧠 When to Use Two Pointers?

| Pattern           | Use Case                                 |
|------------------|-------------------------------------------|
| `Left + Right`    | Searching from both ends (sorted arrays, palindromes, two-sum) |
| `Slow + Fast`     | Skipping duplicates, detecting cycles     |
| `Read + Write`    | In-place array modifications (e.g., removing duplicates, moving zeroes) |

---

## 🧪 Key Idea

Use two pointers to:
- Traverse and **compare** elements.
- **Reduce time complexity** from O(n²) to O(n).
- **Modify arrays in-place** without extra space.

---

## 🧰 Common Problems & Approaches

### 1. **Sorted Array – Remove Duplicates**

```js
let insertAt = 1;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] !== nums[i - 1]) {
    nums[insertAt] = nums[i];
    insertAt++;
  }
}
return insertAt;
```

| Pointers Used | Role                      |
|---------------|---------------------------|
| `i`           | Reader (scans the array)  |
| `insertAt`    | Writer (marks next write position) |

---

### 2. **Two Sum in Sorted Array**

```js
let left = 0, right = arr.length - 1;
while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === target) return [left, right];
  else if (sum < target) left++;
  else right--;
}
```

---

### 3. **Reverse Array**

```js
let left = 0, right = arr.length - 1;
while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;
}
```

---

### 4. **Move Zeroes to End**

```js
let insertAt = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    [nums[insertAt], nums[i]] = [nums[i], nums[insertAt]];
    insertAt++;
  }
}
```

---

## ⚠️ Tips

- Usually one pointer **lags behind** to do in-place modifications.
- Works best when the array is **sorted** or **requires element order preservation**.
- Can be paired with **Sliding Window** for subarray-based problems.

---

## 🔗 Practice Problems

| Problem                                       | Pattern          |
|----------------------------------------------|------------------|
| LeetCode 26 – Remove Duplicates              | Read + Write     |
| LeetCode 283 – Move Zeroes                   | Read + Write     |
| LeetCode 167 – Two Sum II                    | Left + Right     |
| LeetCode 125 – Valid Palindrome              | Left + Right     |
| LeetCode 344 – Reverse String                | Left + Right     |

---

> 💡 **Insight**: Two pointers give you fine control over traversal — you move forward **only when needed**, reducing redundant work and boosting performance.
