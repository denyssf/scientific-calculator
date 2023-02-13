import { fetures } from "../fetures.js";

function squareRootA (numberA) {
    return Math.sqrt(numberA);
    }

function squareRootB (numberB) {
    return Math.sqrt(numberB);
    }

function resultSquareRootA(){
        var numberA = Number(fetures.inputNumberA.value);
        var resultAa = squareRootA(numberA);
        var resultSquareRootA = document.querySelector('#square-root-a');
        return resultSquareRootA.textContent = resultAa.toFixed(2);
}

function resultSquareRootB(){
    var numberB = Number(fetures.inputNumberB.value);
    var resultBb = squareRootB(numberB);
    var resultSquareRootB = document.querySelector('#square-root-b');
    return resultSquareRootB.textContent = resultBb.toFixed(2);
}
export{resultSquareRootA};
export{resultSquareRootB};