let character = document.getElementById("character");
let game = document.getElementById("game");
let both = 0;
let interval;
let speed = 2;

function speedBoost() {
    speed = 4;
}
let speedDown = () =>{
    speed = 2
}
function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) {
        character.style.left = left - speed + 'px';
    }
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 680) {
        character.style.left = left + speed + 'px';
    }
}
function moveUp() {
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (top > 0) {
        character.style.top = top - speed + 'px';
    }
}
function moveDown() {
    let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (top < 880) {
        character.style.top = top + speed + 'px';
    }
}
document.addEventListener("keydown",  event => {
    if(both==0){
        both++;
        if(event.key === "a"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key === "d"){
            interval = setInterval(moveRight, 1);
        }
        if(event.key === "w"){
            interval = setInterval(moveUp, 1);
        }
        if(event.key === "s"){
            interval = setInterval(moveDown, 1);
        }
    }
    if(event.key === "e"){
        speedBoost();
    }
    if(event.key === "q"){
        speedDown();
    }
});
document.addEventListener("keyup", () => {
    clearInterval(interval);
    both = 0;
});
