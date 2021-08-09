// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function sherlockAndAnagrams(s) {
    let anagramsHashmap = new Map();
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const subString = s.slice(i, j);
            const sortedSubString = subString.split('').sort().join('');
            if (anagramsHashmap.has(sortedSubString)) {
                const counter = anagramsHashmap.get(sortedSubString);
                anagramsHashmap.set(sortedSubString, counter + 1);
                continue;
            }
            anagramsHashmap.set(sortedSubString, 0);
        }
    }
    let accumulator = 0;
    const totalSummation = (counter, key) => {
        const eachSummation = ((counter + 1) * counter) / 2;
        accumulator += eachSummation;
    }
    anagramsHashmap.forEach(totalSummation);

    return accumulator;
}
