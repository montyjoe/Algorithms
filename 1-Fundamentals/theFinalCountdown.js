// given 4 parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2 and extending to param3.
// One exception: if a multiple is equal to param4, then skip that one. Do this using a while.
function finalCountdown(param1, param2, param3, param4) {
  i = param1
  while (i < param3-param1) {
    i += param1
    if (i > param2 && i != param4) {
      console.log(i)
    }
  }
}
finalCountdown(3,5,17,9);
