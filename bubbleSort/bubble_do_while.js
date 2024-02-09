// do while way
let array = [350, 10 , 120, 82]
var swapped
do {
    for(let i = 0; i < array.length - 1; i++) {
        swapped = false;
        if(array[i] > array[i + 1]) {
          var temp = array[i]
          array[i] = array[i + 1]
          array[i + 1] = temp
          swapped = true;
        }
      }
} while (swapped)

console.log("do-while-way", array)
