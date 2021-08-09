// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
// O(n³)
function countTriplets(arr, r) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (r * arr[i] === arr[j]) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (r * arr[j] === arr[k]) {
                        counter += 1;
                    }
                }
            }
        }
    }
    return counter;
}


// second try, also with performance issues
function countTriplets(arr, r) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const subArray = arr.slice(i);
        const matches = subArray.filter(elj => r * arr[i] === elj);
        matches.forEach(match => {
            const matches2 = subArray.filter(elk => r * match === elk);
            counter += matches2.length;
        })
    }
    return counter;
}

// third try, no luck :(
function countTriplets(arr, r) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const subArray = arr.slice(i);
        const jIndexes = [];
        const kIndexes = [];

        subArray.forEach(el => {
            if (r * arr[i] === el) {
                jIndexes.push(el);
            } else if (r * r * arr[i] === el) {
                kIndexes.push(el);
            }
        });
        counter += jIndexes.length * kIndexes.length;
    }
    return counter;
}

// Final
function countTriplets(arr, r) {
    if (arr.length < 3) return 0;

    const hashMap = new Map();
    let counter = 0;

    arr.reverse().forEach(x => {
        const rx = r * x;
        const rrx = r * r * x;

        const finalKey = `${rx}_${rrx}`;
        counter += (hashMap.get(finalKey) || 0);

        const compositeKey = `${x}_${rx}`;
        const secondValue = (hashMap.get(compositeKey) || 0) + (hashMap.get(rx) || 0);
        hashMap.set(compositeKey, secondValue);

        const firstValue = (hashMap.get(x) || 0) + 1;
        hashMap.set(x, firstValue);
    });

    return counter;
}


// Alternative way (without reverse)
function countTriplets(arr, r) {
    if (arr.length < 3) return 0;

    const hashMap = new Map();
    let counter = 0;

    arr.forEach(x => {
        const rx = x / r;
        const rrx = x / r / r;

        const finalKey = `${rx}_${rrx}`;
        counter += (hashMap.get(finalKey) || 0);

        if (Number.isInteger(rx)) {
            const compositeKey = `${x}_${rx}`;
            const secondValue = (hashMap.get(compositeKey) || 0)
                + (hashMap.get(rx) || 0);
            hashMap.set(compositeKey, secondValue);
        }

        const firstValue = (hashMap.get(x) || 0) + 1;
        hashMap.set(x, firstValue);
    });
    return counter;
}