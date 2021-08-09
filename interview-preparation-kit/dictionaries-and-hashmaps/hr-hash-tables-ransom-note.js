// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function checkMagazine(magazine, note) {
    // note.filter(nword => {
    let result = 'No';
    for (let i = 0; i < note.length; i++) {
        let matchPerWord = '';
        let nword = note[i];
        for (let j = 0; j < magazine.length; j++) {
            if (magazine[j] === nword) {
                matchPerWord = magazine.splice(j, 1);
                result = 'Yes';
                break;
                continue;
            }
        }
        if (!matchPerWord) {
            result = 'No';
            break;
        }
    };
    console.log(result);
}