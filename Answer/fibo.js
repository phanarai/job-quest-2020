process.stdin.on('data', data => {
  var string = data.toString();
  var number = Number.parseInt(string);
  console.log(fibonacci(number));

});
function fibonacci(n) {
  return n < 1 ? 0
       : n <= 2 ? 1
       : fibonacci(n - 1) + fibonacci(n - 2);
}



