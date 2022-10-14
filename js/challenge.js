// START WITH +/- BUTTON > FORM > TIMER > BUTTON
const counter = document.querySelector('#counter');
const minusBtn = document.querySelector('#minus');

// EVENT LISTENER FOR PLUS BUTTON
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', () => {
    counter.textContent++;
})

// EVENT LISTENER FOR MINUS BUTTON
minusBtn.addEventListener('click', () => {
    counter.textContent--
})
 
