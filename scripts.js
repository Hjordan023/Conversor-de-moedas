const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue=document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-converter") //  valor em real      
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas


    const dolarToday = 5.42
    const euroToday = 6.37
    const libraToday = 7.4
    const bitcoinToday = 593.397


   //Moedas 
    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(inputCurrencyValue / dolarToday)
    }


    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML=new Intl.NumberFormat("de-DE",{
        style:"currency", 
        currency:"EUR"
    }).format(inputCurrencyValue / euroToday)
    }


    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"BTC",
            minimumFractionDigits:"8"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    //Real
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",currency:"BRL"
    }).format(inputCurrencyValue)

}

//Imagens quando as moedas sendo alteradas
function changeCurrency(){
    
    const currencyName = document.getElementById("currencyName")
    const currencyImg= document.getElementById("currency-dolar")


    if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "./assets/dolar.png"
    }


    if(currencySelect.value== "euro"){
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
    currencyImg.style.width="80px"
    }


    if(currencySelect.value == "libra"){
        currencyName.innerHTML ="Libra"
        currencyImg.src ="./assets/libra.png"
        currencyImg.style.width="80px"
    }


    if(currencySelect.value =="bitcoin"){
        currencyName.innerHTML="Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
        currencyImg.style.width="80px"
    } 
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)