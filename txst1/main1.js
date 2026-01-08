// let a =10;
// let b ="20";
// let c =80;
// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ +a);
// console.log(--c + +b + --a + -b++ - +b++ - +b * a +--a - +true);



// //
// let d = "-100"
// let e = "20"
// let f = "30"
// let g = "true"
// console.log(-d * e  )
// console.log(++e + f++ + ++e -d)

//
//
//
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d =2.4;
// find smallest number in all variables
// console.log(Math.floor(Math.min(a , b , c , d)));

//use variables a ,b one time to get the output
// console.log(Math.min(a , b) * a);  //10000

//get integer "2" from d variable with 4 methods
// console.log(parseInt( d.toFixed()))
// console.log(Math.floor(Math.min(a , b , c , d)));
// console.log(Math.trunc(d));
// console.log(Math.floor(d));

//use variables b , d to get this values
// console.log(((Math.floor(b) / Math.ceil(d)).toFixed(2)).toString()); //66.67=>string
// console.log(Math.ceil(b) / Math.ceil(d)); //67=>number

// let  the_name="  ahmed  ";
// console.log(((the_name.trim()).charAt(2)).toUpperCase())
// console.log((the_name).trim().repeat(2))

// //
// //
// //
// let x= "Elzero Web School";
// console.log(x.slice(2 , 6))
// // console.log(x.charAt())
// console.log(x.charAt(13).toUpperCase().repeat(8))
// console.log(x.split(" ", 1))

//
//
//
//
// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "moracco";
// if(discount === true && country === "egypt"){
//     price-=30;
// }
// else if( discount === true && country === "KSA"){
//     price-=10;
// }
// else if( discount === true && country === "syria"){
//     price-=40;
// }
// else if( discount === true && country === "moracco"){
//     price-=80;
// }
// console.log(price)


//
//
//
// let z = 10;

// if ( z <10){
//     console.log(10);
// }else if (z >= 10 && a <=40){
//     console.log("10 To 40");
// }else if ( z > 40 ){
//     console.log("> 40");
// }else  {
//     console.log("Unknown");
// }

// let st = "Elzero Web School"

// if( (st.length*2).toString()  === "34"){
//     console.log("good")
// }
// // tow solution
// if ((st.split("")).includes("W")){
//     console.log("Good")
// }
// if ((st.slice()).includes("W")){
//     console.log("Good")
// }
// //
// if (st.slice(0,6).repeat(2)=== "ElzeroElzero" ){
//     console.log("Good")
// }
// //
// if ((typeof(st.length)).toString() ==="number"){
//     console.log("good")
// }
//
// if ((typeof st)==="string"){
//     console.log("good")
// }
// if ((typeof(st.length)) !=="string"){
//     console.log("good")
// }

//
//
// let jop = "IT";
// let salary = 0
// switch(jop){
//     case  "manger":
//         salary = 8000;
//         console.log(`my salary ${salary}`)
//         break;
//     case "support":
//     case "IT":
//         salary = 6000;
//         console.log(`my salary ${salary}`)
//         break;
//     case "Designer":
//     case "Developer":
//         salary = 7000;
//         console.log(`my salary ${salary}`)
//         break;
//     case 5:
//         salary = 4000;
//         console.log(`my salary ${salary}`)
//         break;
//     default:
//         console.log("unknown")

// }




//
//
//
// let holiday = 0;
// let money = 0;

// if (holiday === 0){
//    money = 5000
//    console.log(5000)

// }else if (holiday === 1){
//       money = 3000
//       console.log(3000)
// }else if (holiday === 2){
//       money = 3000
//       console.log(3000)
// }else if (holiday === 3){
//       money = 2000
//       console.log(2000)
// }else if (holiday === 4){
//       money = 1000
//       console.log(1000)
// }else{
//    money=0
//    console.log(0)
// }



// let my_name=["mostafa", "eslam", "mohamed", "sameh", "alaa", "ali"]
// let my_name=["mostafa", "eslam", "mohamed", "sameh", "alaa", "ali"]
// let my_name=["mostafa", "eslam", "mohamed", "sameh", "alaa", "ali"]
// console.log(my_name)
// my_name.concat()
// console.log(my_name)


