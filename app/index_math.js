// import {add, subtract, multiply, divide} from "./math"
import * as math from './math'
import {addToDom as atd} from "./helpers"

console.log("Math: ", math);

atd('h1', `23 + 67 = ${math.add(23,57)}`);

atd('h2', `21 - 7 = ${math.subtract(21, 21)}`);

atd('h3', `9 * 9 = ${math.multiply(9, 9)}`);

atd('h4', `315 / 5 = ${math.divide(175, 5)}`);