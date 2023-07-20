//Examples TS
// function ucln(a: number, b: number) : number{
//   for(let i = a ; i > Math.sqrt(a);i--){
//     if(a % i === 0 && b % i === 0){
//       return i;
//     }
//   }
//   return 0;
// }
// console.log(ucln (8,12));
//--------------------  CÁC KIỂU DỮ LIỆU TRONG TS --------------------
/**
    number: integer float
    string: "", ''
    object: { key: value },
    array: [ 1, 2.3, 3, "4", 5, 7, { foo: 'bar' }]
    undefined
    null
    function
    boolean: false true
*/
var M = 1;
var b = "string";
var c = { cho: "Quan" };
var d = undefined;
var e = [1, 2, 3, 4, 5, 6];
var f = null;
var g = false;
var h = function (a) {
    return parseInt(a);
};
console.log(h('1'));
function k(a) {
    return parseInt(a);
}
console.log(k('1'));
