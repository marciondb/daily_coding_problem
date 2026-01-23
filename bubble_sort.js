function bubbleSort(arr) {
    let n = arr.length;
    let flag = true;
    while (flag) {
        flag = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                flag = true;
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            }
        }
    }
}

let A = [-5, 3, 2, 1, -3, -3, 7, 2, 2];
bubbleSort(A);
console.log("Bubble Sorted Array:", A);