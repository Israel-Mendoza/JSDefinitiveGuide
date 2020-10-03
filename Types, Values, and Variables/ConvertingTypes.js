// Converting to string

String(undefined); // => "undefined"
String(null); // "null"
String(true); // "true"
String(false); // "false"
String(0); // "0"
String(-0); // "0"
String(1); // "1"
String(Infinity); // "Infinity"
String(-Infinity); // "-Infinity"
String(NaN); // "NaN"
function a_func() {
    console.log("Hello")
}
String(a_func); // 'function a_func() {\nconsole.log("Hello");\n}'


// Converting to number

Number(undefined); // => NaN
Number(null); // 0
Number(true); // 1
Number(false); // 0
Number(""); // 0
Number("1.2"); // 1.2
Number("one"); // NaN
Number(a_func); // NaN

// toString() and valueOf() methods

// The toString() method of the Array class, for example, converts each array element to a
// string and joins the resulting strings together with commas in between.

[1, 2, 3].toString(); // => "1, 2, 3"

// The toString() method of the Function class converts user-defined functions to strings
// of JavaScript source code.

a_func.toString(); // 'function a_func() {\nconsole.log("Hello");\n}'

// The Date class defines a toString() method that returns a
// human-readable (and JavaScript-parsable) date and time string.
let d = new Date(2020, 0, 1);
d.toString() // => 'Wed Jan 01 2020 00:00:00 GMT-0600 (GMT-06:00)'


// The job of this method is less well defined: it is supposed to convert 
// an object to a primitive value that represents the object, if any such primitive value exists.
d.valueOf(); // => 1262332800000
