/**
 * Bài 3
Chúng ta có một đối tượng lưu trữ tiền lương của nhóm chúng ta:
 */
var salaries_1 = {
  John: 100,
  Ann: 160,
  Pete: 130
}

var salaries_2 = {}
/*
  Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng. 
  Nếu tiền lương trống, thì kết quả phải là 0.
*/

var total = 0;

for (var key in salaries_1) {
  if (salaries_1.hasOwnProperty(key)) {
    total += salaries_1[key];
  }
}
if (Object.keys(salaries_1).length === 0) {
  total = 0;
}

console.log(total)