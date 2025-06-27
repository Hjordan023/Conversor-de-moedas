const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue=document.querySelector(".input-value").value

    const inputCurrencyValueToConverted = document.querySelector(".currency-value-to-converter") //        
    
    const inputCurrencyValueConverted = document.querySelector(".currency-value") //outras moedas
    
    const dolarToday = 5.5
    
    const convertedValue = inputCurrencyValue / dolarToday

    inputCurrencyValueToConverted.innerHTML=new Intl.NumberFormat("pt-BR",{
        style:"currency",currency:"BRL"
    }).format(inputCurrencyValue)

    inputCurrencyValueConverted.innerHTML=new Intl.NumberFormat("en-US",{
        style:"currency", currency:"USD"
    }).format(convertedValue)


    
}


convertButton.addEventListener("click", convertValues)

