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
  if(orientation == 'vertical'){
    var  index = parseInt(padded[0])
  }else{
    var  index = parseInt(padded[1])
  }

  switch(ship){
    case 'carrier':
      if(index <= 5){
        console.log('it works')
      }
      break;
    case 'battleship':
      if(index <= 4){
      }
      break;
    case 'cruiser':
    case 'submarine':
      if(index <= 3){
      }
      break;
    case 'destroyer':
      if(index <= 2){
      }
      break;
  }
}


placePiece('carrier', 'vertical', 66)
placePiece('carrier', 'horizontal', 66)
