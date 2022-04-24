const calculateButton = document.getElementById('calc-btn');
const resetButton = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const result = document.getElementById('result');

const calculateBmi = () => {
    const enteredHeight = +heightInput.value; // the + tranforms the value from string to a number
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    if (isNaN(bmi)) {
        alert('Not a number, please check inputs.')
        return;
    }

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
        <ion-card-header>
            <ion-card-title>BMI</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <h2>${bmi}</h2>
        </ion-card-content>
    `;
    result.innerHTML = '';
    result.appendChild(resultElement);
};

const resetBmi = () => {
    heightInput.value = '';
    weightInput.value = '';
}

calculateButton.addEventListener('click', calculateBmi);
resetButton.addEventListener('click', resetBmi);


