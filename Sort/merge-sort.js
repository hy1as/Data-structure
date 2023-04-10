function mergeSort(array) {
    if (array.length === 1) return array;
    const boundary = Math.ceil(array.length / 2);
    const left = array.slice(0, boundary);
    const right = array.slice(boundary);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray, ...left, ...right];
}