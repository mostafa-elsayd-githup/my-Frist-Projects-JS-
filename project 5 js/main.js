let gameNmae = "guess the word";
document.title = gameNmae;
document.querySelector("h1").innerHTML = gameNmae;
document.querySelector("footer").innerHTML = `${gameNmae} -game created by mostafa `;

// setting game options
let numberoftries = 6;
let numberoflitters = 6;
let currenttry = 1;

function getRandomWord() {
    const inputscontainer = document.querySelector(".inputs");
    
    for (let i = 1; i <= numberoflitters; i++) {
        const trydiv = document.createElement("div");
        trydiv.classList.add(`try-${i}`);
        trydiv.innerHTML = `<span>try ${i}</span>`

        if (i !== 1) trydiv.classList.add("disabled");
        // create inputs 
        for (let j = 1; j <= numberoflitters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute("maxlength", "1");
            trydiv.appendChild(input);
        }


        inputscontainer.appendChild(trydiv);
    }
    inputscontainer.children[0].children[1].focus();
    
    // disable inputs
    let inputdisableddiv = document.querySelectorAll("disabled_input input")

window.onload = function () { 
     getRandomWord()
}