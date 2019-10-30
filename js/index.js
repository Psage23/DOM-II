// Your code goes here
TweenMax.from(".logo-heading", 0.5, {scale:0.5, opacity:0, x:-100, ease:Back.easeOut, delay:0.4})
TweenMax.from("h2", 0.5, {x:100, opacity:0, ease:Back.easeOut, delay:1})
TweenMax.from("img", 0.5, {opacity:0.2, delay:1})
TweenMax.from("p", 0.5, {scale:0.5, opacity:0, y:100, ease:Back.easeOut, delay:0.4});

const busImg = document.querySelector("img");
busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.2)";
    busImg.style.transition = "all 0.3s"
})
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
    busImg.style.transition = "all 0.3s"
})

const button = document.querySelectorAll(".btn").forEach(element => {
    element.addEventListener("click", (e) => {
        element.style.backgroundColor = "gold";
        e.preventDefault();
    })
})

const nav = document.querySelectorAll("a").forEach(element => {
    element.addEventListener("dblclick", () => {
        element.style.color = "hotpink";
    })
})

const down = document.querySelector("body");
down.addEventListener("keydown", (e) => {
    down.style.backgroundColor = "lightyellow";
    e.stopPropagation();
})

