// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

// function updateEmployeeWithKeyAndValue (employee, 'name', 'Luis'){
//     const newEmployee = {...employee};
//     newEmployee = {...employee};
//     newEmployee [name]= 'Luis';
//     return newEmployee;
// }

function updateEmployeeWithKeyAndValue (employee, key, value){
    return {...employee, [key]:value}
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key){
    const newEmployee = Object.assign ({}, employee);
    delete newEmployee[key];
    return newEmployee;
}



function destructivelyDeleteFromEmployeeByKey (employee, key){
    const newEmployee = employee;
    delete newEmployee[key];
    return newEmployee;
}


// const employees = {
//     updateEmployeeWithKeyAndValue : {
//         employee: " ",
//         key: " ",
//         value: " "
//     },
// }
