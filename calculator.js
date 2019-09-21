function updateInput() {
    let tip = document.querySelector('#tipAmount').value;
    document.getElementById("tip").innerText = tip + ".00";
}

function calculateRate () {
    let total = parseInt(document.querySelector('#total').value);
    let tip = parseFloat(document.querySelector('#tipAmount').value);
    document.getElementById("grandTotal").innerText = tip + total + ".00";
}