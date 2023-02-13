import { fetures } from "../fetures.js";

function divisionA (numberA, numberB) {
    return numberA / numberB;
    }
function divisionB (numberA, numberB) {
    return numberB / numberA;
    }


function resultDivisionA(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var result = divisionA(numberA, numberB);
        var resultDivisionA = document.querySelector('#division-ab');
        return resultDivisionA.textContent = result.toFixed(2);
}
function resultDivisionB(){
        var numberA = Number(fetures.inputNumberA.value);
        var numberB = Number(fetures.inputNumberB.value);
        var result = divisionB(numberA, numberB);
        var resultDivisionB = document.querySelector('#division-ba');
        return resultDivisionB.textContent = result.toFixed(2);
}

export{resultDivisionA};
export{resultDivisionB};