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

function showListEmployee() {
  var dataWarehouse = fs.readFileSync("dulieu/nhansu.json", {
    encoding: "utf-8",
  });
  dataWarehouse = JSON.parse(dataWarehouse);
  console.log(dataWarehouse);
  if (!dataWarehouse) {
    console.log("Danh sach trong");
  } else {
    console.log("Danh sach nhan su la: ", dataWarehouse);
  }
  printMenu();
}

function printMenu() {
  var menu =
    "> 1. Xem danh sách nhân viên\n  2. Tìm kiếm\n  3. Thêm nhân viên\n  4. Thoát";
  console.log(menu);
  var input = requireInput("Mời chọn chức năng: ");
  input = parseInt(input);

  switch (input) {
    case 1:
      showListEmployee();
      break;
    case 2:
      break;
    case 3:
      addEmployee();
      break;
    case 4:
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
