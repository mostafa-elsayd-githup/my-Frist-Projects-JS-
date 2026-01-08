// let chosen = 2;
// let myfriends = [
//     { title: "Youssef", age: 20, available: true, skills: ["HTML", "CSS"] },
//     { title: "Ahmed", age: 22, available: false, skills: ["JavaScript", "React"] },
//     { title: "Mahmoud", age: 25, available: true, skills: ["Python", "Django"] },
// ];


// const { title, age, available, skills } = myfriends[chosen - 1];


// if (chosen === 1) {
//     console.log(myfriends[chosen - 1])
//     console.log(`Name: ${title}`)
//     console.log(` Age: ${age}`)
//    if (available === true) {
//         console.log("Available")
//     } else {
//         console.log("Not Available")
//     }
//     console.log(` Skills: ${skills[1]}`)

// }else if (chosen === 2) {
//     console.log(myfriends[chosen - 1])
//     console.log(`Name: ${title}`)
//     console.log(` Age: ${age}`)
//        if (available === true) {
//         console.log("Available")
//     } else {
//         console.log("Not Available")
//     }
//     console.log(` Skills: ${skills[1]}`)
// }else if (chosen === 3) {
//     console.log(myfriends[chosen - 1])
//        console.log(myfriends[chosen - 1])
//     console.log(`Name: ${title}`)
//     console.log(` Age: ${age}`)
//    if (available === true) {
//         console.log("Available")
//     } else {
//         console.log("Not Available")
//     }
//     console.log(` Skills: ${skills[1]}`)
// }else {
//     console.log("Invalid choice")
// }


// ####################################################################################

// // lesson set data type
// // new set
// let data = [1, 1, 1, 2, 3];
// let mydata = new Set([1, 1, 1, 2, 3]);
// console.log(data)
// console.log(mydata)
// console.log(new Set(data).size);


// mydata.delete(3);
// console.log(mydata)
// mydata.clear();
// console.log(new Set(mydata) );


//  set VS weakset
// set

// type of data by set
// let myset = new Set([1, 1, 1, 2, 3, "A", "A", "A"]);
// console.log(myset)

// // type of data by weakset
// let myweakset = new WeakSet([{ A:1, b:2 }]);
// console.log(myweakset)

// keys +  value  by set     done*
// let iterator = myset.keys();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log("#".repeat(10))

// keys +  value  by weakset  undo*
// let iterator = myweakset.keys();    //error

// foreach
// myset.forEach((el) => console.log(el));
// myweakset.forEach((el) => console.log(el)); //error whist is weakset


// // map VS object
// // object
// let myobject = {
//     10: "number",
//     "10": "string",
// };

// console.log(myobject) //undefined
// console.log(myobject)
// // new map
// let mymap = new Map();
// mymap.set(10, "number");
// mymap.set("10", "string");

// console.log(mymap)
// console.log(mymap.size)
// console.log(mymap.get(10))
// console.log(mymap.get("10"))
// end



// ####################################################################################



// start
// map data methods
// set
//get
//add
// clear();
//has
// let mymap = new Map();
// mymap.set(10, "number");
// mymap.set("10", "string");


// console.log(mymap.get(10));
// console.log(mymap.get("10"))
// console.log(mymap.size)

// let mymap1 = new Map([
//     [10, "number"],
//     ["10", "string"],
//     [false, "boolean"],
// ]);
// console.log("#".repeat(40));
// console.log(mymap1.delete(10));
// console.log(mymap1.get(10));
// console.log(mymap1.has("10"));
// console.log(mymap1.get("10"));
// console.log(mymap1.get(false));

// console.log("#".repeat(40));
// console.log(mymap1.delete(10));
// console.log(mymap1.get(10));
// console.log(mymap1.get("10"));
// console.log(mymap1.get(false));

// console.log("#".repeat(40));
// console.log(mymap1.clear());
// console.log(mymap1.get(10));
// console.log(mymap1.get("10"));
// console.log(mymap1.get(false));
// console.log(mymap1.size);
// end



// ####################################################################################


// // map Vs  new Map

