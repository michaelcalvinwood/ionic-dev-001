const calculateButton = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const result = document.getElementById('result');

const calculateBmi = () => {
    const enteredHeight = +heightInput.value; // the + tranforms the value from string to a number
    const enteredWeight = +weightInput.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);

    console.log (bmi);
};

calculateButton.addEventListener('click', calculateBmi);


