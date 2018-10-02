/*
  Сортировка выбором.
  Сложность алгоритма:
    O(N^2) - в общем случае.
    O((N^2)/2) - в частном.
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      const fixed = arr[lowestValueIndex];
      const current = arr[j];

      if (current < fixed) lowestValueIndex = j;
    }

    if (lowestValueIndex !== i) {
      const temp = arr[i];

      arr[i] = arr[lowestValueIndex];
      arr[lowestValueIndex] = temp;
    }
  }
}