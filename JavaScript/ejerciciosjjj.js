//1-Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, 
//específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, 
//imprime (console.log) cada valor del array y devuelve el arreglo arr. 


function sumaElementos(array) { //array= [1,2,3]


    for (let i = 1; i < array.length; i += 2) {


        if (array[i] !== 0) {
            /
            .push("");
        }
    }
}
}
return array;
}
console.log(sumaElementos([2, 7, 6, ]));




/*Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) 
que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras 
(longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) 
debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/

function reemplazaLetras(array) { //array= [1,2,3]

    for (let i = 0; i < array.length; i++) {

        array[i] = array[i] + 7;
    }
    return array;
}
letras = reemplazaLetras([“programar”, “dojo”, “genial”]);
console.log(letras);


/*Agrega Siete - Construye una función que acepte un array. 
Devuelve un nuevo array con todos los valores del original, 
pero sumando 7 a cada uno. No alteres el array original. 
Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. */

function agregaSiete(array) { //array= [1,2,3]

    for (let i = 0; i < array.length; i++) {

        array[i] = array[i] + 7;
    }
    return array;
}
console.log(agregaSiete([1, 2, 3]));









//Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
//Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
//Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).



function arrayInverso(x) { //array= [3,1,6,4,2]





}
invertir = arrayInverso([3, 1, 6, 4, 2]);
console.log(invertir);