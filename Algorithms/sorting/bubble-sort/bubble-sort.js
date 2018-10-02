/*
  Сортировка пузырьком.
  Сложность алгоритма O(N²)
*/

function bubbleSort(arr) {
  let lastIndex = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < lastIndex; i++) {
      let current = arr[i];
      let next = arr[i + 1];

      if (current > next) {
        sorted = false;
        arr[i] = next;
        arr[i + 1] = current;
      }
    }

    lastIndex--;
  }
} 
