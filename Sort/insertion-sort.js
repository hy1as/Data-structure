function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let prev = i - 1;
        while (prev >= 0 && array[prev] > temp) {
            array[prev + 1] = array[prev]
            prev--;
        }
        array[prev + 1] = temp
    }
    return array
}
