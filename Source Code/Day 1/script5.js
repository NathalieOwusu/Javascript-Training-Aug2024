// Type Conversion -> String to Number
let sum = '64';
console.log(sum, typeof (sum));

// Using ParseInt Operator
sum = parseInt(sum);
console.log(sum, typeof (sum));

// Using Unary Operator
sum=+sum
console.log(sum, typeof (sum));

// Number Constructor

sum = Number(sum);
console.log(sum, typeof (sum));


// Type Conversion String To Decimal Value
let sum2 = '45.76';

// To Avoid Lossy Conversion We Use parseFloat instead of parseInt
sum2 = parseInt(sum2);
console.log(sum2, typeof sum2);

sum2 = parseFloat(sum2);
console.log(sum2, typeof sum2);


// Convert From Number To String

let val1 = 54;
console.log(val1, typeof val1);

// toString() method

val1 = val1.toString();
console.log(val1, typeof val1);

// String Constructor

val1 = String(val1);
console.log(val1, typeof val1);


// Conversion To Boolean
let val2 = "Nathalie";
console.log(Boolean(val2));

