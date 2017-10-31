var identifier = window.prompt("Submit an identifier [topLeft, topRight, bottomLeft, bottomRight]");
var color = window.prompt("Submit a color");

document.querySelector("#" + identifier).style.backgroundColor = color;