import { fetures } from "../fetures.js";

function sum (numberA, numberB) {
    return numberA + numberB;
    }

function resultSum(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var result = sum(numberA, numberB);
        var resultSoma = document.querySelector('#sum-ab');
        return resultSoma.textContent = result;
}
export{resultSum};