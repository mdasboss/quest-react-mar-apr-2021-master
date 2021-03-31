// 'use strict';

const { enableES5, produce } = require( 'immer' );

enableES5();

// working with objects
const amazonEcho1 = {
    name: 'Amazon Echo',
    version: 'v1'
};

const amazonEcho2 = produce(amazonEcho1Draft => {
    amazonEcho1Draft.version = 'v2';
});

// the produced object is frozen and immutable
// this assignment will throw an error in strict mode
amazonEcho2.version = 'v3';

console.log( amazonEcho1 );
console.log( amazonEcho2 );


// working with arrays
const productsList1 = [
    { name: 'Amazon Echo', price: 129 },
    { name: 'Apple Watch', price: 699 }
];

const productsList2 = produce(productsList1, productsList1Draft => {
    productsList1Draft[1].price -= 50;
    productsList1Draft.push( { name: 'iPad Pro', price: 849 } );
});

console.log( productsList1 );
console.log( productsList2 );

console.log( productsList1[0] === productsList2[0] ); // true
console.log( productsList1[1] === productsList2[1] ); // false