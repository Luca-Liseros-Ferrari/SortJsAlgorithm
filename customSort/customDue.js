let arr = [13, 0, 25, 6, 3, 49, 32]
let len = arr.length
let arrMin = []
let arrMag = []
//console.log(arr)
for (let i = 0; i < len; i++) {
    if (arr[i] < 20) {
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < 20 && arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      arrMin.push(arr[i]);
    } else if (arr[i] > 20){
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > 20 && arr[j] < arr[i]) {
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
          arrMag.push(arr[i]);
    }
  }

console.log("min", arrMin)
console.log("mag", arrMag)
console.log("completo", arrMin.concat(arrMag));