//
//


// let my_frinds=["mostafa", "eslam"]
// let my_frinds_school=["mohamed", "sameh"]
// let my_frinds_home=["alaa", "ali"]
// let all_frinds = my_frinds.concat(my_frinds_school, my_frinds_home).join(" @ ")
// console.log(all_frinds);

//
//
//

// let zero = 0;

// let count = 3;

// let my = ["Hamed", "Mazen", "Elham", "Osama", "Gamal", "Ameer"]

// console.log(my.slice(0, 4).reverse())

// console.log(my.slice(-5, -3).reverse())
// let s = ["Elzero"]
// console.log(`"${s}"`)
// console.log(s.join("").slice(4))


//
//

/* nested loop{
let my = ["Hamed", "Mazen", "Elham", "Osama", "Gamal", "Ameer"]
let products = ["keyboard", "mouse", "pen", "monitor"]
let color = ["red", "black", "green"]
let models = [2020, 2024, 2025]
for (i = 0; i < products.length; i++) {
    console.log("#".repeat(10))
    console.log(products[i])
    console.log("color:")
    for (j = 0; j < color.length; j++) {
        
        console.log(`- ${color[j]}`)
    }

    console.log("models:")
    for ( k= 0; k < models.length; k++) {
        
        console.log(`- ${models[k]}`)
    }
}
}
*/



