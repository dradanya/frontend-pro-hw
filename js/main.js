// 1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// let array = [11,765,'haha',55,'hoho',33,'ttt',777,'hehe',447,'vvv',22,'santa',99,'top'];

// function averageOfNumbers(arr) {
//     let sum = 0;
//     let count = 0;

//     for(let el of arr){
//         if(typeof el === 'number'){
//             sum += el;
//             count++
//         }
//     }
//     if(count !== 0){
//         return sum / count;
//     }else{
//         return 0;
//     }
// }

// console.log(array);
// console.log(averageOfNumbers(array));

// 2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути:  +, -, *, /, %, ^
// (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача

// let result;

// function doMath(x,znak,y) {
//     switch(znak) {
//         case '+' :
//            result =  x + y;
//             break;
//         case '-' :
//            result = x - y;
//             break;
//         case '*' :
//            result =  x * y;
//             break;
//         case '/' :
//            result =  x / y;
//             break;
//         case '%' :
//           result =   x % y;
//             break
//         case "^":
//            result =  Math.pow(x,y);
//             break;
//         default :
//         alert("Invalid operation");
//     }
// }

// let frist = +prompt('Enter the first number');
// let second = +prompt('Enter the second number');
// let operation = prompt("Enter one of these operations: +, -, *, /, %, ^");

// doMath(frist, operation, second);
// alert(result);

// 3 Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач.
//  Значення всіх елементів всіх масивів задає користувач.

// function fillArray() {
//     let array = [];
//     let mainLength = Number(prompt("Enter the length of the main array"));
//     for (let i = 0; i < mainLength; i++) {
//         let innerLength = Number(prompt("Enter the length of the inner array at index " + i));
//         let innerArray = [];
//         for (let j = 0; j < innerLength; j++) {
//             let value = prompt("Enter the value of the element at index " + i + ", " + j);
//             value = Number(value) || value;
//             innerArray.push(value);
//             }
//             array.push(innerArray);
//         }
//     return array;
//     }

//     console.log(fillArray());

// 4 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//  Вихідний рядок та символи для видалення задає користувач.

// function removeChars(str,chars){
//     let result = '';

//     for(let chars of str){
//         if(!chars.includes(char)){
//             result += char;
//         }
//     }
//     return result;
// }

// let string = prompt("Enter the string");
// let characters = prompt("Enter the characters to remove");
// characters = characters.split("");
// console.log(removeChars(str, chars));

// function removeChars(str, chars) {
//     let result = "";
//     for (let char of str) {
//       if (!chars.includes(char)) {
//         result += char;
//       }
//     }
//     return result;
//   }
  
//   let string = prompt("Enter the string");
//   let characters = prompt("Enter the characters to remove");
//   characters = characters.split("");
//   alert(removeChars(string, characters));