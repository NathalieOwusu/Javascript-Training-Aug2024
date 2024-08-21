// Strings And Methods

// String Object And String Literal

// String Literal
let a = "United States of America. The Land of Freedom";
console.log(a, typeof a);

// String Object 
let b = new String('India. The Largest Democracy');
console.log(b, typeof b);


// Length Property - Used to find the length of the string
console.log(a.length);


// Accessing each character of the String

console.log(a[0]);

for (let i = 0; i < a.length; i++)
    process.stdout.write(`${a[i]}`);   

// Prototype - It contains all the attributes and methods in the string object

let x = a.__proto__;
console.log(x);

// Change Cases - Required To Change To & From UpperCase And LowerCase

let c = 'snoop dogg';
console.log(c.toUpperCase())
console.log(c);

let d = 'XXX Tentacion';
console.log(d.toLowerCase());
console.log(d);


// charAt( ) method -Accessing each character of a string

let e = 'Donald Trump';
console.log(e.charAt(3));

//indexOf( ) method - Retrieving Index of A Substring
console.log(e.indexOf('D'));
console.log(e.indexOf('D',2));

console.log(e.indexOf('Tru'));
console.log(e.indexOf('Tru', 2));


// lastindexOf( ) method - Retrieves the last index at which a given substring has occured
console.log(e.toLowerCase().lastIndexOf('d'));


// Substring Method - Used to retrieve substring from a given method

console.log(e.substring(0, 3));
console.log(e.substring(1));
console.log(e);


// Slice Method - Same as substring. Can take negative index

console.log("Slice Method",e.slice(0,5));
console.log("Slice Method", e.slice(-7));
console.log(e)


// Trim method - Used to remove leading and trailing whitespaces from a string

let f = "        Sagnik's Cloud Kitchen     ";
console.log(f,f.length);
console.log(f.trim(), f.trim().length);


// Replace Method

let str1 = "Hello World";
console.log(str1);
str1=str1.replace("World", "Barry");
console.log(str1);


// Includes Method

console.log(str1.includes("Barry", 1));
console.log(str1.includes("Iris", 1));


// Split Operator

let data = "Oliver Queen|28|Starling City|CEO|Queen Consolidated|Laurel Lance,Sara Lance,Helena Bertinelli|The Arrow";

let arr = data.split('|');
console.log(arr, typeof arr);





