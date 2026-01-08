let body = document.getElementById("body");
let container_image = document.querySelector(".container img");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
let footer = document.querySelectorAll(".footer");


// image1.onclick = function () {
//     body.style.backgroundColor = "#d5b356";
//     container_image.src = image1.src;
// }
// image2.onclick = function () {
//     body.style.backgroundColor = "#95afc6";
//     container_image.src = image2.src;
// }
// image3.onclick = function () {
//     body.style.backgroundColor = "#575652";
//     container_image.src = image3.src;
// }
// image4.onclick = function () {
//     body.style.backgroundColor = "#ead7b9";
//     container_image.src = image4.src;
// }
// image5.onclick = function () {
//     body.style.backgroundColor = "#e60000";
//     container_image.src = image5.src;
// }
footer.forEach(ele => {
    
    ele.addEventListener("click", function (e) {
        body.style.background = e.target.dataset.color
        body.style.transition = "0.5s";
        container_image.src = e.target.src;
    });
});