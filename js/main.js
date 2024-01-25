// 1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

// let i = 10;
// while (i <= 20){
//     console.log(i);
//     i++;
// }


// // 2 Вивести квадрати чисел від 10 до 20.

// for(let i = 10; i <= 20;i++){
//     console.log('square of number ' + i + ' = ' + (i*i));
// }


// 3 Вивести таблицю множення на 7.

// for(let number1 = 1; number1 <= 7;number1++){
//     for(let number2 = 1; number2 <= 7;number2++){
//         console.log(+number1 + "*" + number2 + "=" + (number1*number2));
//     }
// }


// 4 Знайти суму всіх цілих чисел від 1 до 15.


// let sum = 0;

// for(let i = 0; i <= 15;i++){
//     sum += i;
// }

// console.log(sum);


// 5 Знайти добуток усіх цілих чисел від 15 до 35.

// let mult = 1;

// for(let i = 15; i <= 35;i++){
//     mult = mult * i;
// }

// console.log(mult);


// 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let sum = 0;

// for(let i = 1; i <=500;i++){
//     sum += i;
// }

// console.log(sum / 500);


// 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let sum = 0;
// let number = 2;

// for(let i = 30; i <=80;i++){
//     if(i % number === 0){
//         sum += i;
//     }
// }

// console.log(sum);


// 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// let number = 3;

// for(let i = 100; i < 200;i++){
//     if( i % number === 0){
//         console.log(i)
//     }
// }


// 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let x = 100;
let counter = 0;
let sum = 0;
let arr = [];

for(let i = 1; i <= x;i++){
    if(x % i === 0){
        arr.push(i);
    }
}

console.log( 'all its divisors - ' + arr);

// 10 Визначити кількість його парних дільників.

arr = [];

for(let i = 1; i <= x;i++){
    if(x % i === 0){
    if(i % 2 === 0){
        counter++;
      arr.push(i);
    }}
}

console.log('pair divisors - ' + counter++);


// 11 Знайти суму його парних дільників.

for(let i = 0; i < arr.length;i++){
     sum += arr[i]; 
        }
 
console.log('sum of its pair divisors - ' + sum);


// 12 

// for(let number1 = 1; number1 <= 10;number1++){
//     for(let number2 = 1; number2 <=10;number2++){
//         console.log(+number1 + "*" + number2 + "=" + (number1*number2)); 
//     }
// }
