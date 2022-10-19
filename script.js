// SketchPad Javascript
// Copyright Sebastian Hothaza


// Attach listeners to all buttons
const userButtons = document.querySelectorAll('button');
console.log(userButtons);

userButtons.forEach((userBtn) => {
    userBtn.addEventListener('click', (e) => {
        console.log(e.id);
    });
});

