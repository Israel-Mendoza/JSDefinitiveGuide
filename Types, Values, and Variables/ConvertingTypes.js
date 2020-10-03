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