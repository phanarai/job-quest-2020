function shift(array, direction, number) {
    if (direction == 'left') {
        for (var i = 0; i < number; i++) {
            array.push(array.shift());
        }
    }
    else if (direction == 'right') {
        for (var i = 0; i < number; i++) {
            array.unshift(array.pop());
        }
    }
    return array;
}

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4, 5], 'right', 3));