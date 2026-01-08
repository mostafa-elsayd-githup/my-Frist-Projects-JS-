let add = document.querySelector(".add");
let inp =document.querySelector(".inp");
let box = document.querySelectorAll(".box");
// console.log(box);
let drag= null

add.onclick = function () {
    if (inp.value != "") {
        box[0].innerHTML +=`
        <p draggable="true">${inp.value}</p>
        `
        inp.value = "";
    } else {

    };
    dragItem();
}
function dragItem() {
    let item = document.querySelectorAll("p");
    item.forEach(e => {
        e.addEventListener("dragstart", () => {
            drag = e;
            e.style.opacity = "0.5";
        })

        e.addEventListener("dragend", () => {
            drag = null;
            e.style.opacity = "1";
        })


        box.forEach(box => {
            box.addEventListener("dragover", function (e) { 
                e.preventDefault();
                this.style.background = "#c3c0f0";
                this.style.color = "#fff";

            })
            box.addEventListener("dragleave", function () { 
                this.style.background = "#fff";
                this.style.color = "#000";
            })
            box.addEventListener("drop", function () { 
                this.append(drag);
                this.style.background = "#fff";
                this.style.color = "#000";
            })
        })

    })
}