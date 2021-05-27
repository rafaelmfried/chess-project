function pawnMovementAnalysis(peace, side, color) {
  for (let secondIndex = 0; Math.abs(secondIndex) <= Math.abs(side*16); secondIndex += side*8) {
    let moveHouse = `${Number(peace.id) + secondIndex}`;
    document.getElementById(moveHouse).style.borderColor = `${color}`;
    peace.selected = !peace.selected;
  }
}

function marksAvailableHousesToMove(peace) {
  switch (peace.className) {
    case 'w-pawn':
      console.log('w-pawn');
      if (!peace.selected) {
        pawnMovementAnalysis(peace, -1, 'red');
      } else {
        pawnMovementAnalysis(peace, -1, 'black');
      }
      break;
    case 'b-pawn':
      console.log('b-pawn');
      if (!peace.selected) {
        pawnMovementAnalysis(peace, 1, 'red');
      } else {
        pawnMovementAnalysis(peace, 1, 'black');
      }
      break;
    case 'w-rock':
    case 'b-rock':
      console.log('rock');
      break;
    case 'w-bishop':
    case 'b-bishop':
      console.log('bishop');
      break;
    case 'w-knight':
    case 'b-knight':
      console.log('knight');
      break;
    case 'w-queen':
    case 'b-queen':
      console.log('queen');
      break;
    case 'w-king':
    case 'b-king':
      console.log('king');
      break;
  }
}

let tabuleiro = document.querySelector('main');

for (let index = 0; index < 64; index += 1) {
  let selected = false;
  let house = document.createElement('div');
  let image = document.createElement('img');
  tabuleiro.appendChild(house);
  house.id = index;
  switch (true) {
    case index === 0 || index == 7:
      house.className = 'b-rock';
      image.src = 'assets/b-rock.svg';
      break;
    case index == 56 || index == 63:
      house.className = 'w-rock';
      image.src = 'assets/w-rock.svg';
      break;
    case index === 1 || index === 6:
      house.className = 'b-bishop';
      image.src = 'assets/b-bishop.svg';
      break;
    case index === 57 || index === 62:
      house.className = 'w-bishop';
      image.src = 'assets/w-bishop.svg';
      break;
    case index === 2 || index === 5:
      house.className = 'b-knight';
      image.src = 'assets/b-knight.svg';
      break;
    case index === 58 || index === 61:
      house.className = 'w-knight';
      image.src = 'assets/w-knight.svg';
      break;
    case index === 3:
      house.className = 'b-queen';
      image.src = 'assets/b-queen.svg';
      break;
    case index === 59:
      house.className = 'w-queen';
      image.src = 'assets/w-queen.svg';
      break;
    case index === 4: 
      house.className = 'b-king';
      image.src = 'assets/b-king.svg';
      break;
    case index === 60:
      house.className = 'w-king';
      image.src = 'assets/w-king.svg';
      break;
    case index > 7 && index < 16:
      house.className = 'b-pawn';
      image.src = 'assets/b-pawn.svg';
      break;
    case index > 47 && index < 56:
      house.className = 'w-pawn';
      image.src = 'assets/w-pawn.svg';
      break;
  }
  house.appendChild(image);
  house.style.backgroundColor = 'white';
  house.addEventListener('click', ( ) => {
    marksAvailableHousesToMove(house);
  });
}

console.log(tabuleiro);