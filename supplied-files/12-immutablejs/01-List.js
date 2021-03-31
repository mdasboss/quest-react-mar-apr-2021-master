const { List } = require( 'immutable' );

const numbers = List( [ 2, 3, 5, 7, 11 ] );

// getting, setting, updating
console.log( numbers.get( 1 ) );
const numbersWithString = numbers.set( 1, 'Three' );
const numbersWithUpdatedItem = numbers.update( 2, val => val + 1 );

// Lists have JS Array APIs implemented on them
console.log( numbers );
const numbers2 = numbers.push( 13 );
console.log( 'numbers = ', numbers );
console.log( 'numbers2 = ', numbers2 );
console.log( 'numbersWithString = ', numbersWithString );
console.log( 'numbersWithUpdatedItem = ', numbersWithUpdatedItem );

// filtering
const oddNumbers = numbers.filter( item => item % 2 === 1 );
console.log( oddNumbers );

const numberObjects = List( [ { value: 2 }, { value: 3 }, { value: 5 }, { value: 7 }, { value: 11 } ] );

numberObjects.get( 1 ).value++;
const numbersObject2 = numberObjects.set( 0, { value: -2 } );

numberObjects.forEach( console.log );