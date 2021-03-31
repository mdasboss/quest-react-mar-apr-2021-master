// Create a Movie class that represents details of a movie. Suggested information to have in an object of the class -name, cast (an array of strings with cast member's names), yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new castmember's name and adds to the cast array, addToCollection( amount ) that accepts box office collections for a week and adds it to the current boxOfficeCollection. Create 2 objects of this class that represent any 2 movies. Call the methods addToCast() andaddToCollection() and verify they work according to expectations.

class Movie {
    constructor( name, cast, yearOfRelease, boxOfficeCollection ) {
        this.name = name;
        this.case = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }
}

// const cast = [ 'Amitabh', 'Dharmendra' ];
const sholay = new Movie( 'Sholay', [ 'Amitabh', 'Dharmendra' ], 1975, 1000000 );


function foo( arr ) {
    console.log( arr ); // this prints [ 1, 2, 3 ]
}

const arr = [ 1, 2, 3 ];
foo( arr )

// check if a variable is "falsy" -> 5 falsy values exist in JS - null, undefined, false, "" (empty string), 0
if( !variable ) {
    // do something
}

// number of items in the array (an empty array is NOT falsy; it is equivalent of a tru value in a condition)
arr.length

if( arr ) { // even if arr = [] the check results in true
    // entered even in case of empty array
}