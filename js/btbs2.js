/*
var a = 10;
var b = 18;

var x = a--+b++-++b-++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm các dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích
*/

/**
 * a = 10, b = 18
 * a-- + b++ - ++b - ++a // a = 10, b = 18
 * a-- + 18 - ++b - ++a // a = 10, b = 19
 * 10 + 18 - ++b - ++a // a = 9, b =19
 * 10 + 18 - 20 - ++a // a = 9 , b = 20
 * 10 + 18 - 20 - 10 // a = 10, b = 20
 * => x = -2
 */

var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
