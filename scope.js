/*const num = 20000 num.won = function () { return this.valueOf() +'원' } console.log(num.won()) */

import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';

const books = [
	{ name: 'park', price: 10000 },
	{ name: 'min', price: 900 },
	{ name: 'soo', price: 5000 },
];
const output = _.sortBy(books, (book) => book.price);
console.log(JSON.stringify(output, null, 2));