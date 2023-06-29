//Bài 10
//Viết hàm tính thể tích khối hộp
// Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.
/**
* Tính thể tích khối hộp
* w là chiều rông khối hộp, kiểu dữ liệu là number
* l là chiều dài khối hộp, kiểu dữ liệu là number
* h là chiều cao khối hộp, kiểu dữ liệu là number
*/
function getBoxVolume(l, w , h) {
  return l*w*h;
}

console.log(getBoxVolume(10,20,30))
console.log(getBoxVolume(1,3,5))
console.log(getBoxVolume(11,3,5))
console.log(getBoxVolume(2,11,5))
console.log(getBoxVolume(12,3,5))