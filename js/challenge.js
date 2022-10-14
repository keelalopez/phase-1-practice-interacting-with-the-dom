// START WITH +/- BUTTON > FORM > TIMER > LIKE BUTTON
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
 
//FORM
const form = document.querySelector("form");

form.addEventListener("submit", leaveFormComment);

//LEAVE FORM COMMENT
function leaveFormComment (e){
    e.preventDefault();
    const newComment = e.target.comment.value;
    const p = document.createElement("p");
    p.append(newComment); 

    const commentSection = document.querySelector("#list");
    commentSection.appendChild(p);

    form.reset();
}



