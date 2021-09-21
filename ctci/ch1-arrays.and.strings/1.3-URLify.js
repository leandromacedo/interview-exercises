// Not sure about the complexity, since splice can vary from O(1) to O(n), thus giving total complexity of O(n^2) or O(n)
function URLify(s) {
    sArray = s.split('')
    for (let j = sArray.length - 1; j > 0; j--) {
        if (s[j] === ' ') {
            // Maybe try without splice
            sArray.splice(j, 1, '%20')
        }
    }

    console.log(sArray.join(''));
}

// A different approach, counting the spaces

function URLify(s, len) {

    let output = ""
    let totalSpaces = s.length - len
    let frontSpaces = 0

    let flag = false

    for (let i = 0; i < s.length; i++) {
        // This is to check for front spaces
        if (!flag) {
            if (s[i] === ' ') {
                frontSpaces++
            } else {
                flag = true
            }
        }

        if (flag && i < s.length - (totalSpaces - frontSpaces)) {
            if (s[i] === " ") output += "%20"
            else output += s[i]
        }

    }
    console.log(output)
    return output
}

s = 'Mr John Smith    '
URLify(s, 13)