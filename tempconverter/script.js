document.getElementById("convertBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    console.log(fromCurrency);
    console.log(toCurrency);

    var camount=amount;

    if(fromCurrency!=toCurrency){
    if (fromCurrency == "CEL")
        camount = amount;
    else if (fromCurrency == "FAR")
        camount = (amount-32)*5/9;       
    else if (fromCurrency == "KEL")
        camount = amount-273;        

    if (toCurrency == "CEL")
        camount = camount
    else if (toCurrency == "FAR")
        camount =9*camount/5+32;
    else if (toCurrency == "KEL")
        camount +=273;
    }

    document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${camount} ${toCurrency}`;
});
