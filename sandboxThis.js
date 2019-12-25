'use strict';
// function User(name) {
//     if (!new.target) {
//         console.log("new is absent");
//         return new User(name);
//     }
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = User("Papich");

// alert(user.name);

let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A;
let b = new B;

alert( a==b );