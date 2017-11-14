// based on earlier "countdown by fours", given lowNum, highNum, mult, print multiples of mult form highNum down to lowNum, using a for
function flexibleCountdown(lowNum, highNum, mult) {
  for (var i = highNum; i > lowNum; i - mult) {
    console.log(i);
  }
}
flexibleCountdown(3,95,5);
