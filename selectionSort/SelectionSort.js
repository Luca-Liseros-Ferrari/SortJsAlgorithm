// SelectionSort

let arr = [4, 10, 2, 32];
let nuovo = [];
let len = arr.length;

for (let i = 0; i < len; i++) {
  let valMin = arr[i];
  let minIndex = i;

  for (let j = i + 1; j < len; j++) {
    if (arr[j] < valMin) {
      valMin = arr[j];
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

nuovo = arr;
console.log(nuovo);