// let map = { thename: "mostafa" };

// let newmap = new Map();

// newmap.set("thename", "object");

// console.log(newmap)

// console.log("#".repeat(40));

// let mapweak = { thename: "mostafa" };

// let newweakmap = new WeakMap();

// newweakmap.set( mapweak, "object");

// console.log(newweakmap)
// // end


// ####################################################################################

// start
// Array methods


// console.log(Array.from("123",  (e) => +e + +e))



// let myarray = [1, 1, 1, 2, 3];
  
// myset=new Set(myarray)
// console.log(myset)
// end



// ####################################################################################


// // start Array methods
// // copyWithin
// let myarrray = [1, 2, 3, 4, 5,"a", "b"];
// // myarrray.copyWithin(1,-2)  //[1,"a", "b", 4, 5,"a", "b"]
// // myarrray.copyWithin(1,-2,-1)  //[1,"a", 3, 4, 5,"a", "b"]
// // myarrray.copyWithin(3,0,4)  //[1, 2, 3, 1, 2, 3, 4]
// myarrray.copyWithin(4,-1)   //[1, 2, 3, 4, "b","a", "b"]

// console.log(myarrray)


// ####################################################################################




// // (
// // start Array methods
// // Array.some
// let num = [1, 2, 3, 4, 5, 6, 7,8,9,10];
// let click = num.some(function (e) {
    
//     return e > 5;
// });



// // Arrow function
// let click2 = num.some( (e) => e > 5);

// console.log(click)



// // let click3 = num.some(function (e) {
    
// //     return num.includes(5);
// // });



// let rang = {
//     min: 10,
//     max: 20,
// }

// let click4 = num.some(function (e) {
//     return e >=this.min && e <= this.max
// } , rang)

// console.log(click4)
// // )

// ####################################################################################


// // array methods
// // array.every

// const locations = {
//     10: "place 1",
//     20: "place 2",
//     30: "place 3",
//     40: "place 4",
// };
// mainlocation = 15; // location
// let array = Object.keys(locations);

// let arraynumber = array.map((e) => +e);
// console.log(arraynumber)

// let click5 = arraynumber.every(function (e) {
//     return e > mainlocation;
// },mainlocation);
// console.log(click5)
// // end

// ####################################################################################

// extract element by [...element] استخراج العناصر


// let num = [1, 2, 3, 4, 5, 6, 7,8,9,10];

// console.log([...num])

// concat array
// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let allnum = [...num1, ...num2]

// let allnumtest = [...num1] + [...num2]
// console.log(allnum)
// console.log(allnumtest)



// push inside array
// let myfriends = ["mostafa", "ahmed", "mahmoud"];
// let newfriends = ["eslam", "youssef"];
// let allfrinds=[...myfriends, ...newfriends]
// console.log(allfrinds)


// use with math object
// let mynum = [100, 20, 80, 60, 54];
// console.log(Math.max(...mynum))



// // marge object
// let obj1 = {
//  a: 1,
//  b: 2
// };
// let obj2 = {
//  c: 3,
//  d: 4
// };
// let newobj = { ...obj1, ...obj2 };
// console.log(newobj)

// ####################################################################################

// challenges

// let num1 = [10, 30, 10, 20]
// let num2 = [30, 20, 10]


// let newnum = Math.max(...num1, ...num2)* (num1.length + num2.length)
// console.log(newnum)


// let allnum = [...num1, ...num2]  //error
// newnum = new Set(allnum)
// newnum.delete(30)
// newnum=function (e) {
//     return e > 10
// }


// ####################################################################################

// regular expression

// let str = "10 20 100 1000 5000";
// let numbetr = str.split(" ").map(e => +e)
// console.log(numbetr)



// let str2 = "os1 os12 os123 os123os"
// let newstr = str2.split(" ")

// let newstr2= newstr.filter((e) => e ==="os1")
// console.log(newstr2)



// let str2 = "os1 os12 os123 os123os"
// let newstr = str2.split(" ")

// let newstr2= newstr.filter((e) => e !=="os123os")
// console.log(newstr2)


