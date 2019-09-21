function updateInput() {
    let tip = document.querySelector('#tipAmount').value;
    document.getElementById("tip").innerText = tip + ".00";
}

function calculateRate() {
    let total = parseInt(document.querySelector('#total').value);
    let tip = parseFloat(document.querySelector('#tipAmount').value);
    let tipRate = parseFloat(document.querySelector('#tax').value);
    document.getElementById("grandTotal").innerText = tip + total + tipRate + ".00";
}