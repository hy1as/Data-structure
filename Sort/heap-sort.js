function heapSort(array) {
    // 일반 배열 상태를 Max Heap 상태로 전환
    for (let index = Math.floor(array.length / 2) - 1; index >= 0; index--) {
        heapify(array, array.length, index);
    }

    for (let heapSize = array.length; heapSize > 0; heapSize--) {
        [array[0], array[heapSize - 1]] = [array[heapSize - 1], array[0]];
        // 자리가 확정된 원소 정렬에서 제외
        heapify(array, heapSize - 1, 0);
    }
}

function heapify(array, length, current) {
    // 현재 부모 노드
    let parent = current;
    let left = current * 2 + 1;
    let right = current * 2 + 2;

    // 왼쪽에 위치한 자식 노드가 부모 노드 보다 큰 경우 교환
    if(left < length && array[parent] < array[left]) {
        parent = left;
    }

    // 오른쪽에 위치한 자식 노드가 부모 노드 보다 큰 경우 교환
    if(right < length && array[parent] < array[right]) {
        parent = right;
    }

    // 자리 교환이 일어난 경우
    if(parent !== current) {
        // 배열 내 값 교환하여 배열에 교환 반영
        [array[parent], array[current]] = [array[current], array[parent]];
        // 위치 옮긴 부모 노드 (현재 아래로 이동한 노드) 에 대하여 heapify 추가 실행
        heapify(array, length, parent)
    }
}

const arr = [13, 1, 3, 7, 9, 11, 5]

heapSort(arr)
