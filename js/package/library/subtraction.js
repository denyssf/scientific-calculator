import { fetures } from "../fetures.js";

function subtractionA (numberA, numberB) {
        return numberA - numberB;
    }

function subtractionB (numberA, numberB) {
        return numberB - numberA;
    }

function resultSubtractionA(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var resultA = subtractionA(numberA, numberB);
        var resultSubtractionA = document.querySelector('#subtraction-ab');
        return resultSubtractionA.textContent = resultA;
}

function resultSubtractionB(){
    var numberA = Number(fetures.inputNumberA.value);
    var numberB = Number(fetures.inputNumberB.value);
    var resultB = subtractionB(numberA, numberB);
    var resultSubtractionB = document.querySelector('#subtraction-ba');
    return resultSubtractionB.textContent = resultB;
}
export{resultSubtractionA};
export{resultSubtractionB};