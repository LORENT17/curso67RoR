function a() {
    console.log('hello');
}
console.log('Dojo');

function a() {
    console.log('hello');
    return 15;
}
x = a();
console.log('x is', x);

function a(n) {
    console.log('n is', n);
    y = n * 2;
    return y;
}
x = a(3) + a(5);
console.log('x is', x);

function a(n) {
    console.log('n is', n);
    return n + 15;
}
x = a(3);
console.log('x is', x);

function op(a, b) {
    c = a + b;
    console.log('c is', c);
    return c;
}
x = op(2, 3) + op(3, 5);
console.log('x is', x);

var x = 15;

function a() {
    var x = 10;
}
console.log(x);
a();
console.log(x);

function multiply(x, y) {
    console.log(x);
    console.log(y);
}
b = multiply(2, 3);
console.log(b);

function op(a, b) {
    c = a + b;
    console.log('c is', c);
    return c;
}
x = op(2, 3) + op(3, op(2, 1)) + op(op(2, 1), op(2, 3));
console.log('x is', x)

var x = 15;
console.log(x);

function awesome() {
    var x = 10;
}
console.log(x);
awesome();
console.log(x);