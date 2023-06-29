/**
 * Bài 6
* Cách sử dụng Array và Object khác nhau như thế nào. Viết câu trả lời ở
phía dưới.
*/
/*
Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
* {name}: string;
* {age}: number;
*/
var listAnimal = [
  {
    name: "Bear",
    age: "28",
  },
  {
    name: "Tiger",
    age: "29",
  },
  {
    name: "Lion",
    age: "30",
  },
];

console.log(Array.isArray(listAnimal))
console.log(listAnimal.length > 0)
console.log(typeof listAnimal[0])
console.log(typeof listAnimal[0].name)
console.log(typeof listAnimal[0].age)