// start

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myemployees = ["Amgad", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// let show = myAdmins.length;
// for (i = 0; i < show; i++) {
//     if (myAdmins[i] === "Stop") {
        
//     }
// }
// document.write(`<div>We have a ${show - 2}Admin </div>`)
// for (i = 0; i < show; i++) {
//     if (myAdmins[i] === "Stop") {
//         break;
//     }
//     document.write(`<div>`)
//     document.write(`<hr>`)
//     document.write(`<div>The Admin For Team ${i + 1} is ${myAdmins[i]}</div>`)
//     document.write("<h3>Team Members:</h3>")
//     for (j = 0; j < myemployees.length; j++) {
//         if (myAdmins[i][0] === myemployees[j][0]) {
            
//             document.write(`<p>- ${myemployees[j]}</p>`)
//         }
        
//     }
//     document.write(`</div>`)
// }

// end

// start
// function sayhello(username, age) {
//     if (age<20) {
//         console.log("this app not suitable for you")
//     } else {
        
//         console.log(`hi ${username} your age is ${age }`)
//     }
// }
// sayhello("mostafa",20);
// sayhello("eslam", 19);
// sayhello("walaa", 25);
// end



// start
// function calc(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
    
//     return sum;
// }
// console.log(calc(2,2))
// end



// // start
// function showinfo(us = "un", age = "un", rt = 20, show = "yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h2>welcome: ${us}</h2>`);
//     document.write(`<p>your age is: ${age}</p>`);
//     document.write(`<p>your hours rate: $${rt}</p>`);
//     if (show === "yes") {
//         if (sk.length > 0) {
//             document.write(`<p> your skills: ${sk.join(" || ")}</p>`);
//         } else {
//             document.write(`<p>skills: no skills</p>`);
//         }
//     } else {
//         document.write(`<p>skills are hidden</p>`);
//     }
//     document.write(`</div>`)
// }
// showinfo("mostafa",21,15, "yes", "html", "css","js","php");
// end


// start
// function showinfo(input = "un") {
//     if (typeof input === "string") {
//         let us = "";
//         us += input
//         document.write(`<h2>welcome: ${us}</h2>`);
//     }
//     if (typeof input === "number") {
//         let age = 0;
//         age += input
//         document.write(`<p>your age is: ${age}</p>`);
//     }
//         if (typeof input === "boolean") {
//             if (input === true) {
//                 document.write(`<p>your are Available for Hire</p>`);
//             } else {
//                 document.write(`<p>your are Not Available for Hire</p>`);
//             }

//     }
//     }
//         document.write(`<div>`);
// showinfo("mostafa")
// showinfo(21)
// showinfo(true)

// end


//

// function message(fname, lname) {
//     let masg = "welcome";
//     function concatmasg() {
//         return `${masg} ${fname} ${lname}`;
//     }
//     return concatmasg()
// }
// document.write(message("mostafa", "eslam"))


// (normal function)(

// function price(num1, num2){
//     return  num1 + num2  ;
// }
// document.write(price(100, 200))
// )


//( (arrow function)(
// let price = (num1 , num2) => num1 + num2;
// document.write(price(100, 200))
// )

// let names = function (...names) {
//     return names.join(", ");
// }
// console.log(names("mostafa", "eslam", "mohamed", "sameh", "alaa", "ali", "amaar"))

// let name =  (...names)=> `string [${names.join("],[")}]`;
// console.log(name("mostafa", "eslam", "mohamed", "sameh", "alaa", "ali", "amaar"))

// let mynumbers = [20, 50, 10, 60];
// let calc = (one, two, ...num) => one + two + num[0];

// console.log(calc(10, mynumbers[0], mynumbers[1]))


// for (let i = 0; i < num.length; i++) {
    //     newnum.push(num[i] + num[i]);
    // }
    // console.log((newnum))
    

// let num = [1, 2, 3, 4, 5, 6];
// let newnum = [];
// let self = num.map (function(element, index, array){
//     return element + element;
// }, 10);
// console.log(self)

// let num = [1, 2, 3, 4, 5, 6];
// let newnum = [];
// let self = num.map ((element, index, array)=>element + element);
// console.log(self)

// function addition(ele) {
//     return ele + ele;
// }
// let add = num.map(function(element, index, array){
//     return element * element;
// });
// console.log(add)


//start
// let swappingcases = "MosTafA";
// let invertednumber = [1, -10, -20, 15, 100, -30];
// let ingorenumbers = "MOst21FA30";

// let sw = swappingcases.split("").map(function (element, index, array) {
//     return element === element.toUpperCase() ? element.toUpperCase() : element.toUpperCase();
// }).join("");

// console.log(sw)


// let inv = invertednumber.map(function (element, index, array) {
//     return -element
// }).join(",");

// console.log(inv)

// let ing = ingorenumbers.split("").map(function (element, index, array) {
//     return isNaN(element) ? element : "";
// }).join("").toUpperCase();
// console.log(ing)
// end



// let max = "A138S27x"

// let min = max.split("").filter(function (ele) {
//     return ele * ele;
// }).map(function (ele) {
//     return ele * ele;
// })
// console.log(min)

// start filter
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let friends = ["Mostafa", "eSlam", "mohamed", "Sameh", "alaa", "ali", "amaar"];
// let fillterfriends = friends.filter(function (element, index, array) {
//     return element.includes("S");
// });
// console.log(fillterfriends)
// let fillternumber = numbers.filter(function (element, index, array) {
//     return element % 2 === 0;
// });
// console.log(fillternumber)
// end filter




// text filter
// let text = "i love foood code too playing much";
// let words = text.split(" ").filter(function (element, index, array) {
//     return element.length > 4;
// });
// console.log(words)

// let ingorenumbers = "Elz123er4o";
// let ing = ingorenumbers.split("").filter(function (ele) {
//     return isNaN(ele);
// }).join("").toUpperCase();
// console.log(ing)
// )


// text filter whis map
// let mix = "A13Bs27X";
// lgn = mix.split("").map(function (ele) {
//     return ele * ele;
// }).filter(function (ele) {
//     return !isNaN(ele);
// })
    
// console.log(lgn)
// console.log(typeof lgn)

// end text filter whis map

// start text for redyce
// let check = ["mostafa", "eslam", "mohamed", "sameh", "alaa", "ali", "amaar"];
// let add = check.reduce(function (acc, curent, index, array) {
//     console.log(`acc; ${acc}`)
//     console.log(`curent element; ${curent}`)
//     console.log( acc.length > curent.length  ? acc: curent)
//     console.log("#".repeat(10))
//     return acc.length > curent.length ? acc : curent;
// },)
// console.log(add)
// let check = ["E", "@", "@", "L", "Z", "@", "@", "E", "R" ];
// let add = check.reduce(function (acc, curent, index, array) {
//     console.log(`acc; ${acc}`)
//     console.log(`curent element; ${curent}`)
//     console.log(acc !== "@" && curent === "@" ? acc:acc+curent )
//     console.log("#".repeat(10))
//     return acc!=="@" && curent==="@"  ?  acc:acc+curent ;
// },)
// console.log(add)


// console.log("*".repeat(20))
// let add1 = check.filter(function (ele) {
//     return ele !== "@";
// }).reduce(function (acc, curent) {
//     return `${acc}${curent}`;
// })
// console.log(add1)

// end text for reduce

// let alllis = document.querySelectorAll("ul li");
// let alldiv = document.querySelectorAll(".content div");

// alllis.forEach(function (ele) {
//     ele.onclick = (function () {
//         alllis.forEach(function (ele) {
//             ele.classList.remove("active")
//         })
//         ele.classList.add("active");
        
//         alldiv.forEach(function (ele) {
//             ele.style.display="none"
            
//         })
//     });
// });

// let mystring="1,2,3,EE,l,z,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z"
// let x = mystring.split(",").reduce(function (ele) {
//     return   ele !== "number";
// })
// console.log(x)




// EX1
// start object
// let user = {
//     // properties
//     name: "mostafa",
//     age: 21,
//     jop: "web developer",
//     // methods
//     sayhello :function() {
//         console.log(`hello [${user.name}] you are [${user.age}] year old and you are [${user.jop}]`)
//     }
// };
// user.sayhello();

// EX2
// let mylet="contry"
// let user = {
//     // properties
//     name: "mostafa",
//     age: 21,
//     contry: "eagypt",
// }
// // methods
//     console.log (user[mylet])

// EX3


// let user = {
    // properties
//     name: "mostafa",
//     age: 21,
//     skills: ["html", "css", "js", "php"],
//     available: true,
//     addresses: {
//         KSA: "Riyadh",
//         Egypt: {
//             one: "Cairo",
//             two: "Elzeraa",
//         },
//     },
//     check: function () {
//         if (user.available === true) {
//             return "you are available"
//         } else {
//              return "you are not available"
//         }


//     }
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user.skills[2])
// console.log(user.skills.join(" || "))
// console.log(user.addresses.KSA)
// console.log(user.addresses.Egypt.one)
// console.log(user.addresses.Egypt.two)
// console.log(user.check())

