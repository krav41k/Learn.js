'use strict';

function Calculator() {

    this.read = function (first, second) {
        this.first = first;
        this.second = second;
        return { first: this.first, second: this.second };
    };

    this.sum = function () {
        return this.first + this.second;
    };

    this.mul = function () {
        return this.first * this.second;
    };
}

let calculator = new Calculator;
