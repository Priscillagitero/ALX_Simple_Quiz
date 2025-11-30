// ----------------------------
//  Arithmetic Functions
// ----------------------------

// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers
function divide(number1, number2) {
    // Check if the second number is zero (cannot divide by zero)
    if (number2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return number1 / number2;
}


// ----------------------------
//  Event Listeners
// ----------------------------
// These detect clicks on the buttons and run the correct function.


// Addition button
document.getElementById('add').addEventListener('click', function () {
    // Get the values from the input fields and convert them to numbers
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    // Perform the addition
    const result = add(number1, number2);

    // Display the result in the HTML
    document.getElementById('calculation-result').textContent = result;
});


// Subtraction button
document.getElementById('subtract').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = subtract(number1, number2);

    document.getElementById('calculation-result').textContent = result;
});


// Multiplication button
document.getElementById('multiply').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = multiply(number1, number2);

    document.getElementById('calculation-result').textContent = result;
});


// Division button
document.getElementById('divide').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;

    // Default second number to 1 to avoid accidental division by zero
    const number2 = parseFloat(document.getElementById('number2').value) || 1;

    const result = divide(number1, number2);

    document.getElementById('calculation-result').textContent = result;
});
