'use srict';

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function () {
       this.value += parseInt(prompt("add to value", 0));
    };

}

let accumulator = new Accumulator (0);

accumulator.read();
accumulator.read();

alert(accumulator.value);