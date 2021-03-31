// browser -> window, nodejs -> global
function foo( x, y ) {
    console.log( this ); // function context
    console.log( x, y );
}

foo();

const john = {
    foo: foo
};

console.log( foo === john.foo );

john.foo(); // john is the context (this)
foo(); // window (in browser)

foo.call( { x: 100 }, 10, 20 ); // calls foo() but with context { x : 100 }
foo.call( { x: 100 }, 20, 30 ); // calls foo() but with context { x : 100 }
foo.call( { x: 100 }, 40, 50 ); // calls foo() but with context { x : 100 }

let boundFoo = foo.bind( { x: 100 } ); // we have fixed the context of boundFoo to { x: 100 } forever
boundFoo( 10, 20 ); // foo.call( { x: 100 }, 10, 20 );
boundFoo( 20, 30 ); // foo.call( { x: 100 }, 20, 30 );
boundFoo( 40, 50 ); // foo.call( { x: 100 }, 40, 50 );