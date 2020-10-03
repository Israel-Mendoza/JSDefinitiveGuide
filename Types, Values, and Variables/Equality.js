// All of the following comparations are true

null == undefined // => true: These two values are treated as equal.
"0" == 0 // => true: String converts to a number before comparing.
0 == false // => true: Boolean converts to number before comparing.
"0" == false // => true: Both operands convert to 0 before comparing!

// Some idiomatic explicit type conversions

let a = 24;

a + ""; // => String(a) => "10"
+a; // => Number(a) => 10
a - 0; // => Number(a) => 10
!!a; // Boolean(a)
