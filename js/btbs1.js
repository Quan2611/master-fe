/*
btbs1: 
var a = 10;
var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.
*/

/**
 *  a = 10
 * --a + a++ // a = 10
 * 9 + a++ // a = 9
 * 9 + 9 // a = 10
 * => x = 18
 */

var a = 10;
var x = --a + a++;
console.log(x);