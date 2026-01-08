
// lesson sessionStorage
window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue");


document.querySelector(".name").onblur = function () { 
console.log(this.value);
    window.localStorage.setItem("name", this.value);
}

if(window.localStorage.getItem("name")) {
    document.querySelector(".name").value = window.localStorage.getItem("name");
}
// end lesson sessionStorage





