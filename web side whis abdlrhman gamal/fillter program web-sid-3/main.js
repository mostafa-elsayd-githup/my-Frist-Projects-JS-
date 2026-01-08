
let filters = document.querySelectorAll(".filter input");
let Saturate = document.getElementById("1");
let Contrast =document.getElementById("2");
let Brightness =document.getElementById("3");
let Sepia =document.getElementById("4");
let Grayscale =document.getElementById("5");
let blur =document.getElementById("6");
let Hue_Rotate =document.getElementById("7");
let image =document.getElementById("image");
let Upload =document.getElementById("Upload");
let reset =document.querySelector(".reset");
let save = document.querySelector(".submit button");
console.log(save)

function resetValue() {
    image.style.filter = "none"
    Saturate.value = "100";
    Contrast.value = "100";
    Brightness.value = "100";
    Sepia.value = "0";
    Grayscale.value = "0";
    blur.value = "0";
    Hue_Rotate.value = "0";
    
}


window.onload = function () {
    save.style.display = "none";
    reset.style.display = "none";
    image.style.display = "none";
    Saturate.value = "100";
    Contrast.value = "100";
    Brightness.value = "100";
    Sepia.value = "0";
    Grayscale.value = "0";
    blur.value = "0";
    Hue_Rotate.value = "0";
}

Upload.onchange = function () {
    resetValue()
    save.style.display = "block";
    reset.style.display = "block";
    image.style.display = "block";
    image.src = URL.createObjectURL(Upload.files[0]);
    // 2 way
    // let reader = new FileReader();
    // reader.readAsDataURL(Upload.files[0]);
    // reader.onload = function () {
    //     image.src = reader.result;
    // }
}
filters.forEach(filter => {
    filter.addEventListener ( "input", function () {
        image.style.filter = `
        saturate(${Saturate.value}%)
        contrast(${Contrast.value}%)
        brightness(${Brightness.value}%)
        sepia(${Sepia.value}%)
        grayscale(${Grayscale.value}%)
        blur(${blur.value}px)
        hue-rotate(${Hue_Rotate.value}deg)
        `
    })
})
save.onclick = function () {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.filter = image.style.filter;
    ctx.drawImage(image, 0, 0);
    let url = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = url;
    a.download = "image.jpg";
    a.click();
}
