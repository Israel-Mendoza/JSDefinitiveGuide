"WORKING WITH NUMBERS"

// INFINITY

Infinity; // A positive number too big to represent
Number.POSITIVE_INFINITY // Same value, written another way
1 / 0; // => Infinity
Number.MAX_VALUE * 2; // => Infinity; overflow

-Infinity; // A negative number too big to represent
Number.NEGATIVE_INFINITY; // The same value, written another way
-1 / 0; // => -Infinity
-Number.MAX_VALUE * 2; // => -Infinity

// NaN (Not a Number)

NaN; // The not-a-number value
Number.NaN; // The same value, written another way
0 / 0; // => NaN
Infinity / Infinity; // => NaN
NaN === NaN; // => false   NaN never evaluates as equal to anything

// Zero values

Number.MIN_VALUE / 2; // => 0: underflow
-Number.MIN_VALUE / 2; // => -0: negative zero
-1 / Infinity; // -> -0: also negative 0
-0;
let zero = 0; // Regular zero
let negz = -0; // Negative zero
zero === negz; // => true: zero and negative zero are equal
1 / zero === 1 / negz; // => false: Infinity and -Infinity are not equal


// The following Number properties are defined in ES6

let x = 10;

Number.parseInt("3"); // Same as the global parseInt() function
Number.parseFloat("3.43"); // Same as the global parseFloat() function
Number.isNaN(x); // => false
Number.isFinite(x); // => true Is x a number and finite (different from NaN and Infinites)
Number.isInteger(x); // => true Is x an integer?
Number.isSafeInteger(x); // => true Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER; // => -9007199254740991
Number.MAX_SAFE_INTEGER; // => 9007199254740991
Number.EPSILON; // => 2**-52: smallest difference between numbers


// BigInt

BigInt(Number.MAX_SAFE_INTEGER + 1);

1234n; // A not-so-big BigInt literal
0b111111n; // A binary BigInt
0o7777n; // An octal BigInt
0x8000000000000000n; // => 2n**63n: A 64-bit integer

1000n + 2000n; // => 3000n
3000n - 2000n; // => 1000n
2000n * 3000n; // => 6000000n
3000n / 997n; // => 3n: the quotient is 3
3000n % 997n; // => 9n: and the remainder is 9
(2n ** 131071n) - 1n // A Mersenne prime with 39457 decimal digits

1 < 2n; // => true
2 > 1n; // => true
0 == 0n; // => true
0 === 0n; // => false: the === checks for type equality as well

"USEFUL METHODS"

// Number toString() method

let n = 25;
let m = 3.1415926535;
n.toString(2); // => "11001";
"0b" + n.toString(2); // binary == "0b10001"
"0o" + n.toString(8); // octal == "0o31"
"0x" + n.toString(16); // hex == "0x11"

"PARSING FUNCTIONS"

/*Parsing functions ignore leading white space and parse
as many numeric characters as they can.
parseInt will treat the passed value as hexadecimal
if it starts with 0x or 0X. */

parseInt("3 blind mice"); // => 3
parseFloat(" 3.14 meters"); // => 3.14
parseInt("-12.34"); // => -12
parseInt("0xFF"); // => 255
parseInt("0xff"); // => 255
parseInt("-0XFF"); // => -255
parseFloat(".1"); // => 0.1
parseInt("0.1"); // => 0
parseInt(".1"); // => NaN: integers can't start with "."
parseFloat("$72.47"); // => NaN: numbers can't start with "$"

// Using base parameter (2, 8, 16 or 36)

parseInt("11", 2) // => 3: (1*2 + 1)
parseInt("ff", 16) // => 255: (15*16 + 15)
parseInt("zz", 36) // => 1295: (35*36 + 35)
parseInt("077", 8) // => 63: (7*8 + 7)
parseInt("077", 10) // => 77: (7*10 + 7)