// Using for, print multiples of 3 from -300 to 0. skip -3 and -6
for (var i = -300; i < 1; i++) {
  if (i%3 == 0) {
    if (i == -3 || i == -6) {
      continue;
    }
    console.log(i);
  }
}
