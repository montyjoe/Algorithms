// for [1,3,5,7,9,13], print values that are greather than its second value. return how many values this is
function greatherThanSecond(arr) {
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      print(arr[i])
      count++
    }
  }
  return count
}
greatherThanSecond([1,3,5,7,9,13])
