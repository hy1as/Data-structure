function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minValueIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[minValueIndex] > array[j]) {
                minValueIndex = j
            }
        }
        [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]]
    }

    return array
}

console.log(selectionSort([8,5,3,1,7,4,9]))