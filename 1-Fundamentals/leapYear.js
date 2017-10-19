/*  write a function that determines whether a given year is a leap year.
if a year is divisible by four, it is a leap year, unless it is divisible by 100.
However, if it is divisible by 400, then it is. */
function leapYear(year) {
  if (year % 400 == 0) {
    console.log(year + " is a leap year!");
  }
  else if (year % 100 == 0) {
    console.log(year + " is not a leap year..")
  }
  else if (year % 4 == 0) {
    console.log(year + " is a leap year!");
  }
  else {
    console.log(year + " is not a leap year..")
  }
}
leapYear(1994);