// end object


// document.getElementById("cl").onclick=function () {
//     console.log(this)
// }


// let user = {
//     age: 30,
//     ageinday: function () {
//         return this.age * 2;
//     },
// };
// console.log(user.age)
// console.log(user.ageinday())
// console.log("#".repeat(50))

// let copyobj = Object.create(user);
// copyobj.age = 40;
// console.log(copyobj.age);
// console.log(copyobj.ageinday());



// let obj1 = {
//     prop1: 1,
//     mithod1: function () {
//         console.log(this.prop1)
//     },
// };
// let obj2 = {
//     prop2: 2,
//     mithod2: function () {
//         console.log(this.prop2)
//     },
// };
// let obj3 = {
//     prop3: 3,
//     mithod3: function () {
//         console.log(this.prop3)
//     },
// };



// start innerhtml $ textcontent
// let element = document.querySelector(".js");
// console.log(element.innerHTML);
// console.log(element.textContent);


// element.innerHTML = "text from <span>main.js</span> file";
// element.textContent = "text from <span>main.js</span> file";
// myimage=document.querySelector("img")

// document.images[0].src = "https://goolge.com";
// document.images[0].alt = "image";
// document.images[0].id = "img";
// document.images[0].title = "picture";
// document.images[0].id = "img";

// console.log(myimage.setAttribute ("id","mmm") );
// console.log(myimage.getAttribute ("id"));
// console.log(myimage.setAttribute ("src","mmm") );
 

// mylink = document.querySelector(".link");
// console.log(mylink.getAttribute("class"))
// console.log(mylink.setAttribute("class","link2"))
// end innerhtml $ textcontent


// console.log(document.getElementsByTagName("p")[0].attributes)
// let myp  = document.getElementsByTagName("p")[0];
// if (myp.hasAttribute("data-src")) {
//     if ((myp.getAttribute("data-src")) === "") {
//         myp.removeAttribute("data-src")
//     } else {
//         // console.log("not free")
//         myp.setAttribute("data-src", "new value")
//     }
    
