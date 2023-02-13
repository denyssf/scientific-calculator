import { fetures } from "../fetures.js";

function average (numberA, numberB) {
    return (numberA + numberB) / 2;
    }

function resultAverage(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var result = average(numberA, numberB);
        var resultAverage = document.querySelector('#average-ab');
        return resultAverage.textContent = result;
}
export{resultAverage};