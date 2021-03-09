function anagram(arr) {
    result = []
    seen = []

    // func for sorting a word
    const sort = (word) => word.split('').sort().join('');

    // check if arr have length > 0
    if (arr.length < 0) {
        return result
    } else {
        let index;
        let arrLength = arr.length
        for (index = 0; index < arrLength; index++) {
            //if word already seen skip
            if (!seen.includes(arr[index])) {
                seen.push(arr[index])

                // push data to result and get new index pushed
                newIndex = result.push([arr[index]])

                for (second_index = index + 1; second_index < arrLength; second_index++) {
                    if (sort(arr[index]) === sort(arr[second_index])) {

                        // push second word to seen
                        seen.push(arr[second_index])

                        // push anagram word to newIndex - 1
                        result[newIndex - 1].push(arr[second_index])
                    }
                }
            }
        }
    }
    return result
}