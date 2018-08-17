// generator hex value function
function getColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}
// Set background color
function setBackground() {
  var bgColor = getColor();
  document.getElementById("hexe").style.background = bgColor;
  document.getElementById("hexe").value = bgColor;
}
// Rewrite text to value of color
function changediv(){
	var bcolor = document.getElementById("hexe").value;
	document.getElementById("btnt").innerHTML = "color: " + bcolor;
}
function whiten(my_image){
    document.getElementById("svg").src = "roundss-keyboard_arrow_right-24px.svg"
}
function bcktnml(){
    document.getElementById("svg").src = "baseline-keyboard_arrow_right-24px.svg"
}