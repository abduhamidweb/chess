// const board = document.getElementById('chessboard');

// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < 8; j++) {
//     const square = document.createElement('div');
//     square.classList.add('square');

//     if ((i + j) % 2 === 0) {
//       square.classList.add('white');
//     } else {
//       square.classList.add('black');
//     }

//     board.appendChild(square);
//   }
// }
const board = document.getElementById('chessboard')
const pieces = {
  rook: '&#9820;',
  knight: '&#9822;',
  bishop: '&#9821;',
  queen: '&#9819;',
  king: '&#9818;',
  pawn: '&#9823;',
}

for (let i = 0; i < 8; i++) {   
  for (let j = 0; j < 8; j++) {
    const square = document.createElement('div')
    square.classList.add('square')

    if ((i + j) % 2 === 0) {
      square.classList.add('white')
    } else {
      square.classList.add('black')
    }
    // Add pieces to starting positions
    if (i === 0 || i === 7) {
      if (j === 0 || j === 7) {
        square.innerHTML = pieces['rook']
      } else if (j === 1 || j === 6) {
        square.innerHTML = pieces['knight']
      } else if (j === 2 || j === 5) {
        square.innerHTML = pieces['bishop']
      } else if (j === 3) {
        square.innerHTML = pieces['queen']
      } else if (j === 4) {
        square.innerHTML = pieces['king']
      }
    } else if (i === 1 || i === 6) {
      square.innerHTML = pieces['pawn']
      }
      
    board.appendChild(square)
  }
}
