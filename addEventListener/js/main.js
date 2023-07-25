const button = document.getElementById("button-yellow");
const buttonGreen = document.getElementById("button-green");
const buttonPink = document.getElementById("button-pink");
const backGround = document.getElementById("image");
const div = document.getElementById("color");

button.addEventListener("click", changeColor);

function changeColor() {
    div.classList.remove("background");
    div.style.backgroundColor = "yellow";
}

buttonGreen.addEventListener("click", function() {
    div.classList.remove("background");
    div.style.backgroundColor = "green";
})

buttonPink.addEventListener("click", () => {
    div.classList.remove("background");
    div.style.backgroundColor = "pink";
});

backGround.addEventListener("click", () => {
    div.classList.add("background"); 
});