// write a function that accepts any array, and returns a new array with the array values that are greather than its 2nd value.
// print how many values this is. what will you do if the array is only one element long?
function greatherThanSecondGeneralized(arr) {
  if (arr.length < 2) {
    return "Array is too short"
  }
  else {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[1]) {
        newArr.push(arr[i])
      }
    }
    print(newArr.length)
    return newArr
  }
}
greatherThanSecondGeneralized([3,6,4,7,1,8,2,9])
