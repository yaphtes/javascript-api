/*
  Бинарный поиск сложнее в реализации, применяется только к отсортированным структурам данных.
*/

function binarySearch(arr, value) {
  let startIndex = 0;
  let endIndex = 0;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    let middleValue = arr[middleIndex];

    if (value < middleValue) {
      endIndex = middleIndex - 1;
    } else if (value > middleValue) {
      startIndex = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }

  return -1;
}