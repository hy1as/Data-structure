class SortedArray {
    arr

    constructor(arr) {
        this.arr = arr
    }

    partition(leftPointer, rightPointer) {
        const pivotIndex = rightPointer;
        const pivot = this.arr[rightPointer];
        rightPointer -= 1;

        while (true) {
            while (this.arr[leftPointer] < pivot) {
                leftPointer++;
            }
            while (this.arr[rightPointer] > pivot) {
                rightPointer--;
            }
            if (rightPointer <= leftPointer) {
                break;
            } else {
                [this.arr[rightPointer], this.arr[leftPointer]] = [this.arr[leftPointer], this.arr[rightPointer]]
                leftPointer += 1;
            }
        }
        [this.arr[leftPointer], this.arr[pivotIndex]] = [this.arr[pivotIndex], this.arr[leftPointer]]

        return leftPointer;
    }

    quickSort(leftIndex, rightIndex) {
        if (rightIndex - leftIndex <= 0) return;

        let pivot = this.partition(leftIndex, rightIndex)
        this.quickSort(leftIndex, pivot - 1)
        this.quickSort(pivot + 1, rightIndex)
    }
}