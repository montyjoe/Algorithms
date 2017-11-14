// print all integer multiples of 5, from 512 to 4096. afterward, also log how many there were.
var count = 0;
for (var i = 512; i < 4097; i++) {
  if (i % 5 == 0) {
    console.log(i);
    count++;
  }
}
console.log(count);
