let calculation = localStorage.getItem('calculation') || '';

document.querySelector('.js-calculations-display').
  innerHTML = localStorage.getItem('calculation') || '';

const myElement = document.querySelector('.js-sidebar-calculator');

myElement.addEventListener('click', function () {
  window.location.href = "https://nikae.net/calculator.html";
});


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