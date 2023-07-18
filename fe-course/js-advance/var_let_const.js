/**
 * var : có thể khai báo đè
 * let
 * const : không gán giá trị sẽ bị lỗi
 */

var x = 5; // global variable

function run() {
  let x = 10;
  console.log(x);
}

run();
