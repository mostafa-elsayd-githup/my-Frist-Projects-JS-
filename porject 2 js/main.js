var input = document.getElementById("inp");
var plus = document.getElementById("butt");
var task = document.getElementsByClassName("tascks-content");
var task_count = document.querySelector(".task-tasts");
var task_count = document.querySelector(".tasks-count span");
var task_completed = document.querySelector(".tasks-completed span");
var no_mag = document.querySelector(".no-task-mag");


window.onload = function () {
    input.focus()
}

plus.onclick = function () {
    if (input.value == "") {

        console.log("no")
    } else {
        no_mag.remove()
        var span = document.createElement("span");
        span.className = "task-box";
        span.appendChild(document.createTextNode(input.value));
        task[0].appendChild(span);
        
        input.value = ""
        var button = document.createElement("span");
        var text_button = document.createTextNode("Delete");
        button.appendChild(text_button);
        button.className = "delete";
        // create Completed button
        var button_completed = document.createElement("span");
    
        // add text_button to button_completed
        var text_button_completed = document.createTextNode("Completed");
       
        // add text_button to  button_completed
        button_completed.appendChild(text_button_completed);
  

        button_completed.style.float = "right";
        button_completed.style.marginRight = "5px";
        button_completed.style.alignContent = "center";
        button_completed.style.backgroundColor = "#7fff00";
        button_completed.style.color = "white";
        button_completed.style.padding = "2px";
        button_completed.style.borderRadius = "6px";
        button_completed.style.fontSize = "15px";
        button_completed.style.cursor = "pointer";



        // append button_complete to spam
        span.prepend(button);
        span.appendChild(button_completed);
        
       
        // // count tasks + and -
        task_count.innerHTML = parseInt(task_count.innerHTML) + 1
        button.onclick = function () {
            if (span.classList.contains("finished")) {
                parseInt(task_completed.innerHTML--)
                span.remove()
             
            } else {
                
                task_count.innerHTML = parseInt(task_count.innerHTML) - 1
                span.remove()
            };
        };

        span.addEventListener("click", function (e) {
    
            if (e.target.classList.contains("task-box")) {
                e.target.classList.toggle("finished")
                if (e.target.classList.contains("finished")) {
                    parseInt(task_completed.innerHTML++)
                    parseInt(task_count.innerHTML--)
                } else {
                    parseInt(task_completed.innerHTML--)
                    parseInt(task_count.innerHTML++)
                
                };
            };
    
        });

       
    };
};


// //anther a way
// var input=document.getElementById("inp")
// var plus = document.getElementById("butt");
// var task = document.querySelector(".tascks-content")
// var no_mag = document.querySelector(".no-task-mag")
// var task_count = document.querySelector(".task-tasts")
// var task_count = document.querySelector(".tasks-count span")
// var task_completed = document.querySelector(".tasks-completed span")
// //focus input filed
// window.onload = function () {
//     input.focus()
// }
// //adding the task 
// plus.onclick = function () {
//     if (input.value === "") {
//         console.log("no")
//     } else {
//         no_mag.remove()

//         // span
//         var span = document.createElement("span")
         
//         // delete button
//         var button = document.createElement("span");

//         // create the span text to span
//         span.appendChild(document.createTextNode(input.value));
        
//         // add text to button
//         var text_button = document.createTextNode("Delete")
        
//         // add text to span 
        
//         // add text to delete button 
//         button.appendChild(text_button)

//         // add class delete
//         button.className = "delete"
        
        
//         // add class task-box to span
        
//         span.className = "task-box";
        
//         //add delete button to span 
//         span.appendChild(button)
        
//         // tasks to span
//         task.appendChild(span)
   
//         // empty the input
//         input.value = ""
//         input.focus()
//     };
// };
// document.addEventListener("click", function (e) {
    
//     if (e.target.className == "delete"){
//         e.target.parentNode.remove()
        
//     } 
    
//     if (e.target.classList.contains( "task-box" )){
//         e.target.classList.toggle("finished")
//     } 
    

    
// })
// console.log(parseInt())