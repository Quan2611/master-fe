function onSubmit(event) {
  event.preventDefault();
  var inputsEl = event.target.querySelectorAll("input");
  var employeeData = {};
  for (var i = 0; i < inputsEl.length; i++) {
    employeeData[inputsEl[i].name] = inputsEl[i].value;
  }
  employeeData.created_at = new Date().toISOString();
  axios.post("http://localhost:4001/employees", employeeData).catch(function (err) {
    console.log(err);
    alert("create employee failed");
  });
}

function createEmployee(employeeData) {
  var ulEl = document.getElementById("employee-list");
  var liEl = document.createElement("li");

  liEl.id = "employee-" + employeeData.id;
  var spanEl = document.createElement("span");
  spanEl.innerHTML =
    employeeData.name +
    " " +
    employeeData.age +
    " years old " +
    " gender " +
    employeeData.gender +
    " " +
    employeeData.created_at
  var btnDeleteEl = document.createElement("button");
  btnDeleteEl.innerHTML = "&#9874;";
  btnDeleteEl.id = "delete-employee-" + employeeData.id;
  btnDeleteEl.onclick = deleteItem;

  // var btnDeleteEl = document.createElement('button')
  // btnDeleteEl.innerHTML = '&#9874;'
  // btnDeleteEl.id = 'delete-book-' + bookData.id
  // btnDeleteEl.onclick = deleteItem

  liEl.append(spanEl, btnDeleteEl);
  ulEl.appendChild(liEl);
  // numbersOfTodo++;
}

function deleteItem(event) {
  var employeeId = event.target.id.replace("delete-employee-", "");

  axios.delete("http://localhost:4001/employees/" + employeeId).catch(function (err) {
    console.log(err);
    alert("delete employee failed");
  });
}

async function getEmployee() {
  try {
    var response = await axios.get("http://localhost:4001/employees");
    if (response.status === 200) {
      for (var _employee of response.data) {
        createEmployee(_employee);
      }
    } else {
      alert("get employee failed");
    }
  } catch (error) {
    alert("get employee failed");
  }
}

getEmployee();
