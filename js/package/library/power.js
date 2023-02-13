import { fetures } from "../fetures.js";

function powerA (numberA, numberB) {
    return Math.pow(numberA, numberB);
    }

function powerB (numberA, numberB) {
    return Math.pow(numberB, numberA);
    }

function resultPowerA(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var result = powerA(numberA, numberB);
        var resultPowerA = document.querySelector('#power-ab');
        return resultPowerA.textContent = result;
}
function resultPowerB(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var result = powerB(numberA, numberB);
        var resultPowerB = document.querySelector('#power-ba');
        return resultPowerB.textContent = result;
}

export{resultPowerA};
export{resultPowerB};