// Ask the user for the length of the array
const length = parseInt(prompt('Enter the length of the array:'));

// Create an empty array
const arr = [];

// Fill the array with elements provided by the user
for(let i = 0; i < length;i++){
    let el = parseInt(prompt('Enter element ' + (i + 1) + ' of the array:'));
    arr.push(el);
}

// Display the initial array
document.write('Initial array: ' + arr + '<br>');

// Sort the array in ascending order
arr.sort(function(a,b) {
    return a - b;
})

// Display the sorted array
document.write('Sorted array: ' + arr + '<br>');

// Remove elements from 2 to 4 (inclusive)
arr.splice(1,3);

// Display the updated array
document.write('Array after removing elements from 2 to 4: ' + arr);