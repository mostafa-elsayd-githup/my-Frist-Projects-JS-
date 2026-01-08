let title = document.querySelector(".title");
let price = document.querySelector(".price-f");
let taxes = document.querySelector(".taxes");
let ads = document.querySelector(".ads");
let discount = document.querySelector(".discount");
let total = document.getElementById("total");
let count = document.querySelector(".count");
let category = document.querySelector(".category");
let create = document.querySelector(".create");
let search = document.querySelector(".search-felad");
let searchTitle = document.getElementById("search-title");
let searchCategory = document.getElementById("search-category");
let deleteAll = document.querySelector(".delete-all");
let footer = document.querySelector(".footer");
let mood = "create";
let tmp;





function getTotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = "#040"
    } else {
        total.innerHTML = "";
        total.style.backgroundColor = "#a00d02"
    }
}

let data_pro = []
if (localStorage.info != null) {
    data_pro = JSON.parse(localStorage.info)

} else {
    data_pro = []
}

create.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    if(mood === "create"){
        if (newPro.count > 1) {
            for (let i = 0; i < newPro.count; i++) {
                data_pro.push(newPro)
                clearData()
            }
        } else {
            data_pro.push(newPro)
            clearData()
        }
        
    } else {
        data_pro[tmp] = newPro
        create.innerHTML = "Create"
        mood = "create"
        count.style.display = "block"
    }
        
    
    localStorage.setItem("info", JSON.stringify(data_pro))
    
    showData()
}

//  clearData
function clearData(){
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";;
    count.value = "";
    category.value = "";
}

//  show data
function showData() {
    getTotal()
    let table = "";
    for (let i = 0; i < data_pro.length; i++) {
        table += `
        <tr>
            <td>${1 + i}</td>
            <td>${data_pro[i].title}</td>
            <td>${data_pro[i].price}</td>
            <td>${data_pro[i].taxes}</td>
            <td>${data_pro[i].ads}</td>
            <td>${data_pro[i].discount}</td>
            <td>${data_pro[i].total}</td>
            <td>${data_pro[i].count}</td>
            <td>${data_pro[i].category}</td>
            <td><button onclick="updata(${i})" class="update">Update</button></td>
            <td><button onclick="DeleteData(${i})" class="delete">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = table
}
showData()

// delete item
function DeleteData(i) {
    data_pro.splice(i, 1)
    localStorage.info = JSON.stringify(data_pro)
    showData()
}

// delete all 
function deleteAll_data() {
        localStorage.clear()
        data_pro.splice(0)
        deleteAll.style.display="none"
        showData()
}

// updata
function updata(i) {
    title.value = data_pro[i].title
    price.value = data_pro[i].price
    taxes.value = data_pro[i].taxes
    ads.value = data_pro[i].ads
    discount.value = data_pro[i].discount
    total.innerHTML = data_pro[i].total
    count.value = data_pro[i].count
    category.value = data_pro[i].category
    count.style.display = "none"
    create.innerHTML = "Update"
    mood = "update"
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth",
    })

    data_pro.splice(i, 1)
    localStorage.info = JSON.stringify(data_pro)
    showData()
}



// search 
let searchMood = "title"
function searchFilter(id) {

    if (id == "search-title") {
        searchMood = "title";

    } else {
        searchMood = "category";
  
    }
    search.value = ""
    showData()
}

function searchData(value) {
    let table = ""; 
    for (let i = 0; i < data_pro.length; i++) {
        if (searchMood == "title") {

            if ((data_pro[i].title).includes(value)) {
                table += `
                <tr>
                    <td>${1 + i}</td>
                    <td>${data_pro[i].title}</td>
                    <td>${data_pro[i].price}</td>
                    <td>${data_pro[i].taxes}</td>
                    <td>${data_pro[i].ads}</td>
                    <td>${data_pro[i].discount}</td>
                    <td>${data_pro[i].total}</td>
                    <td>${data_pro[i].count}</td>
                    <td>${data_pro[i].category}</td>
                    <td><button onclick="updata(${i})" class="update">Update</button></td>
                    <td><button onclick="DeleteData(${i})" class="delete">Delete</button></td>
                </tr>`
            } else {
                // document.getElementById("tbody").innerHTML = table
                
            }
            document.getElementById("tbody").innerHTML = table
        
        } else {
            if ((data_pro[i].category).includes(value)) {
                table += `
                <tr>
                    <td>${1 + i}</td>
                    <td>${data_pro[i].title}</td>
                    <td>${data_pro[i].price}</td>
                    <td>${data_pro[i].taxes}</td>
                    <td>${data_pro[i].ads}</td>
                    <td>${data_pro[i].discount}</td>
                    <td>${data_pro[i].total}</td>
                    <td>${data_pro[i].count}</td>
                    <td>${data_pro[i].category}</td>
                    <td><button onclick="updata(${i})" class="update">Update</button></td>
                    <td><button onclick="DeleteData(${i})" class="delete">Delete</button></td>
                </tr>`
            } else {
                // document.getElementById("tbody").innerHTML = table
            }
            document.getElementById("tbody").innerHTML = table
        
        }
    }
}

// cleanData