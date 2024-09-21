// Select the input box
let inputBox = document.getElementById("inputBox");

// Function to update the input field when a button is pressed
function updateInput(value) {
    if (inputBox.value === "0" || inputBox.value === "Error") {
        inputBox.value = value; // Replace the default or error value
    } else {
        inputBox.value += value; // Append the new value
    }
}

// Function to calculate the result
function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch {
        inputBox.value = "Error";
    }
}

// Function to clear the input box (AC button)
function clearInput() {
    inputBox.value = "0";
}

// Adding event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        let value = this.innerText;

        if (value === "AC") {
            clearInput(); // Clear input field for AC button
        } else if (value === "=") {
            calculate(); // Calculate result for = button
        } else if (value === "ANS") {
            // Store the previous answer logic can be implemented here (for now just a placeholder)
        } else if (value === "log") {
            inputBox.value = Math.log10(parseFloat(inputBox.value)); // Log base 10 calculation
        } else if (value === "root") {
            inputBox.value = Math.sqrt(parseFloat(inputBox.value)); // Square root
        } else if (value === "sin") {
            inputBox.value = Math.sin(parseFloat(inputBox.value)); // Sine function
        } else if (value === "cos") {
            inputBox.value = Math.cos(parseFloat(inputBox.value)); // Cosine function
        } else if (value === "tan") {
            inputBox.value = Math.tan(parseFloat(inputBox.value)); // Tangent function
        } else if (value === "x^2") {
            inputBox.value = Math.pow(parseFloat(inputBox.value), 2); // Squaring a number
        } else if (value === "x^3") {
            inputBox.value = Math.pow(parseFloat(inputBox.value), 3); // Cubing a number
        } else if (value === "x^-1") {
            inputBox.value = 1 / parseFloat(inputBox.value); // Inverse function
        } else if (value === "EXP") {
            inputBox.value = Math.exp(parseFloat(inputBox.value)); // Exponential function
        } else {
            updateInput(value); // Update input for numbers and other operations
        }
    });
});

