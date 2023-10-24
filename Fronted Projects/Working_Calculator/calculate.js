function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLastCharacter() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function toggleSign() {
    let currentValue = document.getElementById("display").value;
    if (currentValue.charAt(0) === "-") {
        document.getElementById("display").value = currentValue.slice(1);
    } else {
        document.getElementById("display").value = "+" + currentValue;
    }
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
