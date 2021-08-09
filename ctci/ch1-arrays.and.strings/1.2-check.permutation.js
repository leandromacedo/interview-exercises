// The complexity here would be O(n²)
function checkPermutation(s1, s2) {
    if (s1.length !== s2.length) {
        console.log(`Is not a permutation`)
        return
    }
    let s1left = s1
    let s2left = s2
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2left.length; j++) {
            if (s1[i] === s2left[j]) {
                s1i = s1left.indexOf(s1[i])
                s1left = s1left.slice(0, s1i) + s1left.slice(s1i + 1)
                s2left = s2left.slice(0, j) + s2left.slice(j + 1)
                break
            }
        }
    }

    if (s2left.length || s1left.length) {
        console.log(`Is not a permutation: ${s1left.length} and ${s2left.length}`)
    } else {
        console.log('Is a permutation')
    }
}

// Sorting: Complexity O(nlog(n))
function checkPermutation(s1, s2) {
    if (s1.length !== s2.length) {
        console.log(`Is not a permutation`)
        return
    }

    const s1Sorted = s1.split('').sort().join('')
    const s2Sorted = s2.split('').sort().join('')

    if (s1Sorted === s2Sorted) {
        console.log('Is a permutation')
    } else {
        console.log(`Is not a permutation`)
    }
}

// Using hashtables O(min(c, (s1 + s2)))
function checkPermutation(s1, s2) {
    if (s1.length !== s2.length) {
        console.log(`Is not a permutation`)
        return
    }

    const charMap = new Map();
    let previousCounter

    for (let i in s1) {
        if (charMap.has(s1[i])) {
            previousCounter = charMap.get(s1[i])
            charMap.set(s1[i], previousCounter + 1)
        } else {
            charMap.set(s1[i], 1)
        }
    }

    for (let j in s2) {
        if (charMap.has(s2[j])) {
            previousCounter = charMap.get(s2[j])
            charMap.set(s2[j], previousCounter - 1)
        } else {
            charMap.set(s2[j], -1)
        }
    }

    for (let eachValue of charMap.values()) {
        if (eachValue !== 0) {
            console.log(`Is not a permutation`)
            return
        }
    }

    console.log(`Is a permutation`)
}

const a = 'abcdd'
const b = 'cadbd'
const c = 'abcd'
const d = 'ccaabbdd'
const e = 'abc'
const f = 'dabcd'
const g = 'abcde'


checkPermutation(a, b)
checkPermutation(a, c)
checkPermutation(a, d)
checkPermutation(a, e)
checkPermutation(a, f)
checkPermutation(a, g)

