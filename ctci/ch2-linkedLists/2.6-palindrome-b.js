import * as utils from './utils.js';

// This solution will use runners as solution
const palindrome = list => {
    let fastPointer = list
    let slowPointer = list

    let stack = []
    while (fastPointer && fastPointer.next) {
        stack.push(slowPointer.val)
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    if (fastPointer) {
        slowPointer = slowPointer.next
    }

    // At this point slow pointer is halfway into the list
    while (slowPointer) {
        if (stack.pop() !== slowPointer.val) {
            return false
        }

        slowPointer = slowPointer.next
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