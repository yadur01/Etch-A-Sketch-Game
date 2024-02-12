const container = document.getElementById('container');
const gridSizeInput = document.getElementById('gridSize');
const colorPicker = document.getElementById('colorPicker');
let cells = [];
let eraserMode = false;

// Create grid
function createGrid() {
  const gridSize = gridSizeInput.value;
  container.innerHTML = '';
  cells = [];
  
  container.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 40px)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', () => {
      if (!eraserMode) {
        cell.style.backgroundColor = colorPicker.value;
      } else {
        cell.style.backgroundColor = 'white';
      }
    });
    container.appendChild(cell);
    cells.push(cell);
  }
}

// Clear grid
function clearGrid() {
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
}

// Toggle eraser mode
function toggleEraser() {
  eraserMode = !eraserMode;
}
