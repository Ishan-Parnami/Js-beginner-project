const formData = document.querySelector('form');
// this useCase will give you empty value
// const height = parseInt(document.querySelector('#height').value);


formData.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if(height === "" || isNaN(height) || height <= 0) {
        alert("Please enter a valid height.");
        return;
    }

    if(weight === "" || isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    document.querySelector('#result').innerHTML = `<div>Your BMI is <span class="bmi-${getBmiCategory(bmi)}">${bmi}</span>, You are <span class="bmi-${getBmiCategory(bmi)}">${getBmiCategory(bmi)}.</span></div>`;
})

function getBmiCategory(bmi) {
    if (bmi < 18.5) return "underweight";
    if (bmi < 24.9) return "normal";
    if (bmi < 29.9) return "overweight";
    return "obese";
}