const MAX = 10000000
let a = []
a.length = MAX

for (let i = 0; i < MAX; i++) {
    a[i] = i
}

let s = new Set(a)

let o = a.reduce((acc, e) => {
    acc[e] = e
    return acc
}, {})

console.time("Test_Array.slice(0)\t")
a.slice(0, 1)
console.timeEnd("Test_Array.slice(0)\t")
console.time("Test_Array.slice(n/2)\t")
a.slice(MAX / 2, 1)
console.timeEnd("Test_Array.slice(n/2)\t")
console.time("Test_Array.slice(n)\t")
a.slice(-1)
console.timeEnd("Test_Array.slice(n)\t")

console.time("Test_Array.splice(0)\t")
a.splice(0, 1)
console.timeEnd("Test_Array.splice(0)\t")
console.time("Test_Array.splice(n/4)\t")
a.splice(MAX / 4, 1)
console.timeEnd("Test_Array.splice(n/4)\t")
console.time("Test_Array.splice(n/2)\t")
a.splice(MAX / 2, 1)
console.timeEnd("Test_Array.splice(n/2)\t")
console.time("Test_Array.splice(n)\t")
a.splice(-1)
console.timeEnd("Test_Array.splice(n)\t")


// console.time("Test_Array.IndexOf(0)\t")
// a.indexOf(0);
// console.timeEnd("Test_Array.IndexOf(0)\t")
// console.time("Test_Array.IndexOf(n/2)\t")
// a.indexOf(MAX / 2);
// console.timeEnd("Test_Array.IndexOf(n/2)\t")
// console.time("Test_Array.IndexOf(n)\t")
// a.indexOf(MAX);
// console.timeEnd("Test_Array.IndexOf(n)\t")

// console.time("Test_Set.Has(0)\t\t")
// s.has(0)
// console.timeEnd("Test_Set.Has(0)\t\t")
// console.time("Test_Set.Has(n/2)\t")
// s.has(MAX / 2)
// console.timeEnd("Test_Set.Has(n/2)\t")
// console.time("Test_Set.Has(n)\t\t")
// s.has(MAX)
// console.timeEnd("Test_Set.Has(n)\t\t")

// console.time("Test_Object[0]\t\t")
// o[0]
// console.timeEnd("Test_Object[0]\t\t")
// console.time("Test_Object[n/2]\t")
// o[MAX / 2]
// console.timeEnd("Test_Object[n/2]\t")
// console.time("Test_Object[n]\t\t")
// o[MAX]
// console.timeEnd("Test_Object[n]\t\t")