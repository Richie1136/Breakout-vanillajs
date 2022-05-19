const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 560
const boardHeight = 300
const ballDiameter = 20
let xDirection = -2
let yDirection = 2
let timer;

const start = [240, 10]
let currentPosition = start
const ballStart = [285, 130]
let ballPosition = ballStart
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
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10
        user.style.left = currentPosition[0] + "px"
        user.style.bottom = currentPosition[1] + "px"
        console.log("Moved")
      }
      break;
    case 'ArrowRight':
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10
        user.style.left = currentPosition[0] + "px"
        user.style.bottom = currentPosition[1] + "px"
      }
  }
}

document.addEventListener('keydown', moveUser)



// Add Ball

const ball = document.createElement('div')
ball.classList.add('ball')
ball.style.left = ballPosition[0] + "px"
ball.style.bottom = ballPosition[1] + "px"
grid.appendChild(ball)

// Move the ball 

const moveBall = () => {
  ballPosition[0] += xDirection
  ballPosition[1] += yDirection
  ball.style.left = ballPosition[0] + "px"
  ball.style.bottom = ballPosition[1] + "px"
  checkforCollisions()
}

timer = setInterval(() => {
  moveBall()
}, 30);


const changeDirection = () => {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2
    return
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
    return
  }
}

// check for collisions

const checkforCollisions = () => {

  //   // check for block collisions

  for (let i = 0; i < blocksArray.length; i++) {
    if
      (
      (ballPosition[0] > blocksArray[i].bottomLeft[0] && ballPosition[0] < blocksArray[i].bottomRight[0]) &&
      ((ballPosition[1] + ballDiameter) > blocksArray[i].bottomLeft[1] && ballPosition[1] < blocksArray[i].topLeft[1])
    ) {
      const allBlocks = Array.from(document.querySelectorAll('.block'))
      console.log(allBlocks)
      allBlocks[i].classList.remove('block')
      blocksArray.splice(i, 1)
    }
  }

  // check for wall collisions

  if (ballPosition[0] >= (boardWidth - ballDiameter) ||
    ballPosition[1] >= (boardHeight - ballDiameter) || ballPosition[0] <= 0) {
    changeDirection()
  }
  // check for gameover

  if (ballPosition[1] <= 0) {
    console.log("Game Over")
    clearInterval(timer)
    document.removeEventListener('keydown', moveUser)
  }

}