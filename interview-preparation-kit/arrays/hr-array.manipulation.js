//https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// O(q*n)
function arrayManipulation(n, queries) {
    const initialArray = new Array(n).fill(0);
    let maxValue = 0;

    queries.forEach(query => {
        let initialIndex = query[0] - 1;
        let finalIndex = query[1] - 1;

        for (let i = initialIndex; i <= finalIndex; i++) {
            initialArray[i] += query[2];
            if (initialArray[i] > maxValue) {
                maxValue = initialArray[i];
            }
        }
    });

    return maxValue;
}

// O(q)
function arrayManipulation(n, queries) {
    const initialArray = new Array(n + 1).fill(0);
    let maxValue = 0;

    queries.forEach(query => {
        let initialIndex = query[0] - 1;
        let finalIndex = query[1];
        let value = query[2];

        initialArray[initialIndex] += value;
        initialArray[finalIndex] -= value;
    });
    const reducer = (accumulator, currentValue) => {
        accumulator += currentValue;
        if (accumulator > maxValue) {
            maxValue = accumulator;
        }
        return accumulator;
    }
    initialArray.reduce(reducer, maxValue);

    return maxValue;
}
