array = [29, 4, 0 , 123, 12];
    for (let i = 1; i < array.length; i++) {
     for (let j = i; j > 0; j--) {
        if(array[j] < array[j - 1]) {
            //swap code
            var temp = array[j]
            array[j] = array[j -1]
            array[j - 1] = temp
            // vengono scambiati gli indici
            // arr[j] diventa arr[j - 1] mentre arr[j-1] diventa arr[j]
        } else {
            break;
        }
     }
    }
console.log(array);

/*

i = 1 per prendere i primi due elementi dell'array
j = i per prendere l'ultimo elemento corrente del ciclo
j > 0 perché è inutile andare al primo elemento dell'array quando questo è già stato confrontato all'inizio
j -- perché retrocede nell'array da j (che è uguale ad i) in cerca del valore più piccolo del suo predecessore
*/ 