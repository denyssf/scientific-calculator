import { fetures } from "../fetures.js";

function multiplication(numberA, numberB) {
return numberA * numberB;
}

function resultMultiplication(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var result = multiplication(numberA, numberB);
        var resultMultiplication = document.querySelector('#multiplication-ab');
        return resultMultiplication.textContent = result;
}
export{resultMultiplication};