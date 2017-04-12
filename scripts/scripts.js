
function createBoard(elmId) {
var element = document.getElementById(elmId);
for(var i = 0; i<100; i++) {
  var square = document.createElement("div");
  var att = document.createAttribute("data-node");
  att.value = i;
  square.setAttributeNode(att);
  att= document.createAttribute("class");
  att.value = "square";
  square.setAttributeNode(att);
  element.appendChild(square);
  }
}
createBoard("shots-fired");
createBoard("my-ships");

var hitAreas = document.querySelectorAll("#shots-fired .square");

for (var key in hitAreas) {
  if( hitAreas.hasOwnProperty[key]) {
    hitAreas[key].addEventListener('click', handleClick)
  }
}


function handleClick(){
  console.log('clicked');
  console.log(arguments);
}
