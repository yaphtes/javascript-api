/*
  Сортировка вставками.
  Сложность алгоритма:
    O(N^2) - в общем случае.
    O((N^2)/2) - в частном.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let position = i;
    let temp = arr[i];

    while (position > 0 && arr[position - 1 > temp]) {
      arr[position] = arr[position - 1];
      position--;
    }

    arr[position] = temp;
  }
}