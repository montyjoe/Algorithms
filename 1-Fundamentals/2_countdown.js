// create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as the array's zero'th element) downt to 0 (as the last element).
function countdown(input) {
  var newArr = []
  for (var i = input; i >= 0; i--) {
    newArr.push(i)
  }
  return newArr
}
countdown(7)
