// Type Coercion

// String and Number 

// -Addition

let a = 55;
a = a + '46';
console.log(a, typeof a);

// Substraction

let b = 37;
b = b - '18';
console.log(b, typeof b);

// Multiplication

let c = 46;
c = c * '55';
console.log(c, typeof c);


// Division

let d = 57;
d = d / '16';
console.log(d, typeof d);

// Modulation

let e = 16;
e = e % 3;
console.log(e, typeof e);

// Exponentiation

let f = 12;
f = f ** 2;
console.log(f, typeof f);


// String And Null

let g = "hello" + null;
console.log(g,typeof (g));


// Number And Null

let h = 5 + null;
console.log(h, typeof (h));


// Number And Boolean

let i = 5 + true;
console.log(i, typeof i);

let j = false - 6;
console.log(j, typeof j);


// Number And Undefined

let k;
let l = 5;
l = l + k;
console.log(l, typeof l);
