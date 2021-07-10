{
  /**
 * Let's make a game 🕹
 */

  type Position = {
    x: number;
    y: number;
  }

  let position:Position = {
    x: 0,
    y: 0
  }

  type Command = 'up' | 'down' | 'left' | 'right';

  function move(command: Command): void{
    // 객체에 직접 접근하지말고 복사하여 사용하여 리턴
    const updatePosition:Position = {...position}
    switch(command){
      case 'up':
        updatePosition.y++;
        position = updatePosition
        break;
      case 'down':
        updatePosition.y--;
        position = updatePosition
        break;
      case 'left':
        updatePosition.x--;
        position = updatePosition
        break;
      case 'right':
        updatePosition.x++;
        position = updatePosition
        break;
      default:
        throw Error('Unknown command')
    }
  }


  console.log(position); // { x: 0, y: 0}

  move('up');
  console.log(position); // { x: 0, y: 1}

  move('up');
  console.log(position); // { x: 0, y: 2}

  move('down');
  console.log(position); // { x: 0, y: 1}

  move('left');
  console.log(position); // { x: -1, y: 1}

  move('right');
  console.log(position); // { x: 0, y: 1}

}