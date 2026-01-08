// scrollerHeight : Enter  content & Padding (Visible or Not)
// scrollerWidth : Visible content & padding

let el=document.querySelector('.scroller');
let hight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log( document.documentElement.scrollHeight)
console.log(document.documentElement.clientHeight)
console.log(hight)


window.addEventListener('scroll', function () { 
    let scrollTop = document.documentElement.scrollTop;

    el.style.width = `${(scrollTop / hight) * 100}%`;



})