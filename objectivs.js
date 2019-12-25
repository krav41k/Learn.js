'use strick';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// function sumSalaries (salaries) {
//     let result = 0;
//     for ( let value of Object.values(salaries)) {
//         console.log(value);
//         result += value;
//     }

//     return result;
// }

// alert(sumSalaries(salaries));

function count(obj) {
    return Object.keys(obj);
}

alert(count(salaries));