// check which permutations of a string are palindromes
function palindromePermutation(s) {
    let sWithoutSpacesLength = 0

    const hashMap = new Map()
    // Prepare a hashmap containing the number for each char
    for (let i = 0; i < s.length; i++) {
        let c = s[i]

        // Consider spaces
        if (c === " ") continue

        sWithoutSpacesLength++

        let charCounter = hashMap.get(c)

        if (charCounter) hashMap.set(c, charCounter + 1)
        else hashMap.set(c, 1)
    }

    let oddCharCounter = 0
    let result = true
    // To be a palindrome it must contain a pair number of each letter
    // except if the length of string is odd. In that case, it must contain one
    const isStringEven = sWithoutSpacesLength % 2 === 0
    hashMap.forEach(counter => {
        let isCharEven = counter % 2 === 0
        if (!isCharEven) oddCharCounter++

        if (isStringEven && !isCharEven) result = false
        else if (!isStringEven && oddCharCounter > 1) result = false

    })
    console.log(`${s} is palindrome: ${result}`)
    return result
}

palindromePermutation('tact coa')
palindromePermutation('civic')
palindromePermutation('ivicc')
palindromePermutation('civil')
palindromePermutation('livci')
