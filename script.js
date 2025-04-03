const rates = {
    "DZD": { "USD": 0.0073, "EUR": 0.0067 },
    "USD": { "DZD": 137.12, "EUR": 0.92 },
    "EUR": { "DZD": 148.52, "USD": 1.09 }
};

function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let conversionRate = from === to ? 1 : rates[from][to];
    let result = amount * conversionRate;

    alert(`Converted amount: ${result.toFixed(2)} ${to}`);
}

function reset() {
    document.getElementById("amount").value = "";
}
s