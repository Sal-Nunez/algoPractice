/* 
From Microsoft interview March 2021

Make a Buffer that receives an int and prints the value, but only if the given
value is in sequence with the previous given int. If it isn’t, then wait until
the buffer receives the missing values before printing the rest of the
sequence.

Create a class 
*/

class BufferSequence {

}

const buffer = new BufferSequence();

/* Uncomment one line at a time to test. */
buffer.handler(5); // prints 5
// buffer.handler(6); // prints 6
// buffer.handler(10); // no print
// buffer.handler(9); // no print
// buffer.handler(7); // prints 7
// buffer.handler(8); // prints 8, 9, 10 on new lines.
