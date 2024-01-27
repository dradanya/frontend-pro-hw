let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1 Знайти суму та кількість позитивних елементів.

// let count = 0;

// let newArr = arr.filter((el)=> {
//     return el > 0;
// })
// console.log(newArr);

// arr.forEach((el)=> {
//     if(el > 0){
//         count++
//     }
// })
// console.log(count);

// let sum = newArr.reduce((accum,currentValue)=> {
//     return accum + currentValue;
// })
// console.log(sum);


//2 Знайти мінімальний елемент масиву та його порядковий номер.

// let min = arr[0];
// let minIndex = 0;
// arr.forEach((el, index) => {
//   if(el < min){
//     min = el;
//     minIndex = index;
//   }

// });
// console.log(`Minimum element: ${min}, index : ${minIndex}`)


// //3 Знайти максимальний елемент масиву та його порядковий номер.

// let max = arr[0];
// let maxIndex = 0;
// arr.forEach((el,index) => {
//     if(el > max){
//         max = el;
//         maxIndex = index;
//     }
// })

// console.log(`Maximum element: ${max}, index : ${maxIndex}`);


//4 Визначити кількість негативних елементів.

// let count = 0;

// arr.forEach((el) => {
//     if(el < 0){
//         count++
//     }
// })

// console.log(`Number of negative elements: ${count}`);


//5 Знайти кількість непарних позитивних елементів.


// let count = 0;
// arr.forEach((el) => {
//     if(el % 2 !== 0 && el > 0){
//         count++
//     }
// })

// console.log(`Number of odd positive elements: ${count}`);


//6 Знайти кількість парних позитивних елементів.

// let count = 0;
// arr.forEach((el) => {
//     if(el % 2 === 0 && el > 0){
//         count++
//     }
// })

// console.log(`Number of even positive elements:: ${count}`);


//7 Знайти суму парних позитивних елементів.

// const evenPositiveSum = arr.filter(el => el > 0 && el % 2 === 0).reduce((acc,el) => acc + el, 0);
// console.log(`Sum of Even Positive Elements: ${evenPositiveSum}`);


//8 Знайти суму непарних позитивних елементів.

// const oddPositiveSum = arr.filter(el => el > 0 && el % 2 !== 0).reduce((acc,el) => acc + el, 0);
// console.log(`Sum of Odd Positive Elements: ${oddPositiveSum}`);


//9 Знайти добуток позитивних елементів.

// const multipleSum = arr.filter(el => el > 0 && el !== 0).reduce((acc,el) => acc * el, 1)
// console.log(`Multiplication of positive elements: ${multipleSum}`);


//10 Знайти найбільший серед елементів масиву, інші обнулити.

// const maxElement = arr.reduce((acc,el) => {
//     if(el > acc){
//         return el;
//     }else {
//         return acc;
//     }
// }, arr[0]);

// const newArr = arr.map(el => {
//     if(el === maxElement){
//         return el;
//     }else {
//         return 0;
//     }
// });

// console.log(`Largest element among the array: ${newArr}`);