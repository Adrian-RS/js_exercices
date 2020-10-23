//invierte el siguiente arreglo
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//solution one
console.log(numbers.reverse());


//solution two
let reversedNumbers = [];
let n = numbers.length;
for(let i = 0; i < n ; i++) {
    reversedNumbers.push(numbers.pop());
}
console.log(reversedNumbers);


//solution three
let reversedNumbers2 = [];
for(let i = (numbers.length - 1); i >= 0 ; i--) {
    reversedNumbers2.push(numbers[i]);
}
console.log(reversedNumbers2);