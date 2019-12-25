'use strict';

//let {prop : varName = default, ...rest} = object

// let user = {
//     name: "John",
//     years: 30
//   };

//   let { name, years: age, isAdmin = false } = user;

//   alert(name);
//   alert(age);
//   alert(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(rest) {
    let result = null;
    if (Object.entries(rest) != 0) {

        for (let key in rest) {
            if (result == null || rest[key] > rest[result]) result = key;
        }
    }
    return result;
}

alert(topSalary(salaries));

// function topSalary(salaries) {
  
//     let max = 0;
//     let maxName = null;
  
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }
  
//     return maxName;
//   }