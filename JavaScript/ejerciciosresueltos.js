/*1-Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 
2-Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
3-Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se 
reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
4-Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). 
Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].*/

/*---------------Ejercicio numero 3--------------------------------------------------------------------------------*/

function reemplazarNegativos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = "Dojo"
        }
    }
    return x;
}
console.log(reemplazarNegativos([1, 2, -3, -5, 5]))

/*---------------Ejercicio numero 4--------------------------------------------------------------------------------*/

function removerRango(x) {

    for (var i = 0; i < x.length; i++) {
        if (x[i] = x[2]) {
            z.pop(x[2]);
        }
    }
    return x;
}
console.log(reemplazarNegativos([20, 30, 40, 50, 60, 70], 2, 4))

/*---------------Ejercicio numero 2--------------------------------------------------------------------------------*/
/*2-Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. */

function arrayMaxmin(x) {

}
b = arrayMaxmin(x)

function a(x) {
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
y = a(2);
y.push(5);
console.log(y);