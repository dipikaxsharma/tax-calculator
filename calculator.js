let tip;

function updateInput() {
    let total = parseInt(document.querySelector('#total').value);
    tip = total * document.querySelector('#tipAmount').value;
    tip /= 100;
    document.getElementById("tipRate").innerHTML = tip;
}

function calculateRate() {
    if (tip) {
        let total = parseInt(document.querySelector('#total').value);
        document.getElementById("grandTotal").innerText = tip + total + 5.50;
    }
}