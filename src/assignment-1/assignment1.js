/*
Sample:

Lower bounds: 0,0
INPUT:
3 3   (upper bounds)
1 2 N (rover position and facing direction)
RMM   (instructions for movement)

OUTPUT:  3 2 E (latest position and facing direction)
*/

class Plateau {
  constructor(upperX, upperY) {
    this.gridSize = {
      x: 0,
      y: 0,
      x1: upperX,
      y1: upperY,
    };

    this.landedRovers = [];
    this.selectedRover = null;
    this.selectedRoverDirection = null;
  }

  isOutsideBounds(posX, posY) {
    if (
      posX >= this.gridSize.x1 + 1
      || posX <= this.gridSize.x - 1
      || posY >= this.gridSize.y1 + 1
      || posX <= this.gridSize.y - 1
    ) {
      return true;
    }
    return false;
  }

  addRover(posX, posY, direction) {
    if (this.isOutsideBounds(posX, posY)) {
      throw new Error('Rover cannot be placed outside of grid');
    }
    const rover = new Rover(posX, posY, direction);
    this.landedRovers.push(rover);

    // set the first rover as selected rover
    if (this.landedRovers.length === 1) {
      this.selectedRover = rover;
      this.selectedRoverDirection = direction;
    }

    return true;
  }

  selectRover(index) {
    const roversCount = this.landedRovers.length;
    if (roversCount === 0) {
      throw new Error('There are no rovers on this plateau');
    } else if (index > roversCount) {
      throw new Error(`Rover at index ${index} does not exists`);
    }

    const rover = this.landedRovers[index];
    // update the direction if the selected rover changes
    if (rover !== this.selectedRover) {
      console.log('current dir: ', rover.getCurrentPosition().direction);
      this.selectedRoverDirection = rover.getCurrentPosition().direction;
    }

    this.selectedRover = rover;
  }

  getSelectedRover(index) {
    return this.selectedRover;
  }

  moveRover(posX, posY, direction) {
    if (!this.isOutsideBounds(posX, posY)) {
      this.selectedRoverDirection = direction;
      this.selectedRover.move(posX, posY, direction);
      return true;
    }
    return false;
  }

  processInstruction(instructions) {
    console.log(
      '💩🐞 ~ file: assignment1.js ~ line 87 ~ Plateau ~ processInstruction ~ instructions',
      instructions,
    );
    const instructionsArr = instructions.split('');

    instructionsArr.forEach((instruction) => {
      const currentPosition = this.selectedRover.getCurrentPosition();
      console.log(
        '💩🐞 ~ file: assignment1.js ~ line 95 ~ Plateau ~ instructionsArr.forEach ~ {currentPosition, instruction}',
        { currentPosition, instruction },
      );
      const direction = this.selectedRoverDirection;
      switch (instruction) {
        // move forward
        case 'M': {
          if (direction === 'N') {
            this.moveRover(currentPosition.x, currentPosition.y + 1, direction);
          } else if (direction === 'S') {
            this.moveRover(currentPosition.x, currentPosition.y - 1, direction);
          } else if (direction === 'E') {
            this.moveRover(currentPosition.x + 1, currentPosition.y, direction);
          } else if (direction === 'W') {
            this.moveRover(currentPosition.x - 1, currentPosition.y, direction);
          }
          break;
        }
        // move to left
        case 'L': {
          if (direction === 'N') {
            // move to west
            this.selectedRoverDirection = 'W';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          } else if (direction === 'W') {
            // move to south
            this.selectedRoverDirection = 'S';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          } else if (direction === 'S') {
            // move to east
            this.selectedRoverDirection = 'E';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          } else if (direction === 'E') {
            // move to north
            this.selectedRoverDirection = 'N';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          }

          break;
        }
        // move to right
        case 'R': {
          if (direction === 'N') {
            // move to east
            this.selectedRoverDirection = 'E';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          } else if (direction === 'E') {
            // move to south
            this.selectedRoverDirection = 'S';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          } else if (direction === 'S') {
            // move to west
            this.selectedRoverDirection = 'W';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          } else if (direction === 'W') {
            // move to north
            this.selectedRoverDirection = 'N';
            this.moveRover(currentPosition.x, currentPosition.y, this.selectedRoverDirection);
          }
          break;
        }

        default:
          break;
      }

      const newPos = this.selectedRover.getCurrentPosition();
      console.log(
        '💩🐞 ~ file: assignment1.js ~ line 203 ~ Plateau ~ instructionsArr.forEach ~ {newPos, instruction}',
        { newPos, instruction },
      );
    });
  }
}

class Rover {
  constructor(posX, posY, direction) {
    this.posX = posX;
    this.posY = posY;
    this.direction = direction;
  }

  move(posX, posY, direction) {
    this.posX = posX;
    this.posY = posY;
    this.direction = direction;
  }

  getCurrentPosition() {
    return { x: this.posX, y: this.posY, direction: this.direction };
  }
}

module.exports = Plateau;
