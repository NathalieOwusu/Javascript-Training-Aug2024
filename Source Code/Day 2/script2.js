// Numbers And Methods

// Number Literal And Number Object

let a = 5;
let b = new Number(6);

console.log(a, typeof a);
console.log(b, typeof b);


// toFixed method - Helps us to decide how many places after decimal we want and gives us a rounded off result

let c = 5.759245;
console.log(c.toFixed(2))

// toPrecision method - Helps us to decide how many total digits including decimal places we want and gives us a rounded off result
let d = 5.759245;
console.log(d.toPrecision(4));

// toExponential - Helps us to express a number in exponential format

let e = 10000;
console.log(e.toExponential());


// toLocaleString - Convert a number into its local equivalent format 

let f = 7000000;
console.log(f.toLocaleString('de-DE'));
console.log(f.toLocaleString('en-IN'));
console.log(f.toLocaleString('en-US'));
console.log(f.toLocaleString('bn-IN'));

console.log(f.toLocaleString('en-IN', { style: "currency", currency: "INR" }));
console.log(f.toLocaleString('en-IN', { style: "currency", currency: "USD" }));
console.log(f.toLocaleString('en-IN', { style: "currency", currency: "GBP" }));


