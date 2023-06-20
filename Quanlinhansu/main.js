var prompt = require("prompt-sync")({ sigint: true });
var fs = require("fs-promise");

/**
 * tên
 * tuổi
 * giới tính
 * ngày vào làm
 *
 * */

function requireInput(msg) {
  var input = prompt(msg);
  if (!input) {
    requireInput(input, msg);
  } else {
    return input;
  }
}

//Thêm nhân viên mới
function addEmployee() {
  var employeeName, employeeAge, employeeSex;
  employeeName = requireInput("Mời nhập tên nhân viên: ");
  employeeAge = requireInput("Mời nhập tuổi: ");
  employeeSex = requireInput("Mời nhập giới tính: ");

  var employeeData = {
    employeeName: employeeName,
    employeeAge: employeeAge,
    employeeSex: employeeSex,
    joinAt: new Date(),
  };
  var dataWarehouse = fs.readFileSync("dulieu/nhansu.json", {
    encoding: "utf-8",
  });
  dataWarehouse = JSON.parse(dataWarehouse);
  dataWarehouse.push(employeeData);
  fs.writeFileSync("dulieu/nhansu.json", JSON.stringify(dataWarehouse), {
    encoding: "utf-8",
  });
  console.log("Lưu thành công.");
  printMenu();
}

//in ra danh sách nhân viên
function showListEmployee() {
  var dataWarehouse = fs.readFileSync("dulieu/nhansu.json", {
    encoding: "utf-8",
  });
  dataWarehouse = JSON.parse(dataWarehouse);
  console.log("Danh sach nhan su la: ", dataWarehouse);
  printMenu();
}

//Tìm nhân viên theo tên
function findEmployee() {
  var dataWarehouse = fs.readFileSync("dulieu/nhansu.json", {
    encoding: "utf-8",
  });
  dataWarehouse = JSON.parse(dataWarehouse);
  var employee;
  employee = requireInput("Mời nhập tên nhân viên cần tìm: ", employee);
  for (i = 0; i < dataWarehouse.length; i++) {
    if (dataWarehouse[i].employeeName === employee) {
      console.log(dataWarehouse[i]);
    }
  }
  printMenu();
}

//Xoá nhân viên
function deleteEmployee() {
  var dataWarehouse = fs.readFileSync("dulieu/nhansu.json", {
    encoding: "utf-8",
  });
  dataWarehouse = JSON.parse(dataWarehouse);
  var employee;
  employee = requireInput("Mời nhập tên nhân viên cần xoá: ", employee);
  var result = dataWarehouse.filter((ele) => {
    return ele.employeeName !== employee;
  });
  fs.writeFileSync("dulieu/nhansu.json", JSON.stringify(result), {
    encoding: "utf-8",
  });
  console.log("Xoá thành công.");
  printMenu();
}

//Cập nhật nhân viên theo tên
function updateEmployee() {
  var dataWarehouse = fs.readFileSync("dulieu/nhansu.json", {
    encoding: "utf-8",
  });
  dataWarehouse = JSON.parse(dataWarehouse);
  var employee;
  employee = requireInput("Mời nhập tên nhân viên cần sửa: ", employee);
  for (var i = 0; i < dataWarehouse.length; i++) {
    if (dataWarehouse[i].employeeName === employee) {
      var employeeNameNew, employeeAgeNew, employeeSexNew;
      employeeNameNew = requireInput("Mời nhập tên nhân viên: ");
      employeeAgeNew = requireInput("Mời nhập tuổi: ");
      employeeSexNew = requireInput("Mời nhập giới tính: ");

      var employeeDataNew = {
        employeeName: employeeNameNew,
        employeeAge: employeeAgeNew,
        employeeSex: employeeSexNew,
        joinAt: new Date(),
      };
      fs.writeFileSync("dulieu/nhansu.json", JSON.stringify(employeeDataNew), {
        encoding: "utf-8",
      });
      console.log("Sửa thành công.");
    }
  }
}

function printMenu() {
  var menu =
    "> 1. Xem danh sách nhân viên\n  2. Tìm kiếm\n  3. Thêm nhân viên\n  4. Xoá nhân viên\n  5. Sửa thông tin nhân viên\n  6. Thoát";
  console.log(menu);
  var input = requireInput("Mời chọn chức năng: ");
  input = parseInt(input);

  switch (input) {
    case 1:
      showListEmployee();
      break;
    case 2:
      findEmployee();
      break;
    case 3:
      addEmployee();
      break;
    case 4:
      deleteEmployee();
      break;
    case 5:
      updateEmployee();
      break;
    case 6:
      console.log("Tạm biệt!");
      break;
    default:
      printMenu();
      break;
  }
}

function main() {
  printMenu();
}

main();
