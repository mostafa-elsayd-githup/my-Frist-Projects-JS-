let theinput = document.querySelector(".get-repos input")
let getbutton = document.querySelector(".get-repos span")
let repos_data=document.querySelector(".repos-container .repos-data")


getbutton.onclick = function () {
    getrepos()
};

// get repos function
function getrepos() { //if value is empty

    if (theinput.value == "") {

        repos_data.innerHTML = "<span>Please write GitHup UserName...</span>";
        
    } else {

        fetch(`https://api.github.com/users/${theinput.value}/repos`)    
            
            .then((repo) => {

                return repo.json();

            })
            .then((data) => {

                repos_data.innerHTML = ""
                console.log(data)

                // loop on repositories
                data.forEach(repo => {
                    
                    // create the main div 
                    let mydiv = document.createElement("div")

                    let textmydiv = document.createTextNode(repo.name)

                    // create ropos RUL anchor tag
                    let theurl = document.createElement("a")
                    
                    // create  RUL text anchor tag
                    theurltext = document.createTextNode("visit") 

                    // append url text to anchor tag
                    theurl.prepend(theurltext)

                    
                    // add the herf 
                    theurl.href = `https://github.com/users/mostafa/${repo.name}`


                    // set attribute blank
                    theurl.setAttribute("target", "_blank")
                    
                    // append theurl to mydiv
                    mydiv.prepend(theurl)

                    mydiv.prepend(textmydiv)
                    
                    //add class on mydiv
                    mydiv.className="repo-box"
                    
// //////////////////////////////////////////////////////////////////////////////////

                    // create star count span
                    let my_star_span = document.createElement("span")

                    // create the star text 
                    let my_star_text = document.createTextNode(`stars${repo.stargazers_count}`)

                    // //////////////////////////////////////////////////////////////////////////////////
                
                    
                    // append the my div to container
                    repos_data.appendChild(mydiv)
        
                    // append ster text to span
                    my_star_span.appendChild(my_star_text)

                     // append the my span to container
                    repos_data.appendChild(my_star_span)

                });
                

            });
    };
};
