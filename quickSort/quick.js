var unsorted = [];
for (var i = 0; i < 2000; i++) {
  unsorted.push(Math.floor(Math.random() * 1000));
}

console.log(unsorted)

function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      if(array[i] < pivot) {
        left.push(array[i])
      }
       else {
        right.push(array[i]);
       }
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var sorted = quicksort(unsorted);
  
  console.log('Sorted array', sorted);