// selectors all elements
let allSpan = document.querySelectorAll(".button span");
let results = document.querySelector(".results > span");
let input = document.getElementById("the-input");

allSpan.forEach(span => {

    // check items in local storage
    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("check")) {

            check();
            
        };
    });

    // add items in local storage
    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("add")) {

            add();
            
        };
    });

    // delete items in local storage
    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("delete")) {

            delete_item();
            
        };
});

    // show items in local storage
    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("show")) {

            show();
            
        };
    });
});


// check if input is empty
function show_massage() {

        results.innerHTML = "input cant be empty";
   
};

// check if item is in local storage
function check() {

    if (input.value !== "") {
        
        if (localStorage.getItem(input.value)) {

            results.innerHTML = `found locale storage item the name <span>${input.value}</span>`;
            
        
        } else {
            results.innerHTML = `no locale storage item the name <span> ${input.value}</span>`;
            
        };

    }else {

            show_massage()
            
    };
};


// add item to local storage
function add() {
input.value = input.value.trim();
    if (input.value !== "") {
        localStorage.setItem(input.value,"task");
        results.innerHTML = ` locale storage item <span>${input.value}</span> added`;
        input.value = "";
    }else {

        show_massage()
        
    };

};

// delete item from local storage
function delete_item() {
    if (input.value !== "") {

        if (localStorage.getItem(input.value)) {

            localStorage.removeItem(input.value);
            results.innerHTML = `locale storage item <span>${input.value}</span> deleted`;
            input.value = "";

        } else {
            results.innerHTML = `no locale storage item the name <span> ${input.value}</span>`;
            
        };
    };

};

// show items in local storage
function show() {
    
    if (localStorage.length) {
        results.innerHTML = `found items in local storage <span>${localStorage.length} </span>items`;
        let items = Object.keys(localStorage).map((item) => `<span>${item}</span>`).join(" , ");
        console.log(Object.keys(localStorage))
        results.innerHTML += `<br> <span>${items}</span>`;
    } else {
      results.innerHTML = `local storage is empty`;
      
  }


    
};

