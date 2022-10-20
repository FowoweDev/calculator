// custom function 

function calculateTip () {
    var amount = document.getElementById('amount').value;
    var service = document.getElementById('services').value;
    var people = document.getElementById('people').value;
    

    if (amount === "" || service == 0) {
        window.alert("Enter Some Values To Get This Machine Running!");
        return;
    }

    if (people === "" || people <= 1) {
        people = 1;

        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "inline-block";
    }

    var total = (amount * service) / people;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
    // Display the tip

    document.getElementById('tip').style.display = "block";
    document.getElementById('tip-amount').style.display = "inline-block";
    document.getElementById('tip-amount').innerHTML = total;
}

// On load hide the amount section

document.getElementById('tip').style.display = "none";
document.getElementById("tip-amount").style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('btn-cta').onclick = function () { calculateTip() };