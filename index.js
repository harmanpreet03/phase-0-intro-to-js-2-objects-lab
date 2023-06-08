// Write your solution in this file!

let employee = {
    "name": "Sam" ,
    "streetAddress": "11 Broadway"
}


function updateEmployeeWithKeyAndValue(employee,Object,key) { 
    const newObj = { ...employee, 
    ["name"]: "Sam",
    ["streetAddress"]: "11 Broadway"
    }
return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee.name = "Sam" ,
    employee.streetAddress = "12 Broadway"
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const clone = Object.assign({}, employee);
    delete clone["name"],
    ["streetAddress"]
    return clone;
  }
  
  function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee ["name"],
    ["streetAddress"]
  return employee
  }
  
  