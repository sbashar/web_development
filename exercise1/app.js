var a;
console.log(a);

if (a === undefined) {
    console.log('a is undefined!');
}
else {
    console.log('a is defined!');
}

function b() {
    console.log('Caller b!');
}

b();

console.log(c);

var c = 'Hello World!';

console.log(c);


function d() {
    console.log('Caller d!');
    b();
}

d();