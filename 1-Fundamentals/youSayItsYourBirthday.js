// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day."
function birthday(number1, number2) {
  if (number1 == 3 && number2 == 17) {
    console.log("How did you know?");
  }
  else if (number1 == 17 && number2 == 3) {
    console.log("How did you know?");
  }
  else {
    console.log("Just another day.")
  }
}
birthday(3,17);
birthday(17,3);
birthday(10,10);
