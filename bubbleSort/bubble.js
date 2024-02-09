let arr = [31, 0 , 12, 2]
for(let i = 0; i < arr.length - 1; i++) {
  console.log("op i ")
  for(j = 0; j < arr.length - 1 - i; j++) {
    console.log('op j')
    if(arr[j] > arr[j + 1]) {
      var temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}
console.log(arr)

/*

Alla seconda iterazione, i è uguale a 1. Quindi, j itera da 0 a arr.length - 1 - i, ovvero da 0 a 2.
Questo comportamento continua ad ogni iterazione del ciclo esterno. Man mano che i aumenta, il numero di iterazioni
del ciclo interno diminuisce, perché arr.length - 1 - i riduce il range di j.

Alla terza iterazione del ciclo esterno, quando i è uguale a 2, il ciclo interno for avrà j che itera da 0 a arr.length - 1 - i,
ovvero da 0 a 1. Quindi, nella terza iterazione, il ciclo interno considera solo gli elementi con indice 0 e 1,
poiché l'elemento con indice 2 è già stato sistemato nelle iterazioni precedenti

*/