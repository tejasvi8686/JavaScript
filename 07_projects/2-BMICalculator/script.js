const form = document.querySelector('#bmi-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmiGuide = document.querySelector('#bmi-guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the BMI result
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    // Show the corresponding BMI weight guide
    let guideMessage = '';
    if (bmi < 18.6) {
      guideMessage = 'You are underweight.';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      guideMessage = 'You are in the normal range.';
    } else {
      guideMessage = 'You are overweight.';
    }
    bmiGuide.innerHTML = `<span>${guideMessage}</span>`;
  }
});