// let str = "Hello Elzero Web School i love elzero";

// let match = /elzero/ig;
// let newstr = str.match(match);
// console.log(newstr)


// // regular expression

// // range part1
// let tld = " com Net org info code Io";

// // (X|Y) x or y
// let tdre = /(com|org|info|io)/ig;
// console.log(tld.match(tdre))
// console.log("#".repeat(50))
// // [0-9]
// let num = "02358745889";
// let number = /[0-9]/g;
// console.log(num.match(number));
// console.log("#".repeat(50))

// // [^0-7]
// let notnum = "02358745889";
// let notnumber = /[^0-7]/g;
// console.log(notnum.match(notnumber))
// console.log("#".repeat(50))

// // [^0-9]
// let specialnum = "02*3!5&87$58@#8#9";
// let specialnumberRE = /[^0-9]/g;
// console.log(specialnum.match(specialnumberRE))

// console.log("#".repeat(50))

// let practiice = "os1 os1os os2 os8 os8os";
// let practiiceRE = /os[5-9]os/g;
// console.log(practiice.match(practiiceRE))

// console.log("#".repeat(50))

// // renge part2
// let mystr = "AabBcf#!CyutSFDJ%gv#hkj*c#"
// let atoz = /[a-z]/g;
// let notatoz = /[^a-z]/g;
// let AtoZ = /[A-Z]/g;
// let notAtoZ = /[^A-Z]/g;
// let eandrandj = /[erj]/ig;
// let noteandrandj = /[^erj]/g;
// let atozAtoZ = /[a-zA-Z]/g;
// // (
// let notatozAtoZ = /[^a-zA-Z]/g;
// let  special = /[^a-z^A-Z^0-9]/g;
// // )
// console.log(mystr.match(atoz))

// console.log("#".repeat(50))

// console.log(mystr.match(notatoz))

// console.log("#".repeat(50))

// console.log(mystr.match(AtoZ))

// console.log("#".repeat(50))

// console.log(mystr.match(notAtoZ))

// console.log("#".repeat(50))

// console.log(mystr.match(eandrandj))

// console.log("#".repeat(50))

// console.log(mystr.match(noteandrandj))

// console.log("#".repeat(50))

// console.log(mystr.match(atozAtoZ))

// console.log("#".repeat(50))

// console.log(mystr.match(notatozAtoZ))

// console.log("#".repeat(50))

// console.log(mystr.match(special))
// // end regular expression range

// // start regular expression characters
// // part1
// let email = "o@@@...com o@g.com o@g.net A@y.com o-g.com o@s.org 1@1.com";
// let valid =/\w@\w(.com|.net)/g;
// let dot = /./g;
// let word = /\w/g;
// let WORD = /\W/g;
// let numb = /\d/g;
// let nonenumb = /\D/g;
// let space = /\s/g;
// let notspace = /\S/g;
// console.log(email.match(dot))

// console.log("#".repeat(50))

// console.log(email.match(word))

// console.log("#".repeat(50))

// console.log(email.match(WORD))

// console.log("#".repeat(50))

// console.log(email.match(numb))

// console.log("#".repeat(50))

// console.log(email.match(nonenumb))

// console.log("#".repeat(50))

// console.log(email.match(space))

// console.log("#".repeat(50))

// console.log(email.match(notspace))

// console.log("#".repeat(50))

// console.log(email.match(valid))


// // regular expression characters
// // part2

// let nams = "sayed 1spam 2spam 3spam spam4 spam5 osama ahmed Aspamo mostafaelsayd809@.com mostafaelsayd809@.net";
// let er = /\wspam\b/ig;
// let Ber = /\wspam\B/ig;
// let g_er = /(\bspam|spam\b)/ig;
// let spam_er = /\wspam\w/ig;
// let email_er = /\w+@(.com|.net)/ig;

// console.log(nams.match(er))

// console.log("#".repeat(50))

// console.log(nams.match(Ber))

// console.log("#".repeat(50))

// console.log(nams.match(g_er))

// console.log("#".repeat(50))

// console.log(nams.match(spam_er))

// console.log("#".repeat(50))

