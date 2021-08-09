function test1() {
    var t0 = performance.now();
    var arr = Array(10000).fill(0);
    arr.reverse().forEach(x => { });
    var t1 = performance.now()
    console.log("Call to test1 took " + (t1 - t0) + " milliseconds.")
}

function test2() {
    var t0 = performance.now();
    var arr = Array(10000).fill(0);
    for (i = arr.length - 1; i > 0; i--) { }
    var t1 = performance.now()
    console.log("Call to test2 took " + (t1 - t0) + " milliseconds.")
}

test1()
test2()