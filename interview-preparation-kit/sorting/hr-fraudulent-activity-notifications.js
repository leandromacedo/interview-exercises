// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
// It works, but not optmial enough :(
function activityNotifications(expenditure, d) {
    let notifications = 0
    for (let i = 0; i < expenditure.length; i++) {
        if (i < d) continue

        let medianArray = []
        for (let j = d; j > 0; j--) {
            const newDayIndex = sortedArray(medianArray, expenditure[i - j])

            medianArray.splice(newDayIndex, 0, expenditure[j])
        }
        let median
        const isOdd = medianArray.length % 2
        if (isOdd) median = medianArray[(medianArray.length - 1) / 2]
        else {
            const evenHalf = medianArray.length / 2
            median = (medianArray[evenHalf - 1] + medianArray[evenHalf]) / 2
        }
        if (expenditure[i] >= 2 * median) notifications += 1
    }

    return notifications
}