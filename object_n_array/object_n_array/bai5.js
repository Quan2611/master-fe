//Sắp xếp các nhân viên có cùng phòng ban vào với nhau xong đó in ra (phòng ban là division)
//Kêt quả mong muốn :
/* 
{
  id : 1,
  name : "Divsion 1",
  employee: [
    {
      name: "Nguyễn Văn A",
      posision: "developer",
      division: 1,
    },
    {
      name: "Nguyễn Văn C",
      posision: "tester",
      division: 1,
    }
  ]
}
*/
var employees = [
  {
    name: "Nguyễn Văn A",
    posision: "developer",
    division: 1,
  },
  {
    name: "Nguyễn Văn B",
    posision: "comtor",
    division: 2,
  },
  {
    name: "Nguyễn Văn C",
    posision: "tester",
    division: 1,
  },
  {
    name: "Nguyễn Văn D",
    posision: "tester",
    division: 3,
  },
];

var divisions = [
  {
    id: 1,
    name: "Division 1"
  },
  {
    id: 2,
    name: "Division 2"
  },
  {
    id: 3,
    name: "Division 3"
  },
];


function newArray(arr1,arr2){
  var arr3 = arr1.map(function(element){
  var listEmpl = arr2.filter(function(employ){
    employ.id === element.id
    return obj = {
      id : element.id,
      name : element.name,
      employee : listEmpl
    }
  })
  })
  return arr3
}

console.log(newArray(divisions,employees));