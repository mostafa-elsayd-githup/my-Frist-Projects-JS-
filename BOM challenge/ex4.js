



let msg = document.querySelector("div .input")
let btn = document.querySelector("div .add")
let output = document.querySelector(".container .task")

btn.onclick = function () { 

    if (msg.value !== "") {
        
   
        let button = document.createElement("button") //create button
        let p = document.createElement("p") //create p
        let span = document.createElement("span") //create span
        p.appendChild(span) //add span to p
        // div.appendChild(p)
        span.appendChild(document.createTextNode(msg.value)) //add text
        p.appendChild(button)
        button.appendChild(document.createTextNode("delete")) //add text
        button.onclick = function () { //add onclick
            p.remove() //remove p
        }
        button.style.backgroundColor = "#f94449"
        button.style.outline = "none"
        button.style.border = "none"
        button.style.borderRadius = "10px"
        button.style.color = "white"
        button.style.padding = "7px"
        button.style.fontWeight = "600"
        button.style.cursor = "pointer"
        p.style.display = "flex"
        p.style.justifyContent = "space-between"
        p.style.backgroundColor = "white"
        p.style.borderRadius = "10px"
        p.style.padding = "5px"
        p.style.fontSize = "20px"
        p.style.fontWeight = "500"
    
        output.appendChild(p)
    } else {
        alert("please enter a task")
   
    }
    msg.value.appendChild(window.localStorage.setItem("task", msg.value)); //clear input
    
}















