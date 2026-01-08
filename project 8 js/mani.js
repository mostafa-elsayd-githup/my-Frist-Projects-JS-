let input = document.querySelector(".get-repos input");
let button = document.getElementById("get-button");
let output = document.querySelector(".show-data");



button.onclick = function () { 
    getrepos();
}

function getrepos() {
    if (input.value == "") {
        output.innerHTML = "<span>Please write a username</span>";
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`)
            .then((repo) => repo.json())
            
            .then((repo) => {

                // empty the output
                output.innerHTML = "";

                repo.forEach(ele => {
                   
                    // create main div element
                    let mainDiv = document.createElement("div");
                    // create repo naem text element
                    let repoName = document.createTextNode(ele.name);
                    
                    // create link element
                    let link = document.createElement("a");

                    // add href attribute to the link
                    link.href = ele.html_url;

                    // add target attribute to the link
                    link.target = "_blank";

                    // add class to the link
                    link.textContent = "Visit";

                    link.onclick = function () { 
                        // open the link in new tab
                        window.open(ele.html_url);

                        // hide the link after clicking
                        link.style.color = "black"; // hide the link after clicking
                    }
                    
                    //create the star element
                    let star = document.createElement("span");

                    star.style.display = "block"; // make the star element block level
                    
                    // carate the star text
                    let star_text = ele.stargazers_count; 

                    // create the forks element
                    let forks = document.createElement("span");
    

                    // create the forks text
                    forks_text = ele.forks_count;

                    // append the forks text to the forks element
                    forks.appendChild(document.createTextNode(`Forks: ${forks_text}`));

                    
                    //append the star text to the star element
                    star.appendChild(document.createTextNode(`Stars: ${star_text}`));

                    // append the link to main div
                    mainDiv.appendChild(link);

                    // append the text to the main div
                    mainDiv.appendChild(repoName);

                    // append the main div to container
                    output.appendChild(mainDiv);

                    // append the star element to the main div
                    mainDiv.appendChild(star);

                    // append the forks element to the main div
                    mainDiv.appendChild(forks);
                    input.value = ""; // clear the input value
                });

            })
    
    }
}



























// button.addEventListener("click", function () {
    
//     
//         .then((repo) => {
//             return repo.json();
//         })
//         .then((data) => {
//             input.innerHTML = ""; 
//             console.log(data);
//         })
//     })





