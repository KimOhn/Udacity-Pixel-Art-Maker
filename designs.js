// Select color input
const colorInput = document.querySelector('#colorPicker');
// Select size input
let rows = document.querySelector('input#inputHeight');
let cols = document.querySelector('input#inputWidth');

// Create a variable for Submit Button
const submitButton = document.querySelector('#sizePicker');

// Create a variable for the table
const tableGrid = document.body.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()


function makeGrid(rows, cols) {
    //call insertRow method on the HTMLTableElement
    for (var i = 0; i < rows; i++) {
        let row = tableGrid.insertRow(i);
        for (var p = 0; p < cols; p++) {
            let col = row.insertCell(p);
            
        }

    }

}



submitButton.addEventListener('submit', function(event) {
    event.preventDefault(); //needed - otherwise, input numbers kept resetting at 1
    tableGrid.innerHTML = ''; //clear out tableGrid
    makeGrid(rows.value, cols.value);
    //need to call row and col values "after" the button is submitted to update with new values
})

tableGrid.addEventListener('click',function(e){
	if(e.target.nodeName == "TD") {
        e.target.style.backgroundColor = colorInput.value;
}
})

tableGrid.addEventListener('dblclick',function(e){
	if(e.target.nodeName == "TD") {
        e.target.style.backgroundColor = 'white';
}
})

