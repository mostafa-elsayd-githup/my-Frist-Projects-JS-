let amount = document.querySelector(".amount");
let currency = document.querySelector(".egp span");
let sar = document.querySelector(".SAR span");


fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=4187424dacf74258a7b9303200752c71 ")
    .then(response => {
        // console.log(response);
        let mydata = response.json();
        // console.log(mydata);
        console.log(mydata);
        return mydata;
    
    }).then(data => {
        let result = Math.round(amount.innerHTML * data.rates.EGP);
        let result2 = Math.round(amount.innerHTML * data.rates.SAR);

        
        currency.innerHTML=(result);
        sar.innerHTML=(result2);
    })
// Math.round
// Math.ceil