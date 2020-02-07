console.log('New hello');

// alert('new yoo...')


// variables
/*
var age = prompt('What is your age?');

document.getElementById('someText').innerHTML = age;
*/

// Functions

/*
function fun() {
    console.log('this is a fucntion');
}

fun();

*/

/*
function greeting(yourName){ 
    var result = 'Hello'+ ' ' + yourName;  // String concadination
    console.log(result);
}

var name = prompt('What is your name?');
greeting(name);

*/

// functions with arguments
/*
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(40, 10);
*/

/* while loops

var num = 0;

while(num < 100) {
    num += 1;
    console.log(num);
}

*/

// for loop
/*
for (let num =0; num <= 100; num++){
    console.log(num);
}
*/


// String functions
let fruit = 'banana, apple, orange, blackberry';
let moreFruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split(''));  // split by character


// Array

// 2 ways top create an array
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');

console.log(fruits[2]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods

console.log('to string', fruits.toString());

console.log(fruits.join(' * '));

console.log(fruits, fruits.pop(), fruits); // removes last item

console.log(fruits.push('blackberry'), fruits); // appends last item

fruits.shift();     // remove first element from a array
console.log(fruits);  

fruits.unshift('kiwi');     // add first element to an array
console.log(fruits);


let vegetables = ['tomato', 'broccoli', 'potatos'];

let allGroceries =  fruits.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(1, 4));

console.log(allGroceries.reverse());

console.log(allGroceries.sort());


let someNumbers = [5, 10, 2, 25, 100, 60, 80];

console.log(someNumbers.sort(function(a, b){ return a-b })); // sorted in ascending order

console.log(someNumbers.sort(function (a, b){ return b-a })); // sorted in decending order


let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);

// Objects in javascript
// dictionaries in Python

let student = {first: 'Kashyap', last: 'Wadekar'};
console.log(student.first);
