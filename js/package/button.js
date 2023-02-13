import { fetures } from "./fetures.js";
import { resultSum } from "./library/sum.js";
import { resultSubtractionA, resultSubtractionB } from "./library/subtraction.js";
import { resultMultiplication } from "./library/multiplication.js";
import {resultDivisionA, resultDivisionB} from "./library/division.js";
import { resultPowerA, resultPowerB } from "./library/power.js";
import { resultPercentageA, resultPercentageB } from "./library/percentage.js";
import { resultAverage } from "./library/average.js";
import { resultFactorialA, resultFactorialB } from "./library/factorial.js";
import { resultSquareRootA, resultSquareRootB } from "./library/square-root.js";

function actionButton(){
fetures.buttonCalc.addEventListener('click', resultSum);
fetures.buttonCalc.addEventListener('click', resultSubtractionA);
fetures.buttonCalc.addEventListener('click', resultSubtractionB);
fetures.buttonCalc.addEventListener('click', resultMultiplication);
fetures.buttonCalc.addEventListener('click', resultDivisionA);
fetures.buttonCalc.addEventListener('click', resultDivisionB);
fetures.buttonCalc.addEventListener('click', resultPowerA);
fetures.buttonCalc.addEventListener('click', resultPowerB);
fetures.buttonCalc.addEventListener('click', resultPercentageA);
fetures.buttonCalc.addEventListener('click', resultPercentageB);
fetures.buttonCalc.addEventListener('click', resultAverage);
fetures.buttonCalc.addEventListener('click', resultFactorialA);
fetures.buttonCalc.addEventListener('click', resultFactorialB);
fetures.buttonCalc.addEventListener('click', resultSquareRootA);
fetures.buttonCalc.addEventListener('click', resultSquareRootB);
}

export{actionButton};