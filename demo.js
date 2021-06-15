

var text = document.querySelector("h1");
var button = document.querySelector(".button");
var body = document.querySelector("body");

button.addEventListener("click", () => {
    
    var randomColor1 = Math.floor(Math.random() * 255) + 1;
    var randomColor2 = Math.floor(Math.random() * 255) + 1;
    var randomColor3 = Math.floor(Math.random() * 255) + 1;
    
    
    body.style.color = "white";
    body.style.backgroundColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
    
    text.innerText = `RGB: (${randomColor1}, ${randomColor2}, ${randomColor3})`;
});