// console.log(nams.match(email_er))

// console.log("#".repeat(50))

// console.log(email_er.test(nams))
// // console.log(email_er.test("mostafaelsayd809@.com"))
// // end regular expression characters

// // start regular expression quantifiers
// // part1
// let email1 = "o@nn.sa osam@gamil.com elzero@gamil.org osama@gamil.net";
// // n+

// let mail = /\w+@\w+.(com|net)/g;
// console.log(email1.match(mail))
// console.log("#".repeat(50))

// // n*
// let numbe = "0110 10 150 05120 0560 350 00";
// let num_er=/0\d+[0-5]0|(00)/g;
// // let num_er=/0\d*0/g;
// console.log(numbe.match(num_er))
// console.log("#".repeat(50))

// // n?
// let url = "https://google.com http://www.wibside.net web.com";
// // let urlre = /https?:\/\/(www.|\w+)(\w*).(com|net)/g;
// let urlre = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(url.match(urlre))

// console.log("#".repeat(50))



// regular expression quantifiers
// part2

// let serials = "S100S S3000S S50000s S950000S"

// // n{X} =>number of

// console.log(serials.match(/s\d{3}s/ig)); //s[three numbers]s

// console.log("#".repeat(50))

// console.log(serials.match(/s\d{4,5}s/ig)); //s[four or five numbers]s

// console.log("#".repeat(50))

// console.log(serials.match(/s\d{4,}s/ig)); //s[AT least four ]s


// regular expression quantifiers
// part3

// let mystr = "we love programing";
// let names="10osamaZ ZahmedZ 3Mohammed 4moustafaZ 5GamalZ"

// // $=>end with somethihg
// console.log(/ing$/ig.test(mystr))

// console.log("#".repeat(50))

// console.log(/Z$/ig.test(names))

// console.log("#".repeat(50))

// // ^ =>start with somethihg
// console.log(/^w/ig.test(mystr))

// console.log("#".repeat(50))

// console.log(/^\w/ig.test(names))

// console.log("#".repeat(50))

// // ?=>followed by something

// console.log(names.match(/\d\w{8}(?=Z)/ig))

// // ?! =>not followed by something
// console.log(names.match(/\d\w{8}(?!Z)/ig))
// // end regular expression quantifiers

// // start regular expression replace replaceAll
// console.log(mystr.replace("o","i"))
// console.log(mystr.replaceAll("o","i"))
// end regular expression replace replaceAll


// start regular expression form validation

// let inp = document.getElementById("register").onsubmit = function() {
// let phoneinput = document.getElementById("phone").value;
// let phone_er = /\(\d{4}\)\s\d{3}-\d{4}/;
// let staet = phone_er.test(phoneinput);
// if (staet === false) {
//     return false
// }
// return true
// }

// regular expression
// // challenge
// let URL1="elzero.org";
// let URL2 = "https://elzero.org";
// let URL3 = "https://www.elzero.org";
// let URL4 = "https://www.elzero.org";
// let URL5 = "http://www.elzero.org:88/articles.php?id=100&cat=topices";

// let re=/\w+(\:\/\/|.\w)(\w+|www).\w+(.\w+|org)(\w+|:\d{0,9}\/\w+)(.\w*|php)(.\w*)?(.\w*)?(|\?id=100&cat=topices)/ig;

// console.log(URL1.match(re))
// console.log(URL2.match(re))
// console.log(URL3.match(re))
// console.log(URL4.match(re))
// console.log(URL5.match(re))
// end regular expression




// start OOP
// constructor

// class User {
//    static count = 0;
//     constructor(id, name, salary) {
//         this.i = id ;
//         this.n = name || "unknown";
//         this.s = salary <6000 ? salary+500: salary;
//         User.count++;
//     };
//     staticsayhello() {
//         return `hello ${this.n} your salary is ${this.s}`
//     }
//     static count() {
//         return `the number of users is ${User.count}`
//     }
// }
// // inheritance
// class admin extends User {
//     constructor(id, name, salary,permissions) {
//         super(205, "mostafa", 5000);
//         this.p = permissions
//     }
//     staticsayhello() {
//         return `hello ${this.n} your salary is ${this.s}`
//     }
// }
// let admin1 = new admin(100, 'mostafa', 5000,2)
// console.log(admin1.i)
// console.log(admin1.n)
// console.log(admin1.s)
// console.log(admin1.p)
// let userone = new User( 100, "mostafa", 5000);
// console.log(userone.i);
// console.log(userone.n)
// console.log(userone.s);
// console.log(User.count);


