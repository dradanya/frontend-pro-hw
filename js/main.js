function sum(x) {
    let total = x;

    return function(y) {
        total += y;
        return total;
    };
}

let firstNumber = +prompt('Enter your first number : ');
let result = sum(firstNumber);
while(true) {
    let next = prompt("Enter another number");
    if(next === null) {
        console.log('Ending...')
        break
    }
    else {
        next = Number(next);
        console.log(result(next));
    }
}2