function oneAway(s1, s2) {
    const sizeDifference = Math.abs(s1.length - s2.length)

    if (sizeDifference > 1) return false
    // If the difference in size in just one,
    // the strings must be equal in what's left
    else if(sizeDifference === 1) {
        let oneAwayCounter = 0
        let j = 0
        for (let i = 0; i < s1.length; i++) {
            if (oneAwayCounter > 1) {
                return false
            }
            if (s1[i] === s2[j]) {
            } else if (s2[j + 1] && s1[i] === s2[j+1]) {
                oneAwayCounter++
                j += 1
            } else if (s1[i + 1] && s1[i+1] === s2[j]) {
                oneAwayCounter++
                i += 1
            } else {
                // maybe this could already return false, since the strings are not equal in size
                oneAwayCounter++
            }
            j++
        }
    } else {
        let oneAwayCounter = 0
        for (let i = 0; i < s1.length; i++) {
            if (oneAwayCounter > 1) {
                return false
            }
            if (s1[i] !== s2[i]) {
                oneAwayCounter++
            }
        }
    }
    return true
}

s1 = 'test'
s2 = 'tqset'
let output = oneAway(s1,s2)
console.log(false, output)
s1 = 'test'
s2 = 'test'
output = oneAway(s1, s2)
console.log(true, output)
s1 = 'test'
s2 = 'tset'
output = oneAway(s1, s2)
console.log(false, output)
s1 = 'test'
s2 = 'teste'
output = oneAway(s1, s2)
console.log(true, output)
s1 = 'test'
s2 = 'tste'
output = oneAway(s1, s2)
console.log(false, output)
s1 = 'test'
s2 = 'tst'
output = oneAway(s1, s2)
console.log(true, output)


console.log(oneAway('pale', 'ple'), true)
console.log(oneAway('pales', 'pale'), true)
console.log(oneAway('pale', 'bale'), true)
console.log(oneAway('pale', 'bake'), false)