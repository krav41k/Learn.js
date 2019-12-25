'use strict';

let calculator = {
    read: function(first, second) {
        this.first = first;
        this.second = second;
        return { first: this.first, second: this.second };
    },

    sum: function() {
        return this.first + this.second;
    },

    mul: function() {
        return this.first * this.second;
    },

}