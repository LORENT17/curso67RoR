< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Algoritmos 4 < /title> <
    script >
    /*ejercicio 1*/

    /*
    Dados un array y un valor Y, 
    cuenta e imprime (print) el número de valores del array 
    que sean mayores que Y. */
    //[4,2,6]
    function mayorQueY(array, y) { //
        var contador = 0; //variable acumuladora
        //variable = variable + algo
        //usamos for para recorrer cualquier arreglo, desde posicion 0 al final
        for (var i = 0; i < array.length; i++) {
            if (array[i] > y) { //array[i], accediendo al elemento por su posicion
                contador = contador + 1;
            }
        }
        console.log("la cantidad mayor a y es: " + contador);

    }
mayorQueY([4, 2, 6], 1);

/*ejercicio 2*/

/*Dado un array, 
imprime los valores máximos (max), mínimos (min) 
y promedio (average) para el array. */

function maxYMinYProm(array) { //array= [3,4,7,-5]
    var max = array[0]; //7
    var min = array[0]; //-5
    var sum = 0; //9 //suma para calcular el promedio

    for (var i = 0; i < array.length; i++) {
        //suma
        //sum = 14 + array[3]= -5
        sum = sum + array[i];

        // array[3]= -5 > 7
        if (array[i] > max) {
            max = array[i];
        }
        //array[3]= -5 < 3
        if (array[i] < min) {
            min = array[i];
        }
    }
    // 9/4 = 2.25
    console.log("El promedio es: " + sum / array.length); //promedio
    console.log("El número máximo es: " + max);
    console.log("El número minimo es: " + min);
}
maxYMinYProm([3, 4, 7, -5]);

/*parametro por defecto*/

function calcular(numero1, numero2 = 2) {
    console.log(numero1 * numero2);
}

calcular(4);

/*paso por valor*/
function calcular2(numero1, numero2 = 2) {
    numero1 = numero1 * numero2;
}

var numero1 = 4;
calcular2(numero1); //calcular2(4);

console.log(numero1);


/*paso por referencia*/
function calcular3() {
    numero1 = numero1 * 2;
}

var numero1 = 4;
calcular3();
console.log(numero1);

/*referencias ciclicas*/
var arr = [1, 3, 5, 7];
console.log(arr);
arr.push(9);
console.log(arr);
arr.push(arr);
console.log(arr);
/*ejercicio 3*/

/*Dado un array de números, 
crea una función que dé como resultado un nuevo array donde los valores 
negativos se reemplacen por el texto (string) ‘Dojo’. 
Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) 
debiera devolver [1,2, “Dojo”, “Dojo”, 5].*/

function reemplazarNegativos(array) { //array= [1,2,-3,-5,5]
    var nuevoArray = []; //arreglo vacio

    for (var i = 0; i < array.length; i++) {

        if (array[i] < 0) { //determinar numeros negativos
            nuevoArray.push("Dojo");
        } else {
            nuevoArray.push(array[i]); //agregar al final
        }
    }

    return nuevoArray;
}
console.log(reemplazarNegativos([1, 2, -3, -5, 5]));

/*opcion 2*/
function reemplazarNegativos2(array) { //array= [1,2,-3,-5,5]
    var nuevoArray = []; //arreglo vacio

    for (var i = 0; i < array.length; i++) {

        if (array[i] < 0) { //determinar numeros negativos
            nuevoArray[i] = "Dojo";
        } else {
            nuevoArray[i] = array[i];
            //nuevoArray[0] = 1;
        }
    }
    // nuevoArray[i] = "Dojo"; 
    //si existe un elemento en la posicion lo reemplaza
    //no existe la posicion, la crea y agrega el valor (nuevoArray[14] = 7;)

    return nuevoArray;
}
console.log(reemplazarNegativos2([1, 2, -3, -5, 5]));

/**/
/*
Dado un array y su respectivo índice, 
remueve los valores en el rango del índice dado( acortando el array). 
Por ejemplo, removerRango([20,30,40,50,60,70],2,4)
debiera devolver [20,30,70].
*/

function removerRango(array, rangoInicio, rangoFin) { //2,3,4(posiciones)
    var newArray = []; //[20,30,70]

    for (var i = 0; i < array.length; i++) { //i=6
        //   i=5 < 2         o   i=5 > 4       ]2,4[
        if (i < rangoInicio || i > rangoFin) { //exclusión de rangos
            newArray.push(array[i]); //agregando al final del arreglo
        }
    }
    // console.log(newArray);
    return newArray;
}

var retorno = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(retorno);

/*alternativa if*/
function removerRango2(array, rangoInicio, rangoFin) { //2,3,4(posiciones)
    var newArray = []; //[]

    for (var i = 0; i < array.length; i++) {
        /*exclusion*/
        if (i < rangoInicio) {
            newArray.push(array[i]);
        } else if (i > rangoFin) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

var retorno = removerRango2([20, 30, 40, 50, 60, 70], 2, 4);
console.log(retorno); <
/script> <
/head>

<
body >

    <
    /body>

<
/html>