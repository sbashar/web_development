'use strict';
function b() {
    var myVar;
    console.log('Caller b!');
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log('Caller a!');
    console.log(myVar);
    b();
}

console.log(myVar);
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);