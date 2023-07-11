/**
 * Hoisting : trong trình biên dịch JS nó sẽ tự động khai báo các biến var ở trên đầu
 */
var x = 5;

function run(){
  console.log(x);



  var x = 10;
}

run()