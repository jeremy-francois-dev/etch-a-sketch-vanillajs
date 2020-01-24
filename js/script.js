const gridContainer = document.getElementById('grid-container');
const button = document.createElement('button');
button.textContent = 'Clear the grid';
document.body.insertBefore(button,gridContainer);

// Create the grid
function createGrid() {
    let gridChoice = prompt('Choose the number of square','8');
    let squareGridChoice = gridChoice*gridChoice;
    for(let i=0; i<squareGridChoice; i++) {
        const items = document.createElement('div');
        items.classList.add('grid-item');
        items.style.width=(510/gridChoice) + 'px';
        items.style.height=(510/gridChoice) + 'px';
        gridContainer.appendChild(items); 
        if(i<gridChoice) {
            gridContainer.style.gridTemplateColumns += ' auto'; 
        }
    }
    let divItem = document.querySelectorAll('.grid-item');
    // Change the color of each divs
    divItem.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
        item.style.backgroundColor = 'blue';
        });
    });
}

// Clear the grid
button.addEventListener('click', (e) => {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = '';
    createGrid();
});

createGrid();
 

