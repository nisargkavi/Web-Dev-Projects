function cryptoRate(){
    fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot")
    .then(response => response.json())
    .then(data => {
        btcRate = data.data.amount
        document.getElementById("btcRate").innerHTML = btcRate
    })
    fetch("https://api.coinbase.com/v2/prices/LTC-USD/spot")
    .then(response => response.json())
    .then(data => {
        ltcRate = data.data.amount
        document.getElementById("ltcRate").innerHTML = ltcRate
    })
    fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot")
    .then(response => response.json())
    .then(data => {
        ethRate = data.data.amount
        document.getElementById("ethRate").innerHTML = ethRate
    })
    fetch("https://api.coinbase.com/v2/prices/ETC-USD/spot")
    .then(response => response.json())
    .then(data => {
        etcRate = data.data.amount
        document.getElementById("etcRate").innerHTML = etcRate 
    })

}

cryptoRate()
setInterval(cryptoRate, 1000)