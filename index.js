let container = document.getElementsByClassName("wheel-container");
let number;

function btnOnclick() {
  number = Math.floor(Math.random() * 10); // generates a random number from 0 to 9

  let numberOne = number * 1000;
  container[0].style.transform = "rotate(" + numberOne + "deg)";
}






//let container = document.getElementsByClassName("wheel-container");
//let number;

//function btnOnclick() {
  //number = Math.floor(Math.random() * 9) + 1;

  //let numberOne = number * 1000;
  //container[0].style.transform = "rotate(" + numberOne + "deg)";
//}