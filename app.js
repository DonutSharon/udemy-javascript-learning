console.log("ON RELOAD")
console.log('HI GAYS')

let shoppingList = ['apple sapling', 'peach sapling'];

// push - add to end
// pop - remove from end
// unshift - add to start
// shift - remove from start 

let topSongs = [
	'Armagedon',
	'Heya',
	'Fri[end]s',
	'Wife'
];

// add to end - push - changing length of array
topSongs.push('Supernova')

// Array Methods
/**
	* concat
	* includes
	* indexOf
	* join
	* reverse
	* slice
	* splice
	* sort
*/

// sort - changes final array

let names = ['John', 'Stacy', 'Amber', 'Robert'];

// console.log(names.sort());

let numbers = [10, 34, 10000, 67, 99]  // -->  [10, 10000, 34, 67, 99]
// sort of numbers will not order in value, but string lengths
// console.log(numbers.sort())

// single values
let fruit = "orange";
let color = fruit;

//changing fruit to "carrot" will not change color

// arrays
let array1 = [1, 2, 3, 4]
let array2 = array1

//changing array1 to add 4,5 will change array2

/* Objects - Collections of Properties [key-value pairs] */

const stardewValleyInfo = {
	season: 'Spring',
	day: 'monday',
	crop: 'parnsips',
	cost: 250,
}

const nums = {
	100: "one hundred",
	16: "sixteen",
}

/* Loops: Repeatedly run code many times */
/* For-loops */
/*
 
	for (
		[initialExpression];
		[condition];
		[incrementExpression]
	)
 
*/

// for(let i = 1; i <= 10; i++) {

// }

//for ... of

// for(variable of iterable) {
// 	statements
// }

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

//for (let sub of subreddits) {
//	console.log(sub)
//}

/* Functions */
function grumpus() {
	alert("I told you not to!");
}

/* Function Expressions */
// functions are objects

function add(x, y) {
	return x + y;
}

const sum = function (x, y) {
	return x + y;
}
const sub = function (x, y) {
	return x - y;
}
const mul = function (x, y) {
	return x * y;
}
const div = function (x, y) {
	return x / y;
}

const operations = [add, sub, mul, div]

function multiplyBy(num) {
	return function () {

	}
}

const summy = function (x, y) {
	return x + y;
}

function between(x, y) {
	return function (num) {
		return num >= x && num < y;
	}
}

const isChild = between(0, 18);

//setTimeout()  // will run function after x amount of time in milliseconds

const btn = document.querySelector('button');
btn.addEventListener('click', grumpus)

/* HOISTING */
//console.log(animal) // hoisted, undefined
var animal = 'capybara';

//cook(); // will work, displays in console

//function cook() {
//	console.log("you have cooked");
//}

//console.log(animal2)  // not hoisted, will not display
let animal2 = "velociraptor"

//console.log(summies(1, 2)) // not hoisted
const summies = function (x, y) {
	return x + y;
}

/* ARRAY CALLBACK METHODS */

/**
* forEach
* map - new array from existing array, transform array to another array
* filter
* find
* reduce
* some
* every
*/

/* forEach */

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numArr.forEach(function (x) { console.log(x * x) })

// numArr.forEach(function (elem, indx) { console.log(indx, elem) })  // shows index and element

/* map */
// copies array, but does not change original
const numeros = [20, 21, 22, 23, 24, 25, 26, 27];
const palabras = ['asap', 'byob', 'rsvp', 'diy'];

const doubles2 = numeros.map(function (x, i) {
	return x * i;
})

const change = palabras.map(function (palabra) {
	return palabra.toUpperCase().split('').join('.');
})


/* FUNCTIONS */
const square = function (x) {
	return x * x;
}

const square2 = (x) => {
	return x * x;
}

const multiplyagain = (x, y) => {
	return x * y;
}

/* Implicit Functions */

const multiplyagain2 = (x, y) => x * y;


/* array.find() */

// array.find('var') --> will find first instance 

/* array.filter() */

// array.filter() --> will find all instances of occurence

const numss = [34, 35, 67, 54, 109, 32, 9];

const odds = numss.filter(n => n % 2 === 1)

// console.log(odds)

/* Some and Every */

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// Some --> returns true if any elements pass the test function

const someStartWithD = words.some(word => word[0] === 'd')

// Every --> tests whether all elements in array pass the provided function; returns a boolean

const all3Lets = words.every(word => word.length === 3);

const allEndInG = words.every(word => {
	const last = word.length - 1;
	return word[last] === 'g'
})

/* Sort pt.2 */

const prices = [400.5, 3000, 99.99, 35.99, 12.00, 9500];
const ascSort = prices.sort((a, b) => a - b);              // if difference +, a before b
const descSort = prices.sort((a, b) => b - a);              // if difference +, b before a

/* Reduce */

// takes an array of values and reduces to one value
const summye = [3, 5, 7, 9, 11]
const product = summye.reduce((total, currentValue) => { return total * currentValue });

const votes = ['y', 'y', 'n', 'y', 'n']

const results = votes.reduce((tally, val) => {
	if (tally[val]) {
		tally[val]++
	}
	else {
		tally[val] = 1
	}
	return tally
}, {})