/**
* Bài 9
Tăng giá trị của 1 biến
* Viết ra cách để tăng a lên 2 đơn vị (1 trong các cách trong phạm vi bài học)
*/
var a = [1,2,3,4,5,6,7,8,9,10]

// var plusTwoA = a.map(function(value){
//   return value + 2
// })

// console.log(plusTwoA);

// var plusTwo = a.forEach(function(value){
//   return value + 2
// }
// )
// console.log(plusTwo)

// a.reduce(function(_,__, index){
//     return a[index] += 2
// },
// 0
// )
// console.log(a);

// var doubleA = a.map(function(value){
//   return value * 2
// })
// console.log(doubleA)


// var doubleA = a.forEach(function(value){
//   return value *2
// }
// )
// console.log(doubleA)

a.reduce(function(_,__, index){
  return a[index] *= 2
},
0
)
console.log(a);
