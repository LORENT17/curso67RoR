/*Configura un array para que los valores negativos se transformen en 0. Por ejemplo, 
resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].*/

function resetNegativos(array) { //array = [1,2,-1,-3]

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    return array;
}
console.log(resetNegativos([1, 2, -1, -3]));

/*Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando 
el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].*/

function moverAdelante(array) { //array = [1, 2, 3]

    for (var i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array[array.length - 1] = 0;
    return array;
}
moverAdelante(([1, 2, 3]))

/*Configura un array para que el resultado sean los valores en el orden contrario. 
Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].*/


function returnReverso(array) { //[1, 2, 3]
    var temp = 0;
    for (var i = 0; i < array.length / 2; i++) {
        // temp = array[0] = 1
        temp = array[i];
        // 1 = array[3-1-0]>2>3
        array[i] = array[array.length - 1 - i];
        // 3 = 1
        array[array.length - 1 - i] = temp;
    }
    return array;
}
returnReverso([1, 2, 3])

/*Crea una función que cambie un array repitiendo sus valores originales 
(manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) 
debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/

function repetirValores(array) { //array= [4,”Ulysses”, 42, false]
    var nuevoArray = [];

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i];
        nuevoArray.push(array[i], array[i]);
    }
    return nuevoArray;
}
repetirValores([4, "Ulysses", 42, false]);