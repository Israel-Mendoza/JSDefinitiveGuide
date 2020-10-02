"ANALIZING SPECIAL NUMBER VALUES"

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
