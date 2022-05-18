const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

const start = [240, 10]
let currentPosition = start

// Create Block 

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topLeft = [xAxis, yAxis + blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
  }
}

// All of the blocks

const blocksArray = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 230),
  new Block(120, 230),
  new Block(230, 230),
  new Block(340, 230),
  new Block(450, 230),
  new Block(10, 190),
  new Block(120, 190),
  new Block(230, 190),
  new Block(340, 190),
  new Block(450, 190),
]

// Draw all of the blocks
const addBlocks = () => {

  for (let i = 0; i < blocksArray.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocksArray[i].bottomLeft[0] + "px"
    block.style.bottom = blocksArray[i].bottomLeft[1] + "px"
    grid.appendChild(block)
  }
}

addBlocks()


// Add User


const user = document.createElement('div')
user.classList.add('user')
user.style.left = currentPosition[0] + "px"
user.style.bottom = currentPosition[1] + "px"
grid.appendChild(user)


// Move User


const moveUser = (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      currentPosition[0] -= 10
      user.style.left = currentPosition[0] + "px"
      user.style.bottom = currentPosition[1] + "px"
      console.log("Moved")
      break;
    case 'ArrowRight':
      currentPosition[0] += 10
      user.style.left = currentPosition[0] + "px"
  }
}

document.addEventListener('keydown', moveUser)