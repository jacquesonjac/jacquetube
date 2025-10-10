let calculation = localStorage.getItem('calculation') || '';

document.querySelector('.js-calculations-display').
  innerHTML = localStorage.getItem('calculation') || '';


function updateCalculation(value) {
  calculation += value;
  
  document.querySelector('.js-calculations-display').
    innerHTML = calculation;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}