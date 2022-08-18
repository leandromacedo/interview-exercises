export default function weave(prefix, list1, list2, results = []) {
    if (!list1.length || !list2.length) {
        results.push([...prefix, ...list1, ...list2])
        return results
    }

    const needle1 = list1.splice(0, 1)[0]
    prefix.push(needle1)
    weave(prefix, list1, list2, results)

    const returnal1 = prefix.pop()
    list1.splice(0,0,returnal1)


    const needle2 = list2.splice(0, 1)[0]
    prefix.push(needle2)
    weave(prefix, list1, list2, results)

    const returnal2 = prefix.pop()
    list2.splice(0, 0, returnal2)

    return results
}



// console.log(weave([], [], [20, 30]))