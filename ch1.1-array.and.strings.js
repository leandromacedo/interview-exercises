/**
 * Chapter 1 - Question 1
 * Implement an algorithm to determine if a string has all unique characters.
 * #44  Try a hash map
 * #117 Could a bit vector be useful?
 * #132 Can you solve it in O(n log n)
 *
 * Ask if is an ASCII or Unicode string
 */

const a = "abcde"
const b = "abcda"

// The complexity here would be O(n²)
function isUnique(s) {
    for (let i in s) {
        for (let j = 0; j < i; j++) {
            if (s[i] === s[j]) {
                console.log(`${s} is not unique`)
                return false
            }
        }
    }
    console.log(`${s} is unique`)
    return true
}

isUnique(a)
isUnique(b)

// Official Solution
// Use a hash map with the characters being the keys.
// Also the string cannot be bigger than 128 characters
// The time complexity would be O(min(n,c)), where c is the size of character set
// Space complexity would be O(c)
function isUniqueCtct(s) {
    if(s.length > 128) return false
    const charSet = [];
    for (let i in s) {
        if (charSet[s[i]]) {
            console.log(`${s} is not unique`)
            return false
        }
        charSet[s[i]] = true
    }
    console.log(`${s} is unique`)
    return true
}

isUniqueCtct(a)
isUniqueCtct(b)