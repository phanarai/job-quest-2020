function fizzBuzz(input) {
    var output = '';
    switch (input % 3) {
        case 0:
            output += 'Fizz';
            break;
        default:
    }
    switch (input % 5) {
        case 0:
            output += 'Buzz';
            break;
        default:
    }
    return output;
}

console.log(fizzBuzz(21));
console.log(fizzBuzz(25));
console.log(fizzBuzz(45));