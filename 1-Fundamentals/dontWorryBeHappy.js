// Create beCheerful(). Within it, console.log string "good morning!". Call it 98 times.
function beCheerful() {
  console.log("good morning!");
}
function callFunction(number) {
  for (var i = 0; i < number; i++) {
    beCheerful();
  }
}
callFunction(98);