// console.log("#".repeat(40))

// let usertwo = new User(215, "eslam", 4000);
// console.log(usertwo.i);
// console.log(usertwo.n);
// console.log(usertwo.s);
// console.log(User.count);


// console.log("#".repeat(40))

// let userthree = new User(344, "walaa", 7000);
// console.log(userthree.i);
// console.log(userthree.n)
// console.log(userthree.s);
// console.log(User.count);


// // private
// class User {
//     static count = 0;
//     // private peroperty
//     #e;
//     constructor(id, name, salary, esalary) {
//         this.i = id ;
//         this.n = name || "unknown";
//         this.s = salary <6000 ? salary+500: salary;
//         this.#e = esalary
//         this.sayhello = this.#msayhello
//         User.count++;
//     };
//     staticsayhello() {
//         return `hello ${this.n} your salary is [${this.s}] `
//     }
//     static count() {
//         return `the number of users is ${User.count}`
//     }
//     getsalary() {
//         return parseInt(this.#e)
//     }
//     // private method
//     #msayhello() {
//         return `hello ${this.n} your salary is [${this.s}]`
//     };

// }
// let use = new User(200, "[ mostafa ]", 6000, "7000");;
// console.log(use.i);
// console.log(use.n);
// console.log(use.s);
// console.log(use.getsalary());
// console.log(User.count);
// console.log(use.sayhello());

// console.log("#".repeat(40))

// // class User1 extends User {

// //     constructor(id, name, salary) {
// //       super(200, "[ esalm ]", 7000, "8000");
// //     };
// // }
// // let user1 = new User1(100, "[ esalm ]", 6000);
// // console.log(user1.i);
// // console.log(user1.n);
// // console.log(user1.s);
// // console.log(user1.getsalary());
// // console.log(User1.count);
// // console.log(user1.sayhello());
// console.log(User)
// console.log(use)
// User.prototype.saywelcome = function () {
//     return `welcome ${this.n} your salary is [${this.s}]`
// };
// Object.prototype.love = "i love js";
// String.prototype.adddotafterandbefore = function () {
//     return `.${this}.`
// }
// let myString = "i love js";
// console.log(myString.adddotafterandbefore());




// // object meta data and descriptor leasone
// // - defineprpoperty
// let myobject = {
//     a: 1,
//     b: 2,

// }
// Object.defineProperty(myobject, "c", {
//     writable: false,  // if [writable=false] you cant ubdata value  |||||  // if [writable=true] you can ubdata value
//     enumerable: true,  //if [ enumerable: false] you cant use "c" property in loop
//     configurable: false, //if [ configurable: false] you cant delete prpperty and cant redefine.
//     value:3
// })
// // // redeifine
// // Object.defineProperty(myobject, "c", {
// //     writable: false,  // if [writable=false] you cant ubdata value  |||||  // if [writable=true] you can ubdata value
// //     enumerable: true,  //if [ enumerable: false] you cant use "c" property in loop
// //     configurable: true, //if [ configurable: false] you cant delete prpperty
// //     value: 100
// // });
// // console.log(delete myobject.c)
// myobject.c = 7;
// console.log(myobject)
// for (let prop in myobject) {
//     console.log(prop, myobject[prop])
// }


// // object meta data and descriptor leasone
// // - defineprpopertys
// let myobject2 = {
//     d: 1,
//     f: 2,
// }
// Object.defineProperties(myobject2, {
//     c: {
//         writable: false,  // if [writable=false] you cant ubdata value  |||||  // if [writable=true] you can ubdata value
//         enumerable: true,  //if [ enumerable: false] you cant use "c" property in loop
//         configurable: false, //if [ configurable: false] you cant delete prpperty and cant redefine.
//         value: 3
//     },
//     g: {
//         configurable: true,
//         value: 3,
//     },

