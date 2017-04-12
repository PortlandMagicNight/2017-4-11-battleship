let pad = require('pad')

let board = new Array(100)
let pieces = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
}

function placePiece(ship, orientation, startingSquare){
  let padded = pad(2, startingSquare.toString(),'0')
  let error = null
  if(orientation == 'vertical'){
    var  index = parseInt(padded[0])
  }else{
    var  index = parseInt(padded[1])
  }

  switch(ship){
    case 'carrier':
      if(index >= 6){
        error = 'not enough space' 
      }
      break;
    case 'battleship':
      if(index >= 5){
        error = 'not enough space' 
      }
      break;
    case 'cruiser':
    case 'submarine':
      if(index >= 4){
        error = 'not enough space' 
      }
      break;
    case 'destroyer':
      if(index >= 3){
        error = 'not enough space' 
      }
      break;
  }

  if(error == null){
    if(orientation == 'vertical'){
      placeVertical(ship, startingSquare)
    }else{
      placeHorizontal(ship, startingSquare)
    }
  }else{
    console.log('ERROR!:', error)
  }
}

function placeVertical(ship, startingSquare){
  let length = pieces[ship]
  placeOnBoard(length, startingSquare, 10)
}

function placeHorizontal(ship, startingSquare){
  let length = pieces[ship]
  placeOnBoard(length, startingSquare, 1)
}


function placeOnBoard(length, startingSquare, incrementor){
  let error = null
  
  // check that we can place piece without conflict
  for(let i = startingSquare; i < startingSquare + (length * incrementor); i += incrementor){
    if(board[i] != null){
      error = 'Conflicting Ship'
    }
  }

  if(error == null){
    for(let i = startingSquare; i < startingSquare + (length * incrementor); i += incrementor){
      board[i] = 'O'
    }
  }
}

placePiece('carrier', 'vertical', 40)
//placePiece('carrier', 'horizontal', 15)
console.log(board)
