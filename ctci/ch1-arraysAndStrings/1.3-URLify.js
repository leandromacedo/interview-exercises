// O(n) It identifies front and end spaces, replacing the rest
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