// } else {
//     console.log(false)
// }



// if (document.getElementsByTagName("div")[0].hasAttributes()) {
// console.log("true")
// } else {
//     console.log("false")
// }


// // div
// let myelemente = document.createElement("div");
// let myelemente2 = document.createAttribute("data-src");
// let mytext = document.createTextNode("product one");
// let mycommet = document.createComment("this my div");

// myelemente.className = "peoduct";
// myelemente.setAttributeNode(myelemente2);
// myelemente.setAttribute("data-test", "testing");




// // span
// let myspan = document.createElement("span");
// let mytextspan = document.createTextNode("product info");
// let myattr=document.createAttribute("data-info");
// myspan.className = "info";
// myspan.setAttributeNode(myattr);


// // append mytextspan to myspan
// myspan.appendChild(mytextspan);

// // append commet to myelemente
// myelemente.appendChild(mycommet);

// // append myspan to myelemente
// document.body.appendChild(myspan);

// // append text to myelemente
// myelemente.appendChild(mytext);

// // append myelemente to bady
// document.body.appendChild(myelemente);





// for (let i = 0; i < 10; i++) {

//     // craete container
// let contaneer = document.createElement("div");

// // craete heading
// let myheading = document.createElement("h2");

// // create p
// let myp = document.createElement("p");
// // create image-div
// let image = document.createElement("div");
// image.className = "image";

// // create img
// let img = document.createElement("img");
// img.src = "./50752d55f8b60f2aa2923183dadbc135.png";

// // create myheadingtext
// let myheadingtext = document.createTextNode(`product title ${i+1}`);


// // create myptext
// let myptext= document.createTextNode("product info");

// // add class to container
// contaneer.className = "product";

// // add heading to container
// contaneer.appendChild(myheading);

// // add image to container
// contaneer.appendChild(image);

// // add img to image
// image.appendChild(img);

// // add myp to container
// contaneer.appendChild(myp);


// // add myheadingtext to myheading
// myheading.appendChild(myheadingtext);
// // add myptetxt to myp
// myp.appendChild(myptext);

// // add container to body
// document.body.appendChild(contaneer);
// }

// let element = document.getElementById("my-div");
// let create2 = document.createElement("p");
// let text = document.createTextNode("product info");
// create2.appendChild(text);
// element.appendChild(create2);

  
// element = document.onclick = function () {
//     create2.style.color = "red";
//     create2.style.transition = "0.5s";
//     // create2.style.= = ;

// }


// let sapn = document.querySelector(".two");
// console.log(sapn.nextSibling)
// console.log(sapn.nextElementSibling)




// let element = document.querySelector(".one");
// let p = document.getElementsByTagName("p")[0].cloneNode(true);
// let element1 = document.getElementById("my-div");

// element1.append(p);


// span = document.querySelector(".one").onclick = function () {
//     element.nextElementSibling.style.color = "red";
//     element.previousElementSibling.style = "color: green";
//     element.nextElementSibling.style.transition = "0.5s";
//     element.previousElementSibling.style.transition = "0.5s";
//     element.nextElementSibling.style.fontSize = "60px";
//     element.previousElementSibling.style.fontSize = "60px";


// }

// console.log(element.parentElement)
// console.log(element1.lastElementChild)

// console.log(element1.firstElementChild)

// let myp = document.querySelector("p");
// myp.style.cursor = "pointer";


// myp.onclick = one;
// myp.onclick = two;

// function one() {
//     console.log("one")
// }
// function two() {
    
//     console.log("two")
// }


// myp.addEventListener("click", function () {
// console.log("one by addEventListener")
// });

// myp.addEventListener("click", function () {
//    myp.style.color = "red";
//    myp.style.fontSize = "25px";
//     myp.style.transition = "0.5s";
//     myp.style.marginTop = "50px";
//     myp.style.marginLeft = "50px";
    
// });
// myp.addEventListener("click", two );


// myp.onclick = function () {
//     let newp = myp.cloneNode(true);
//     newp.className = "clone";
//     document.body.appendChild(newp);
// }

// document.addEventListener("click", function (e) {
//     if (e.target.className === "clone") {
//       console.log("clone");
//     }
// });

