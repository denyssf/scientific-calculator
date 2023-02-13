import { fetures } from "../fetures.js";

function percentageA (numberA, numberB) {
        return (numberB / numberA) * 100;
    }

function percentageB (numberA, numberB) {
        return (numberA / numberB) * 100;
    }

function resultPercentageA(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var resultA = Math.round(percentageA(numberA, numberB));
        var resultPercentageA = document.querySelector('#percentage-ab');
        return resultPercentageA.textContent = resultA + '%';
}

function resultPercentageB(){
    var numberA = Number(fetures.inputNumberA.value);
    var numberB = Number(fetures.inputNumberB.value);
    var resultB = Math.round(percentageB(numberA, numberB));
    var resultPercentageB = document.querySelector('#percentage-ba');
    return resultPercentageB.textContent = resultB + '%';
}
export{resultPercentageA};
export{resultPercentageB};