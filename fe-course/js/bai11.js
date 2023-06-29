//BÀI 11
//Khai báo object có properties và methods
/**
* Khai báo biến rectangle là 1 object gồm có các property:
* - width: chiều rộng
* - height: chiều dài
* - getWidth: trả về chiều rộng
* - getHeight: trả về chiều dài
* - getArea: trả về diện tích
*/

var rectangle = {
  width : 19,
  height: 20,
  getWidth : function(){
    return this.width;
  },
  getHeigth : function(){
    return this.height;
  },
  getArea : function(){
    return this.width * this.height;
  }
}

console.log(typeof rectangle)
console.log(typeof rectangle.width)
console.log(typeof rectangle.height)
console.log(rectangle.getWidth())
console.log(rectangle.getHeigth())
console.log(rectangle.getArea())