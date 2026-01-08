let title= document.querySelector(".title");
let ul= document.querySelector("ul");
let reload = document.querySelector(".Reload");


window.onload = function () {
    
    if (navigator.onLine) {
      onLine()
    } else {
      offLine()
    }
}


function onLine() {
    title.innerText="Online Now";
    // title.style.color=" green";
    ul.classList="hide";
    reload.classList="hide";
}

function offLine() {
    title.innerText = "Offline Now";
    // title.style.color = "red";
    ul.classList.remove("hide");
    reload.classList.remove("hide");
}
window.addEventListener("online", function () {
    onLine();
});
window.addEventListener("offline", function () {
    offLine();
});

// reload.addEventListener("click", function () {
//     window.location.reload();
// })