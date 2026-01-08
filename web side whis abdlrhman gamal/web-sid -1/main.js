let header = document.querySelector("header");
let stars = document.getElementById("stars");
let moon=document.getElementById("moon");
let mountains3=document.getElementById("mountains3");
let mountains4=document.getElementById("mountains4");
let river=document.getElementById("river");
let boat = document.getElementById("boat");
let body = document.querySelector("body");
let mostafa = document.querySelector(".mostafa");
let scroll = document.getElementById("to_top");
let main = document.querySelector(".main");


window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountains3.style.top = value * 1.5 + "px";
    mountains4.style.top = value * 1.2 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3.3 + "px";
    mostafa.style.fontSize = value + "px";
    if (scrollY > 76) {
        mostafa.style.fontSize = 76 + "px";
        // console.log("yed")
    }
    if (scrollY >= 250) {
        scroll.parentElement.style.display = "block";
    } else {
        scroll.parentElement.style.display = "none";
    };
    scroll.onclick = function () {
            window.scrollTo(top = 0, Animation = "smooth");
    };
     if (scrollY > 520) {
        header.style.backgroundColor = "#200016";
     } else {
        header.style.backgroundColor = "transparent";
    };
    if (scrollY > 110) {
        main.style.background = "linear-gradient( #376281 , #10001f)";
        main.style.zIndex = "2";
        // console.log("yed")
    } else { 
        main.style.background = "linear-gradient( #200016 , #10001f)";
        main.style.zIndex = "1";
    };
}
console.log(window.scrollY)
