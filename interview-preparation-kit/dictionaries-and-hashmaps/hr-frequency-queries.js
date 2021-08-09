// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function freqQuery(queries) {
    const output = [];
    const hashMap = new Map();
    const hashMapCounter
    queries.forEach(query => {
        const operation = query[0];
        const value = query[1];

        if (operation === 1) {
            const increment = (hashMap.get(value) || 0) + 1;
            hashMap.set(value, increment);

        } else if (operation === 2) {
            const decrement = Math.max((hashMap.get(value) || 0) - 1, 0);
            hashMap.set(value, decrement);
        } else {
            const hashMapValues = [...hashMap.values()];
            const queryResult = hashMapValues.some(hashMapValue => hashMapValue === value);
            const queryOutput = queryResult ? 1 : 0;
            return output.push(queryOutput);
        }
    });

    return output;
}

// Another attempt, but can't debug for a 100k test case
function freqQuery(queries) {
    const output = [];
    const hashMap = new Map();
    const hashMapCounter = new Map();
    queries.forEach(query => {
        const operation = query[0];
        const value = query[1];

        if (operation === 1) {
            const increment = (hashMap.get(value) || 0) + 1;
            hashMap.set(value, increment);

            const counter = (hashMapCounter.get(increment) || 0);
            hashMapCounter.set(increment, counter + 1);
            if (hashMapCounter.has(increment - 1)) {
                hashMapCounter.set(increment - 1, hashMapCounter.get(increment - 1) - 1);
            }
        } else if (operation === 2) {
            const decrement = Math.max((hashMap.get(value) || 0) - 1, 0);
            hashMap.set(value, decrement);

            const counter = (hashMapCounter.get(decrement) || 0);
            hashMapCounter.set(decrement, counter + 1);
            if (decrement > 0 && hashMapCounter.has(decrement + 1)) {
                hashMapCounter.set(decrement + 1, hashMapCounter.get(decrement + 1) - 1);
            }
        } else {
            const queryOutput = hashMapCounter.get(value) > 0 ? 1 : 0;
            output.push(queryOutput);
        }
    });

    return output;
}

// Finally, this one worked
function freqQuery(queries) {
    const output = [];
    const hmValues = {};
    const hmFrequency = {};

    queries.forEach(query => {
        const operationType = query[0];
        const value = query[1];

        if (operationType === 1) {
            const increment = (hmValues[value] || 0) + 1;
            hmValues[value] = increment;

            hmFrequency[increment] = (hmFrequency[increment] || 0) + 1;
            if (hmFrequency[increment - 1] !== undefined) {
                hmFrequency[increment - 1] = Math.max(
                    hmFrequency[increment - 1] - 1,
                    0
                );
            }
        } else if (operationType === 2) {
            if (hmValues[value]) {
                const decrement = (hmValues[value] - 1);

                hmValues[value] = decrement;

                hmFrequency[decrement] = (hmFrequency[decrement] || 0) + 1;
                if (hmFrequency[decrement + 1] !== undefined) {
                    hmFrequency[decrement + 1] = Math.max(
                        hmFrequency[decrement + 1] - 1,
                        0
                    );
                }
            }
        } else if (operationType === 3) {
            const queryOutput = (hmFrequency[value] || 0) > 0 ? 1 : 0;
            output.push(queryOutput);
        }
    });
    return output;
}