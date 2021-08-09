// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumSwaps(arr) {
    let swaps = 0;
    let order = 0;
    arr.forEach((el, i) => {
        order = i + 1;
        console.log(`index ${i}`);
        if (el === order) {
            return;
        } else {
            for (let j = i+1; j < arr.length; j++) {
                console.log(`i ${i}, j ${j}`);
                if (arr[j] === order) {
                    arr[j] = arr[i];
                    arr[i] = order;
                    console.log(arr);
                    swaps += 1;
                }
            }
        }
    })
    return swaps;
}


// Trying recursively
function minimumSwaps(arr) {
    let swaps = 0;
    let order = 0;
    arr.forEach((el, i) => {
        order = i + 1;
        if (el === order) {
            return;
        } else {
            let correctIndex = el - 1;
            arr[i] = arr[correctIndex];
            arr[correctIndex] = el;
            swaps += 1;
            if (arr[i] === order) {
                return;
            } else {
                console.log(arr);
                swaps += minimumSwaps(arr);
            }
        }
    })
    return swaps;
}