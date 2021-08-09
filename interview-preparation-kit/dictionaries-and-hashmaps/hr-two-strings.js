https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function twoStrings(s1, s2) {
    let a = 97;
    let alphabet = {};
    for (var i = 0; i < 26; i++) {
        alphabet[String.fromCharCode(a + i)] = 0;
    }

    for (let j = 0; j < s1.length; j++) {
        alphabet[s1[j]] = 1;
    }

    for (let k = 0; k < s2.length; k++) {
        if (alphabet[s2[k]] === 1) {
            return 'YES';
        }
    }

    return 'NO';
}