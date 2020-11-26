'use strict';

const counter = {
    maxVal: 10,
    minVal: 0,
    currentVal: 0,
    initVal: 0,
    increase: function () {
        if (this.currentVal < 10) {
            this.currentVal += 1
        } else {
            console.log(`Has alcanzado el máximo`)
        }
    },
    decrease: function () {
        if (this.currentVal > 0) {
            this.currentVal -= 1
        } else {
            console.log('Has alcanzado el mínimo');
        }
    },
    reset: function () {this.currentVal = this.initVal }
}

