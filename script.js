// SketchPad Javascript
// Copyright Sebastian Hothaza

// Global vars
let penColor = "black";
let backgroundColor = "white";


// Attach listeners to all buttons
const userButtons = document.querySelectorAll('button');
userButtons.forEach((userBtn) => {
    userBtn.addEventListener('click', (e) => {
        handleUserSelection(e.target.id);
    });
});

// Handle control panel selections
function handleUserSelection(btn){
    console.log("User clicked on " + btn);
    switch (btn){
        case "penButton":
            drawboard(8);
            break;
        case "eraserButton":
            document.querySelector('#sketchPad').innerHTML='';
            break;
    }
}


// Given a size, draws the grid by attaching divs as required to the HTML
// Note: The "tile" formatting is described in JS, NOT in CSS!
function drawboard(size){
    const gridDimension = 600; // TODO: This is ugly, should be cleaned up later

    // Get the sketchpad
    const padHook = document.querySelector('#sketchPad');
    // Remove anything attached to it
    padHook.innerHTML='';


    // Creation of the divs. We use float.
    for (let i=0; i<size*size; i++){
        const square = document.createElement('div');








        // Styling of the divs 
        square.style.cssText = `height:${(gridDimension-2*size)/size}px; width:${(gridDimension-2*size)/size}px;`
        // Assigning the squares an ID so that we can define hover property in CSS
        square.classList.add('gridSquare')








        // Add to the padS
        padHook.appendChild(square);
        // If we are on last element to print on current row, then add a blank div to proceed to new line
        if ((i+1)%size == 0){
            const newlineDiv = document.createElement('div');
            newlineDiv.style.cssText = "clear: left;";
            padHook.appendChild(newlineDiv);
        }
        
    }

    

    // Styling the divs
    //square.classList.add('square')
    

    
}

