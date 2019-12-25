"use strict";

// let meppo = new Map();

// meppo.set("2", "haha");
// alert(meppo.get("2"));

// //из объекта в Мап
// let obj = {
//     name: "John",
//     age: 30
//   };

//   let map = new Map(Object.entries(obj));
//   map.forEach( (keys) => {
//       alert(keys);
//   } );

//   alert(map.get("name"));

//   //Из Мап в объект Object.fromEntries
//   let objComeback = Object.fromEntries(map);
//   alert(objComeback);


// let newObj = {
//     "огурец": 500,
//     "помидор": 3500,
//     "лук":    50
// }


// //for .. in для простого объекта
// for (let keys in newObj){
//     alert(keys);
// }




//quiz
// function unique(arr) {
//     // let newSet = new Set();
//     // arr.forEach( (entries) => {
//     //     newSet.add(entries);
//     // });

//     // return Array.from(newSet);
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert(unique(values)); // Hare, Krishna, :-O


//genius anogram sort
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let result = new Map();
//     let word = "";
//     let sorted = "";
//     arr.forEach(value => {
//         word = value;
//         sorted = value.toLowerCase()
//         .split("")
//         .sort()
//         .join("");
//         result.set(sorted, word);
//     });
//     return Array.from(result.values());
// }
// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");