//Tính tổng của tích của các phần tử của array a với các phần tử của array b
// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

// var a = [1, 2, 3];
// var b = [10, 20];
// function sumMultiplyArray(arr1,arr2){
//   var sum1 = 0
//   var sum2 = 0
//   for(var i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
//   }
//   for (var i = 0; i < arr2.length; i++){
//     sum2 += arr2[i]
//   }
//   return sum1 * sum2
// }

// console.log(sumMultiplyArray(a,b)) //;
// console.log(sumMultiplyArray([2, 11, 6], [12, 25]))
// console.log(sumMultiplyArray([12, 2, 3], [10, 2, 90, 12, 11, 6, 24]))

//Tính tích các chữ số từ start đến end, không tính end
/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
// function calculate(start,end){
//   var sum = 1
//   for(var i = start; i < end;i++){
//     sum *=i
//   }
//   return sum;
// }

// console.log(calculate(2, 5));
// console.log(calculate(5, 10));
// console.log(calculate(2, 9));
// console.log(calculate(2, 12));

//Kiểm tra array có tồn tại 1 giá trị xác định hay không
/**
* Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay
không
* Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại
*/

function has(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(has([5, 2, 4, 8, 4], 4));
console.log(has([5, 31, 12, 5], 3));
