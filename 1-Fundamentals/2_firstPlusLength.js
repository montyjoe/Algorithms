// given an array, return the sum of the first value in the array, plus the array's length. what happens if the array's first value is not a number, but a string (like "what?"), or a boolean (like false)
function firstPlusLength(arr) {
  if (typeof arr[0] == "number") {
    return arr[0] + arr.length
  }
  else {
    console.log("first index is not a number")
  }
}
firstPlusLength([1,2,3,4,5])
