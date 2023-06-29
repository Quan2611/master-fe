// //Có thể tạo các hàm A và B như new A() == new B() không?
// //Nếu đúng, hãy viết code đó.

// function A() { }
// function B() { }

// var a = A();
// var b = B();

// console.log(a == b); // true


//Bai6 


// in ra số lần xuất hiện của các số
var daySo = [1, 2, 3, 4, 1, 3, 4, 2, 1, 5]
/**
 * expect:
 * 1 - 3
 * 2 - 2
 * 3 - 2
 * 4 - 2
 * 5 - 1
 * */
var count = {}
for (var i = 0; i < daySo.length; i++) {
  var ele = daySo[i];
  if (count[ele] === undefined) {
    count[ele] = 1;
  } else {
    count[ele]++;
  }
}
for (var ele in count) {
  console.log(ele + " - " + count[ele]);
}
