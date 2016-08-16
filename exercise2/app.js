function b() {
    var myVar;
    console.log('Caller b!');
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log('Caller a!');
    b();
}

console.log(myVar);
var myVar = 1;
a();