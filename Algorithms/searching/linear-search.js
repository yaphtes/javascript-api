/*
  Линейный поиск прост в реализации, он имплементируется под капотом большинства методов JavaScript
  применяется, в основном, к неотсортированным структурам данных.
  Сложность алгоритма O(N²).
*/

function linearSeacry(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === value) {
      return i;
    }
  }

  return -1;
}