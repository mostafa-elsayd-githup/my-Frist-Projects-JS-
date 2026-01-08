let nums=document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started=false;

// nums.forEach((num) => start_count(num))
window.onscroll = function () {
    if(window.scrollY >= section.offsetTop){
        if(!started){
          nums.forEach((num) => start_count(num))

        }
        started = true
    }
}
    

function start_count(el) {
    let number = el.dataset.goal;
    let count =setInterval(() => {
        el.textContent++;
        if(el.textContent==number){
            clearInterval(count);
        }
    }, 2 );
}
