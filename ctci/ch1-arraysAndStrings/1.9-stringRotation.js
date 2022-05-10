// isSubstring can be represented by include
const stringRotation = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    }

    const s2Repeated = s2 + s2;

    return s2Repeated.includes(s1)
}

console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);