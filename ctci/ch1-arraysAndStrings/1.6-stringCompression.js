// O(n) It uses an array of object as hashmap
function stringCompression(s) {
    const hashMap = []

    let counter = 1
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === s[i+1]) {
            counter += 1
        } else {
            hashMap.push({ char, counter})
            counter = 1
        }
    }
    let output = ''
    hashMap.forEach(payload => {
        output += `${payload.char}${payload.counter}`
    })

    if (output.length > s.length) {
        output = s
    }

    console.log(output)
    return output
}

stringCompression("aabcccccaaa")
stringCompression("aAbbbbcccccaab")
stringCompression("abcb")