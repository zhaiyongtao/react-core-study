function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            // i 的值
            let current = arr[i];
            let j;
            // j => i 的 前序位
            // j+gap => 当前j的后序位
            // j= j-gap => 当前前序位的前序位
            for (j = i - gap; j >= 0 && current < arr[j]; j = j - gap) {
                arr[j + gap] = arr[j]
            }
            // 当前前序位置的前序位不存在， j+gap是回到当前前序位并将初始值赋值，
            // 当没有进入循环的时候，j+gap = i 也就是还是当前值
            arr[j + gap] = current
        }
    }
    return arr;
}

const arr = [5, 7, 8, 3, 1, 2, 4, 6]

console.log(shellSort(arr))


function shellSorta(arr) {
    const n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let j;
            let current = arr[i];
            for (j = i - gap; j >= 0 && current < arr[j]; j = j - gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = current;
        }
    }
    return arr
}

function insertSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let preIndex = i - 1;
        let current = arr[i];
        for (; preIndex >= 0 && arr[preIndex] > current; preIndex--) {
            arr[preIndex + 1] = arr[preIndex]
        }
        arr[preIndex + 1] = current;
    }
    return arr
}

console.log(shellSorta(arr))
console.log(insertSort(arr))