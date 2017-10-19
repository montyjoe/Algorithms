//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName and vice versa.
function setAndSwap(name, number) {
  var myName = name;
  var myNumber = myNumber;
  temp = myName;
  myName = myNumber;
  myNumber = temp;
  console.log("My name is " + myName + " and my number is " + myNumber);
}
setAndSwap("Jordan", 42)
