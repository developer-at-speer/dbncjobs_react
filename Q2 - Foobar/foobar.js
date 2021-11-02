const foobar = (NUMBER) => {

    if (isNaN(NUMBER) || NUMBER < 0){
        return 'NUMBER is not a valid numeric value.';
    }

    let output = "";

    if( NUMBER%2 === 0) output += "foo";
    if( NUMBER%7 === 0) output += "bar";

    if (!output) output = NUMBER;
    return output;

}

//TESTS:
console.log( foobar("abcd") );
console.log( foobar("2") );
console.log( foobar("7") );
console.log( foobar("14") );
console.log( foobar("19") );
console.log( foobar("-1") );
