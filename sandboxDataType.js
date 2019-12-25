'use strict';

//let first = +prompt("First number: ", 0);
//let second = +prompt("Second number", 0);

//alert(first+second);

function random(min, max) {
    let val = min + Math.random() * (max - min);
    return Math.round(val);
};

alert(random(1, 5));
alert(random(1, 5));