// myinput = document.querySelector("input[type='text']");
// myinput.addEventListener("focus", function () {
//     console.log("focus")
// })







// start navbar

    // create nav
    let nav = document.createElement("div");

    // add class name
    nav.className = "nav";

    // create logo
    let logo = document.createElement("div");

    // add class name
    logo.className = "logo";

    // create text
    let logotext = document.createTextNode("Mostafa");

    logo.appendChild(logotext);
    // create ul
    let ul = document.createElement("div");

    // add class name
    ul.className = "ul";
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    // add class name
    li1.className = "home";
    li2.className = "About";
    li3.className = "services";
    li4.className = "contact";

    // create text
    let li1text = document.createTextNode("Home");
    let li2text = document.createTextNode("About");
    let li3text = document.createTextNode("services");
    let li4text = document.createTextNode("contact");

    // append text to li
    li1.appendChild(li1text)
    li2.appendChild(li2text)
    li3.appendChild(li3text)
    li4.appendChild(li4text)

    // append li to ul 
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    // css by js file
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    nav.style.alignContent = "center";
    nav.style.backgroundColor = "white";
    nav.style.borderTop = "1px solid #ccc";
    nav.style.borderBottom = "1px solid #ccc";
    logo.style.fontWeight = "bold";
    logo.style.cursor = "pointer";
    logo.onclick=function () {
        logo.style.color = "#9afeff"
        logo.style.transition = "0.5s";
    }
    logo.style.color = "#43c6db";
    logo.style.letterSpacing = "0.1px";
    ul.style.width = "400px"
    ul.style.listStyle = "none";
    ul.style.display = "flex";
    ul.style.justifyContent = "space-around";
    ul.style.fontSize = "20px"
    ul.style.cursor = "pointer";

    // append element to nav
    nav.appendChild(logo);
    nav.appendChild(ul);
    document.body.appendChild(nav);
    // end navbar



// start container
let mydiv = document.createElement("div");
mydiv.className = "container";
  
for (let i = 1; i <= 15; i++) {
    let myp = document.createElement("p");
    let myp2 = document.createElement("p");
    let mytext = document.createTextNode("product");
    myp.appendChild(mytext);
    myp.prepend(myp2);
    myp2.prepend(i)
    mydiv.appendChild(myp);
    mydiv.style.backgroundColor = "#f5f5f5";
    mydiv.style.padding = "15px "
    mydiv.style.backgroundColor = "#eeeeee";
    mydiv.style.display = "grid";
    mydiv.style.gridTemplateColumns = "repeat(auto-fit,minmax(350px,1fr))";
    mydiv.style.gap = "20px";
    mydiv.style.alignItems = "center";
    mydiv.style.fontSize = "20px";
    myp.style.backgroundColor = "white";
    myp.style.height = "155px";
    myp.style.display = "flex";
    myp.style.flexDirection = "column";
    myp.style.justifyContent = "center";
    myp.style.alignItems = "center";
    myp.style.cursor = "pointer";
    myp.style.borderRadius = "20px"
    myp2.style.fontSize = "40px"
    myp2.style.margin = "0"
    myp2.style.fontweight = "bold"
    
        myp2.onclick = function () {
            let myp3 = i + 1
            myp2.append(myp3)
            myp2.innerHTML = myp3
        }

}

document.body.appendChild(mydiv);
    
// start footer
// create footer
let myfooter = document.createElement("div");
// add class name
myfooter.className = "footer";
// create text
let myfootertext = document.createTextNode("Mostafa_2025");
// append text to footer
myfooter.appendChild(myfootertext);
myfooter.style.textAlign = "center";
myfooter.style.backgroundColor = "#4ee2ec";
myfooter.style.color = "white";
document.body.appendChild(myfooter)
 // end footer





// function one() { 
//     console.log("hello")
// }
// setTimeout(one, 5000)



// setTimeout(function () { 
// console.log("hello")
// }, 2000)

// let count = setTimeout(saymag, 3000);
// function saymag() {
//     console.log("hello")
// }
// let but = document.querySelector("button");
// but.onclick = function () { 
//     clearTimeout(count)
// }







