import { fetures } from "../fetures.js";

function factorialA (numberA) {
    var resultA = numberA;
    for (var i = 1; i < numberA; i++) {
        resultA *= i;
    }
    return resultA
    }

function factorialB (numberB) {
    var resultB = numberB;
    for (var i = 1; i < numberB; i++) {
        resultB *= i;
    }
    return resultB
    }

function resultFactorialA(){
        var numberA = Number(fetures.inputNumberA.value);
        var resultAa = factorialA(numberA);
        var resultFactorialA = document.querySelector('#factorial-a');
        return resultFactorialA.textContent = resultAa;
}

function resultFactorialB(){
    var numberB = Number(fetures.inputNumberB.value);
    var resultBb = factorialB(numberB);
    var resultFactorialB = document.querySelector('#factorial-b');
    return resultFactorialB.textContent = resultBb;
}
export{resultFactorialA};
export{resultFactorialB};