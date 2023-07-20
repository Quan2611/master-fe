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

let M: number = 1
let b: string = "string"
let c: object = {cho:"Quan"}
let d = undefined
let e : number[] = [1,2,3,4,5,6] 
let f = null
let g: boolean = false

let h: (a:string) => number = (a:string) =>{
    return parseInt(a);
}
console.log(h('1'));

function k(a: string): number{
  return parseInt(a);
}

console.log(k('1'));