//     k: {
//         configurable: true,
//         value: 4,
//     },

//     m: {
//         configurable: true,
//         value: 5,
//     },
    
// });
// console.log(myobject2)
// console.log(Object.getOwnPropertyDescriptor(myobject2, "k"))
// console.log(Object.getOwnPropertyDescriptors(myobject2))




// // data and time leasone

// let datanow  = new Date();
// console.log(datanow)
// console.log(`Time Now ${Date.now()}`) // miliseconds

// seconds = Date.now() / 1000; // number of seconds
// console.log(`Seconds ${seconds}`)


// let minutes = seconds / 60; //number of minutes
// console.log(` Minutes ${minutes}`)

// let hours = minutes / 60; //number of hours
// console.log(` Hours ${hours}`)

// let days = hours / 24; //number of days
// console.log(` Days ${days}`)

// // let months = days / 30; //number of months
// // console.log(months)

// let years = days / 360; //number of years
// console.log(` Years ${years}`)




// // data and time leasone

// // let data = new Date();
// // let birthday = new Date("nov, 15, 2003");
// // let now = data - birthday;


// let data = new Date();
// console.log(`miliseconds ${data.getTime()}`); // .getTime() => time in miliseconds

// console.log(`day ${data.getDate()}`); // .getDate() => day in month

// console.log(`year ${ data.getFullYear()}`); // .getfullYear() => year

// console.log(`month ${data.getMonth()}`); // .getMonth() => month in year by index

// console.log(`day in week ${data.getDay()}`); // .getDay() => day in week by index

// console.log(` hours in day ${data.getHours()}`); // .getHours() => hours in day

// console.log(`minutes in hour ${data.getMinutes()}`); // .getMinutes() => minutes in hour

// console.log(`seconds in minute ${data.getSeconds()}`); // .getSeconds() => seconds in minute

// console.log(` milliseconds in second ${data.getMilliseconds()}`); // .getMilliseconds() => milliseconds in second

// end get data and time




// start set date and time

// datenow = new Date();
// console.log(datenow)

// console.log("#".repeat(80))

// datenow.setTime(0);
// console.log(datenow)

// console.log("#".repeat(80))

// datenow.setTime(10000);
// console.log(datenow)

// console.log("#".repeat(80))

// datenow.setDate(1); //=> change day
// console.log(datenow)

// console.log("#".repeat(80))

// datenow.setFullYear(2030); //=> change year
// console.log(datenow)

// console.log("#".repeat(80))

// datenow.setMonth(0,11); //=> change month and (day => [optional])
// console.log(datenow)
// end set date and time







// // start formating date and time

// let date1 = new Date();
// console.log(date1)

// let date2 = new Date();
// console.log(date2)

// let data3= new Date();
// console.log(data3)

// let date4 = new Date();
// console.log(date4)

// let date5 = new Date();
// console.log(date5)

// let date6 = new Date();
// console.log(date6)

// let date7 = new Date();
// console.log(date7)

// let date8 = new Date();
// console.log(date8)

// let date9 = new Date();
// console.log(date9)
// //end formating date and time




// // tracking operation time
// let start = new Date();
// //console.log(start)
// // for (let i = 0; i <=10000; i++) {
// //     let div = document.createElement("div");
// //     div.appendChild(document.createTextNode(i))
// //     document.body.appendChild(div)
// // }

// let end = new Date();
// // console.log(end)

// let time = end - start;
// console.log(`Time ${time}`)







// // start generator function

// function* mygenerator() {
//     yield 1;
//     // alert("hello")
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     yield 6;
//     yield 7;
//     yield 8;
//     yield 9;
//     yield 10;
// }
// let mygenerator1 = mygenerator();
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// // console.log(mygenerator1.next());
// for (let ivalue of mygenerator()) {

//     console.log(mygenerator1.next());
// }
// console.log(mygenerator1.next());
// // end generator function



