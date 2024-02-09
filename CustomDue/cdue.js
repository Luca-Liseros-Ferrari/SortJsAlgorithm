let arr = [12, 55, 27, 50, 2];
let nuovo = [];
while (arr.length > 0) {
    let minIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) 
            minIndex = i;
    }
    nuovo.push(arr[minIndex]);
    arr.splice(minIndex, 1);
}
console.log(nuovo);

/*
Iterazione 1:
All'inizio, arr contiene i numeri [12, 55, 27, 50, 2].
Durante la prima iterazione del ciclo while, viene trovato l'indice dell'elemento minimo, che è 4 (corrispondente al valore 2).
Il valore minimo, 2, viene aggiunto all'array nuovo.
L'elemento minimo, 2, viene rimosso dall'array arr.
Adesso, arr contiene i numeri [12, 55, 27, 50], mentre nuovo contiene i numeri [2].

Iterazione 2:
Durante la seconda iterazione del ciclo while, viene trovato l'indice dell'elemento minimo, che è 0 (corrispondente al valore 12).
Il valore minimo, 12, viene aggiunto all'array nuovo.
L'elemento minimo, 12, viene rimosso dall'array arr.
Adesso, arr contiene i numeri [55, 27, 50], mentre nuovo contiene i numeri [2, 12].

Iterazione 3:
Durante la terza iterazione del ciclo while, viene trovato l'indice dell'elemento minimo, che è 2 (corrispondente al valore 27).
Il valore minimo, 27, viene aggiunto all'array nuovo.
L'elemento minimo, 27, viene rimosso dall'array arr.
Adesso, arr contiene i numeri [55, 50], mentre nuovo contiene i numeri [2, 12, 27].

Iterazione 4:
Durante la quarta iterazione del ciclo while, viene trovato l'indice dell'elemento minimo, che è 2 (corrispondente al valore 50).
Il valore minimo, 50, viene aggiunto all'array nuovo.
L'elemento minimo, 50, viene rimosso dall'array arr.
Adesso, arr contiene i numeri [55], mentre nuovo contiene i numeri [2, 12, 27, 50].

Iterazione 5:
Durante l'ultima iterazione del ciclo while, viene trovato l'indice dell'elemento minimo, che è 0 (corrispondente al valore 55).
Il valore minimo, 55, viene aggiunto all'array nuovo.
L'elemento minimo, 55, viene rimosso dall'array arr.
Adesso, arr è vuoto, mentre nuovo contiene i numeri [2, 12, 27, 50, 55].
*/

