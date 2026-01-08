// let name = ["mostafa" , " eslam " , "ahmed "];
// let name2=[" walla ", " walla", " walla"];
// all=name.concat(name2);
// console.log(all);
// console.log(all.join());

// let x = "mostafa";
// let y = "alla";
// console.log(x!==y);
// // if (x.length === y.length) {
// //     console.log("true");
// // } else {
// //     console.log("false");
// // }


// let ask_email = prompt("enter your email");
// let email = "mostafa@.com";
// ask_email.toLocaleLowerCase()
// switch (ask_email) {

//     case email:
//         document.write("Welcome to our site");
//         break
    
//     default:
//         document.write("wrong email");
// }


// let cars = ["BMW", "Mercedes",1, 2, 3 , "Audi", "Ferrari"];
// let model = ["A1", "A2", "A3", "A4"];
// for (let i = 0; i < cars.length; i++){
//     if(typeof cars[i] === "number"){
//         continue;
//     }

//     console.log(`--car: ${cars[i]}`);
    
//     for (let i = 0; i < model.length; i++){
        
//         console.log(`models:${model[i]}`);
//     }
//     if (cars[i] === "Ferrari") {

//         break;
//     }
// }


// let x = 0;
// do {
//     document.write(`<h1>hello world</h1>`);
//     x++
// }while(x < 10);


// let ask_name = prompt("enter your namwe");
// function Welcome(...num) {
//   let x = 0;
//   for (let i = 0; i < num.length; i++) {
//    x += num[i]
//   }
//   console.log(x);

// }Welcome(10,10);

// let car = {
//   name: "BMW",
//   model: "A1",
//   color: "black",
//   price: {
//     price1: 1000,
//     price2: 2000,
//   },
//    getname:function() {
//   return this.name;
//   }
// }
// console.log(car.getname());
// console.log( car);
// console.log(car.model="A2");
// console.log(car.color);
// console.log(car.price.price2);

// let user = {
// }
// user.name = "mostafa";
// user.hello = function heloo() {
//   return "hello world";
// }

// console.log(user.hello());


// let name = new String
// Number.name = "mostafa";
// console.log(name);



// let car2 = Object.create(car)
// car2.name = "Audi";
// console.log(car2.name);
// console.log(car2.getname());


let dollar = document.getElementById("dollar")
let egypt = document.getElementById("egypt")
clear=document.getElementById("clear")
let pound = 50;

dollar.onkeyup = function () {
  egypt.value = pound * dollar.value

}
egypt.onkeyup = function () {
  dollar.value =  egypt.value / pound

}
clear.onclick = function () {
  egypt.value = "";
  dollar.value = "";
}





// let After = document.getElementById("After");
// let Before = document.getElementById("Before");
// let inside = document.getElementById("inside");
// let content = document.getElementById("content");
// let container = document.getElementById("container");


// container.style.width="100%"
// container.style.height="50px"
// container.style.background="#eee"


// After.onclick = function () {
//   container.after(content)
// }
// Before.onclick = function () {
//   container.before(content)
// }
// inside.onclick = function () {
//   container.append(content)
// }


// let msg = document.getElementById("hello");

// msg.onclick = function(){
//   msg.classList.toggle("active");
// }




// let open = document.getElementById("open");
// let close = document.getElementById("close");
// let ul = document.getElementById("ul");


// open.onclick=function(){
//   ul.classList.toggle("disabled");
//   if (ul.classList.contains("disabled")) {
//     open.innerHTML="open";
//   }else{
//     open.innerHTML="close";
//   }
// }

// let name=document.getElementById("name");

// window.onload=function(){
//   name.focus();
// }


// let button = document.getElementById("but");
// console.log(button);
// window.onscroll=function(){
//   if (window.scrollY >= 400) {
//     button.style.display="block";
//   }else{
//     button.style.display="none";
//   }
//   button.onclick=function(){
//     window.scrollTo(0,0);
//   }
// }


// console.log(window.screen.width)
// console.log(window.screen.height)
// console.log(window.screen.availWidth)
// console.log(window.screen.availHeight)
// console.log(window.screen.colorDepth)
// console.log(window.screen.pixelDepth)

// setTimeout(function () {
//     // window.location.reload();
// }, 1000)
// let i = 0;
// let fun =setInterval(function () {
//     // window.location.reload();
//     // console.log("hello");
//     i+=1
//     console.log(i);
//     if (i === 10) {
//         clearInterval(fun);
//      }

// },1000)

// let but = document.getElementById("but");

// but.onclick=function(){

//   localStorage.setItem("age", but.value);

//   console.log(JSON.parse(localStorage.getItem("age")))

//   console.log(typeof JSON.parse(localStorage.getItem("age")))
// //   localStorage.removeItem("age");
// }


// function setColor(color) {
//     localStorage.setItem("color", color);
//     document.body.style.backgroundColor = color;
//     document.body.style.transition = "0.5s";
    
// }
// if(localStorage.length > 0) {
//     document.body.style.backgroundColor = localStorage.getItem("color");
// }
