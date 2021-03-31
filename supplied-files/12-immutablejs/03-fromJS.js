const { fromJS } = require( 'immutable' );

// recursively sets immutable structure
const amazonEcho = fromJS({
    name: 'Amazon Echo',
    version: 'v1',
    price: 45,
    options: {
        colors: [ 'Black', 'White' ],
        output: [ '5W', '10W' ]
    }
});

amazonEcho.get( 'options' ).get( 'colors' ).set( 0, 'Gray' );
console.log( amazonEcho.get( 'options' ).get( 'colors' ).get( 0 ) );