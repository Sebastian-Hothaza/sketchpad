// SketchPad Javascript
// Copyright Sebastian Hothaza

// Global vars
let penColor = "black";
let backgroundColor = "white";
let gridSize = 8;
let rainbow = false;

drawboard(gridSize);

// Attatch listeners for colors
let colorPicker = document.getElementById("colorSelection");
colorPicker.addEventListener('input', () =>{
    penColor = document.getElementById("colorSelection").value;
});
let colorBkPicker = document.getElementById("colorBackgroundSelection");
colorBkPicker.addEventListener('input', () =>{
    backgroundColor = document.getElementById("colorBackgroundSelection").value;
    drawboard(gridSize);
});


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
            penColor = document.getElementById("colorSelection").value;
            rainbow = false;
            document.getElementById('penButton').classList.add('selected');
            document.getElementById('eraserButton').classList.remove('selected');
            document.getElementById('rainbowButton').classList.remove('selected');
            break;
        case "eraserButton":
            penColor = backgroundColor;
            rainbow = false;
            document.getElementById('penButton').classList.remove('selected');
            document.getElementById('eraserButton').classList.add('selected');
            document.getElementById('rainbowButton').classList.remove('selected');
            break;
        case "rainbowButton":
            rainbow=true;
            document.getElementById('penButton').classList.remove('selected');
            document.getElementById('eraserButton').classList.remove('selected');
            document.getElementById('rainbowButton').classList.add('selected');
            break;

        case "penColorButton":
            penColor = document.getElementById("colorSelection").value;
            break;
        case "backgroundColorButton":
            break;


        case "resetButton":
            backgroundColor="white";
            penColor = "black";
            drawboard(gridSize);
            break;
        case "padSizeButton":
            let desiredSize = prompt("Please enter a pad height: (1-50)", "8");
            if (desiredSize != null && Number.isInteger(parseInt(desiredSize)) && desiredSize <=50 && desiredSize>=1) {
                gridSize=desiredSize;
                drawboard(gridSize);
            }else{
                alert("Error! You must enter an integer number between 1 and 50");
            }
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
        // TODO: Make work with user selectable background color instead of the hardcoded white in the CSS
        square.style.cssText = `height:${(gridDimension-2*size)/size}px; width:${(gridDimension-2*size)/size}px;`
        // Assigning the squares an ID so that we can define hover property in CSS
        square.classList.add('gridSquare')
        square.style.backgroundColor = backgroundColor;
        

        // Adding listeners to the pads

        // We detect the initial click
        square.addEventListener('mousedown', (e) => {
            e.preventDefault();
            if (!rainbow){
                square.style.backgroundColor = penColor;
            }else{
                square.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);;
            }
        });

        square.addEventListener('mouseenter', (e) => {
            // If we have an entry in a square, we only color it if mouse button is pressed
            if(e.buttons == 1){
                if (!rainbow){
                    square.style.backgroundColor = penColor;
                }else{
                    square.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);;
                }
            }
        });

        square.draggable = false;


        // Add to the pad
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

