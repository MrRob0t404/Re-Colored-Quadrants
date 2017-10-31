var identifier = window.prompt("Submit an identifier [topleft, topright, bottomleft, bottomright]");
var color = window.prompt("Submit a color");

document.querySelector("#" + identifier).style.backgroundColor = color;