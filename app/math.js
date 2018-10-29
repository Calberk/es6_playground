export function add(x, y){
    return x + y;
}

export const subtract = (x, y) => {   //fat arrow function
    return x - y;
}

export const multiply = (x, y) => {
    return x * y;
}

export const divide = (x, y) => y ?  x/y : "Can't divide by zero";  //fat arrow terniary

export default "This is just a string";

// export default function(x, y){
//     return x + y;
// }

// export default (x,y) => {
// return x + y
// }