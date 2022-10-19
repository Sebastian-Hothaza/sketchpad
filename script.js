// SketchPad Javascript
// Copyright Sebastian Hothaza


// Attach listeners to all buttons
const userButtons = document.querySelectorAll('button');
userButtons.forEach((userBtn) => {
    userBtn.addEventListener('click', (e) => {
        handleUserSelection(e.target.id);
    });
});


function handleUserSelection(btn){
    console.log("User clicked on " + btn);
}
