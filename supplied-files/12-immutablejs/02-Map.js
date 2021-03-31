const { Map } = require( 'immutable' );

const amazonEcho = Map({
    name: 'Amazon Echo',
    version: 'v1',
    price: 45,
    options: {
        colors: [ 'Black', 'White' ],
        output: [ '5W', '10W' ]
    }
});

// getter, setter, updater
console.log( amazonEcho.get( 'version' ) );
const amazonEcho2 = amazonEcho.set( 'version', 'v2' );
console.log( amazonEcho.get( 'version' ) );
console.log( amazonEcho2.get( 'version' ) );

amazonEcho.update( 'price', price => price - 50 );