// start generator function with yield*
// function* generatornunber() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// function* generatorlitter() {
//     yield "A";
//     yield "B";
//     yield "C";
// }

// function* generatorall() {
//     yield* generatornunber();
//     yield* generatorlitter();
//     yield* [4,5,6,];
// }
// let generator= generatorall();
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// // console.log(generator.return()) => stop generator
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())


// // generator infinite numbers*
// function* generatornumber() {
//     let index = 0;
//     while (true) {
//         yield index ++;
//     }
// }
// let generator = generatornumber();
// console.log(generator.next())
// // end generator function with yield*



// modules import and export
// // simple export
// let a = 10;
// let arr = [1, 2, 3, 4];
// function sayhello() {
//     return "hello";          //to use method => write before Export
// };
//

// export { a, arr, sayhello }
// //end simple export

// // start JSon
// const myjsonobjectfromserver = `{ "username": "mostafa", "age": 21 }`;
// console.log(typeof myjsonobjectfromserver)
// console.log(myjsonobjectfromserver)

// console.log("#".repeat(50))
// const myjsobcect = JSON.parse(myjsonobjectfromserver);
// console.log(typeof myjsobcect)
// console.log(myjsobcect)

// console.log("#".repeat(50))
// myjsobcect.username = "walaa";
// myjsobcect.age = 19;

// const myjsontoserver= JSON.stringify(myjsobcect);
// console.log(typeof myjsontoserver)
// console.log(myjsontoserver)
// // end JSon


// // start call stack

// setTimeout(() => {
//   console.log("hello")
// }, 0);

// function one() {
//     console.log("one")
// };

// function two() {     //last in first out
//     one()
//     console.log("two")
// };

// function three() {
//     two()
//     console.log("three")
// };
// three()

// // end call stack

// //start Event Loop and callback Queue

// console.log("one")
// setTimeout(() => {
//     console.log("three") // =>   callback queue [frist in first out]
// }, 0);
// setTimeout(() => {
//     console.log("four")
// }, 0);
// console.log("two")


// // two example
// setTimeout(() => {
//     console.log(myvar)
// }, 0);
// let myvar = 100;
//  myvar+=100

//// end Event Loop and callback Queue

// // start AJAX

// let raq = new XMLHttpRequest();
// raq.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// raq.send();
// console.log(raq)

// raq.onreadystatechange = function () {
//     // console.log(raq.readyState)
//     // console.log(raq.status)
//     if (this.readyState == 4 && this.status == 200) {
//         // console.log(raq.responseText)
//         let jsdata = JSON.parse(raq.responseText);
//         console.log(jsdata)
//         for (let i = 0; i < jsdata.length; i++) {
//             let div = document.createElement("div");
//             let mytitile = document.createTextNode(jsdata[i].title);
//             div.appendChild(mytitile)
//             document.body.appendChild(div)
//             // console.log("h?")
//         }
//     }
// }

//// anthor away use fetch
// fetch("https://api.github.com/users/mostafa/repos").then((res) => {
//     // console.log()
//     let mydata = res.json()
//     console.log(mydata)
//     return mydata
// }).then((data) => {
//     data.length = 10
//     return data
    
// }).then((data) => {
//     data.length = 2
//     console.log(data[0].name)
// })

// // end AJAX


// start callback hell || pyramid of doom

// setTimeout(() => {
//     console.log("one")
//     setTimeout(() => {
//         console.log("two")
//         setTimeout(() => {
//             console.log("three")
//             setTimeout(() => {
//                 console.log("four")
//                 setTimeout(() => {
//                     console.log("five")
//                     setTimeout(() => {
//                         console.log("six")
//                         setTimeout(() => {
//                             console.log("seven")
//                             setTimeout(() => {
//                                 console.log("eight")
//                                 setTimeout(() => {
//                                     console.log("nine")
//                                     setTimeout(() => {
//                                         console.log("ten")
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// })

// //end callback hell || pyramid of doom

// // start promises

// let mypromise = new Promise((resolve, reject) => {
//     let connect = true;
//     if (connect) {
//         resolve("connected")
//     } else {
//         reject("not connected")
//     }
// })

