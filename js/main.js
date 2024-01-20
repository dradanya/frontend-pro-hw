// function getNumber(promptText) {
//     return parseInt(prompt(promptText));
// }

// const firstNum = getNumber('Please enter the first number');
// const secondNum = getNumber('Please enter the second number');

// const sum = firstNum + secondNum;
// const difference = firstNum - secondNum;
// const multiplication = firstNum * secondNum;
// const division = firstNum / secondNum;

// alert(`
// ${firstNum}+${secondNum}=${sum} \n
// ${firstNum}-${secondNum}=${difference} \n 
// ${firstNum}*${secondNum}=${multiplication} \n 
// ${firstNum}/${secondNum}=${division}`);


let number1 = +prompt("Please enter the first number");
let number2 = +prompt("Please enter the second number");

let sum = number1 + number2;
let difference = number1 - number2;
let multiplication = number1 * number2;
let divison = number1 / number2;

alert( 
+ number1 + " + " + number2 + " = " + sum + "     " 
+ number1 + "-" + number2 + "=" + difference + "     " 
+ number1 + "*" + number2 + "=" + multiplication + "     "
+ number1 + "/" + number2 + "=" + divison);