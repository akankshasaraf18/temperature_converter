// Select elements
const tempInput = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const convertBtn = document.getElementById('convert-btn');
const resultPara = document.getElementById('result');
const tempError = document.getElementById('temp-error');
const unitError = document.getElementById('unit-error');

// Add event listener to convert button
convertBtn.addEventListener('click', convertTemperature);

// Function to convert temperature
function convertTemperature() {
    // Get input values
    const tempValue = parseFloat(tempInput.value);
    const unitValue = unitSelect.value;

    // Clear error messages
    tempError.textContent = '';
    unitError.textContent = '';

    // Check if input value is a valid number
    if (isNaN(tempValue)) {
        tempError.textContent = 'Please enter a valid temperature value';
        return;
    }

    // Check if a unit has been selected
    if (unitValue === '') {
        unitError.textContent = 'Please select a unit';
        return;
    }

    // Convert temperature
    let convertedTemp;
    let convertedUnit;

    if (unitValue === 'celsius') {
        convertedTemp = (tempValue * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else {
        convertedTemp = (tempValue - 32) * 5/9;
        convertedUnit = 'Celsius';
    }

    // Display converted temperature
    resultPara.textContent = `The converted temperature is ${convertedTemp.toFixed(2)} ${convertedUnit}`;
}