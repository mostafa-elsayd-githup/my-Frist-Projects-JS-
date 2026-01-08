// get slider items |Array.from
var sliderimage = Array.from(document.querySelectorAll(".slide-contanir img"));

// get number the items
var countimage = sliderimage.length


// set current slider
var currentSlider = 2;

// slide number element
var slidenumberelement = document.getElementById("slide-number")


// previous and next button
var nextbutton = document.getElementById("next");

var prevbutton = document.getElementById("prov");

// handel click previous and next button
nextbutton.onclick = nextslide;

prevbutton.onclick = provslide;


// create ul element
var ul = document.createElement("ul")

// set id on ul element
ul.setAttribute("id","list")

// create il element in ul
for (var i = 1; i <= countimage; i++) {

    // create il
    var li = document.createElement("li")

    // set id on il
    li.setAttribute("data-index", i)
    
    // ste item content 
    li.appendChild(document.createTextNode(i))

    //  append items to the ul
    ul.appendChild(li) 
}

// add the create ul element to the page 
document.getElementById("indicator").appendChild(ul)

// get the new ul
var ul_list = document.getElementById("list");

// get slider li |Array.from
var sliderli = Array.from(document.querySelectorAll(".indicator li"));

// loop through the li
for (var i = 0; i < sliderli.length; i++){
    sliderli[i].onclick = function () {
        currentSlider = parseInt(this.getAttribute("data-index"));
         checker()
    };
}
// console.log(sliderli)

function nextslide () {
   
    if (next.classList.contains("disabled")) {
        return false

    } else {
        currentSlider++;
         checker()
    }
};
function provslide() {
    if (prov.classList.contains("disabled")) {
      return false
    } else {
          currentSlider--;
    checker()
  }
};


// create the checker function
function checker() {
    // set the slide number
    slidenumberelement.textContent = `slide # ${currentSlider} of ${countimage}`;

    // remove active class from
     removeall()

    // set active class on current slide
    sliderimage[currentSlider - 1].classList.add("active")

    // set active class on current ul
    ul.children[currentSlider - 1].classList.add("active")

    // check if current  is the first
    if (currentSlider==1) {
       prov.classList.add("disabled")
    } else {
        prov.classList.remove("disabled")
    }

    if (currentSlider==countimage) {
        next.classList.add("disabled")
        
    } else {
         next.classList.remove("disabled")
    }
    
}
// remove active class from items and bullets 
function removeall() {
    // loop through the items
    sliderimage.forEach(function (img) {
        
        img.classList.remove("active")
    });
    // loop through the li
    sliderli.forEach(function (li) {
        
        li.classList.remove("active")
    });

}

