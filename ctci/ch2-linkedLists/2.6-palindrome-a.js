import * as utils from './utils.js'

// This approach is O(n) and iterativelycreates a string until halfway,
// and after that starts to substract from it
const palindrome = list => {
    const listLen = utils.getLength(list)

    const isOdd = Boolean(listLen % 2)

    let text = ''
    var counter = 0
    let node
    while (list) {
        node = list
        list = list.next
        counter++
        if (counter <= listLen/2) {
            text += node.val
            continue
        } else if (isOdd && (counter === Math.ceil(listLen/2))) {
            continue
        }

        if (node.val === text[text.length - 1]) {
            text = text.slice(0, -1)
        } else {
            return false
        }
    }

    return true
}


let tests = [
    'sasas'.split(''),
    'oirsdr'.split(''),
    'saas'.split(''),
    'sassas'.split(''),
    'sasssas'.split(''),
    'sassqas'.split(''),
    'sasds'.split(''),
    '12321'.split(''),
    '123421'.split(''),
];

console.log(tests.map(test => {
    return palindrome(utils.arrayToLinkedList(test))
}))