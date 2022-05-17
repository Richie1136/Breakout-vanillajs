const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

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
  new Block(10, 270)
]

// Draw all of the blocks
const addBlocks = () => {

  for (let i = 0; i < blocksArray.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0]
    grid.style.bottom = '50px'
    grid.appendChild(block)
  }
}

addBlocks()