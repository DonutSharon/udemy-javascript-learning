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