const button=document.getElementById("button")
const circle=document.getElementById("circle")
const square=document.getElementById("square")
const Rectangle=document.getElementById("Rectangle")

var numberInTheShape=1
var oldValue=0

button.onclick=() => {
    const box=document.getElementById("box")
    let n = document.getElementById("number").value

    n = Number(n) + Number(oldValue);
    for(let j=numberInTheShape; j<=n; j++) {
     var shape = document.createElement("div")
     shape.innerHTML += numberInTheShape;
    
    if (square.checked) {
        shape.classList.add("square")
    }
    if (circle.checked) {
        shape.classList.add("circle")
    }
    if (rectangle.checked) {
        shape.classList.add("rectangle")
    }

box.appendChild(shape);
numberInTheShape++;
oldValue = box.lastElementChild.innerHTML;
}
}