const display = document.getElementById('display');

// Buttons se value display mein add karne ke liye
function appendToDisplay(input) {
    display.value += input;
}

// Screen saaf karne ke liye
function clearDisplay() {
    display.value = "";
}

// Ek pichla character delete karne ke liye
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculation karne ke liye (eval function ka use)
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}