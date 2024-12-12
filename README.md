# Teach2Give Feb/Apr Technical Test

## Task 1: Algorithmic Thinking & Data Structures - Unique Character Count

Task implementation: [characterCounter.js.](./task1-algorithmic-thinking/characterCount.js)

### 1. How the algorithm scales with input size (Big-O Notation)

1. #### Time Complexity
    a. The for loop iterates over each character in the string `word`, and since each operation in the loop (checking and updating the existence/value of a character in the charCounts object) takes constant time, then the total time for the loop is **O(n)** where n is the length of the string `word`.

    b. Accessing and updating properties in the object `charCounts` takes constant time, so the total time for the loop is **O(n)** where n is the length of the string `word`.

    Total time complexity: **O(n)**

2. #### Space Complexity:
    If the the characters in the input string are all unique, then the `charCounts` object will  have at most **n** keys, where **n** is the number of characters in the input string. 
    
    Space complexity: **O(n)**.

### 2. Ways to optimize the algorithm further
1. #### Case insensitivity
    `word = word.toLowerCase();` is used at the beginning of the function to make the function case-insensitive.

    This avoids having seperate counts for uppercase and lowercase versions of the same character.

2. #### Using the nullish coalescing operator (??)
    The nullish coalescing operator (??) can be used instead of an `if-else` to check and update the count. This would reduce look-up times and avoid double-checking.

    ```javascript
    charCounts[char] = (charCounts[char] ?? 0) + 1;
    ```
3. #### Handling empty strings
    The function can be modified to return an empty object if the input string is empty.

    ```javascript
    if (!word) return {};
    ```