// console.log(mypromise)

// mypromise.then(
//     (result) => console.log(result),
//     (error) => console.log(error)
// )



// let mypromise = new Promise((resolve, reject) => {
//     let employess = ["mostafa","ahmed", "ali", "mohammed"];
//     if (employess.length===4) {
//         resolve(employess)
//     } else {
//         reject(Error("number of employess is not 4"))
//     }
// })
// console.log(mypromise)

// mypromise.then(
//     (resolve) => {
//         resolve.length=2
//        return resolve
//     },
// )

// mypromise.then(
//     (resolve) => {
//         resolve.length =1;
//         return resolve
//     },
// )

// mypromise.then(
//     (resolve) => {
//       console.log(resolve)
//     },
// )




// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         document.getElementById("title1").style.visibility = "visible"
//         resolve()
//     },1000)
// }).then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("title2").style.visibility = "visible"
//             resolve()
//         },1000)
//     })
// }).then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("title3").style.visibility = "visible"
//             resolve()
//         },1000)
//     })
// }).then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("title4").style.visibility = "visible"
//             resolve()
//         },1000)
//     })
// })
// // end promises

// // start promise all - all settled- race

// let mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("one")
//     }, 5000);
// });
// let mypromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("two")
//     }, 1000);
// });
// let mypromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("three")
//         reject("error")
//     }, 5000);
// });


// // all
// // Promise.all([mypromise, mypromise2, mypromise3]).then (
// // (all) => {
// //     console.log(all)
// // }
// // )



// // allsettled
// // Promise.allSettled([mypromise, mypromise2, mypromise3]).then (
//     // (all) => {
//         //     console.log(all)
//         // }
// // )
        

// // race
// Promise.race([mypromise, mypromise2, mypromise3]).then(
//     (all) => {
//         console.log(all)
//     }
// );

// let getdata = function () {
//     return new Promise((res, rej) => {
//         let user = ["mostafa"]
//         if (user.length > 0) {
//             res("user found")
//         } else {
//             rej("user not found")
//         }
//     })
// };
// getdata().then(
//     (rse)=> console.log(rse),
//     (rej) => console.log(rej)
// )


//// anaother way طريقه اخرى ترجه promies بشكل اسهل
// let getdata = function () {
//     let user = []

//     if (user.length > 0) {
//         return Promise.resolve("user found")
//     } else {
//         return Promise.reject("user not found")

//     };

// };
// getdata().then(
//     (rse)=> console.log(rse),
//     (rej) => console.log(rej)
// )


//// async await ازى ترجع promies بطريقه clean
// let getdata = async function () {
//     let user = []

//     if (user.length > 0) {
//         return ("user found")
//     } else {
//        throw new Error("user not found");
       

//     };

// };
// console.log(getdata())
// getdata().then(
//     (rse)=> console.log(rse),
//     (rej) => console.log(rej)
// )

// //// await
// let mydata = new Promise(async(res, rej) => {
//     setTimeout(() => {
//         res("user found")
//         // rej(Error("user not found"))
//     }, 3000);
// });


// console.log("before function")
// await mydata.then(
//     (res) => console.log(res)
//     // console.log(await mydata.catch((err) => console.log(err)))
// )
// console.log("after function")
// //end await



// try, cacth, finally

// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("user found")
//         reject(Error("user not found"))
//     }, 3000);
// });
// async function myfunction() {
    
//     console.log("before function")
//     try {
//         console.log(await mypromise)
//     } catch (err) {

//     console.log(err)
    
//     } finally {
//         console.log("after function")
        
//     }
    
// }
// myfunction()



// https://api.github.com/users/mostafa/repos


// async function myfunction() {
    
//     console.log("before fetch")
//     try {
//         // console.log(await mypromise)
//         let mydata =await fetch("https://api.github.com/users/mostafa/repos")
//         console.log((await mydata.json())) //get data fast
        
//     } catch (err) {

//     console.log(err)
    
//     } finally {
//         console.log("after fetch")
        
//     }
    
// }
// myfunction()

