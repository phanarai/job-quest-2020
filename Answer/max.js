var total = 0;
var array = [1];
var max = 0;
var secondMax = 0;

// console.log("Enter total: ");
// process.stdin.on('data', data => {
//     let string = data.toString();
//     total = Number.parseInt(string);
//     for(var i = 0; i < total; i++){
//         console.log("Enter number " + (i + 1) + " :");
//         process.stdin.on('data', data => {
//             let string = data.toString();
//             array[i] = Number.parseInt(string);
//         });
//     }
//     console.log(secondMax(array));
// });
 
function secondMax(array) {
    if (array.length > 0) {
        max = secondMax = array[0];
    }
    else {
        secondMax = "Error!";
    } 

    for (var i = 0; i < array.length; i++) {
        if(array[i] > max){
            secondMax = max;
            max = array[i];
        }else if (array[i] > secondMax){
            secondMax = array[i];
        }
        
    }
    return secondMax;
}