const Plateau = require('./assignment1');

describe('Plateau', () => {
  describe('Plateau with 5x5 grid', () => {
    const plateau = new Plateau(5, 5);
    test('plateau should be created', () => {
      expect(plateau).toBeTruthy();
    });

    test('should add a rover at coordinates 1 2 N', () => {
      const coordinates = '1 2 N';
      const [x, y, direction] = coordinates.split(' ');

      const result = plateau.addRover(x, y, direction);
      expect(result).toBeTruthy();
    });

    test('should not allow to add a rover outside of grid bounds', () => {
      const coordinates = '1 6 N';
      const [x, y, direction] = coordinates.split(' ');

      expect(() => plateau.addRover(x, y, direction)).toThrow();
    });

    test('should process instructions for movement for current rover', () => {
      const instructions = 'RMM';
      plateau.processInstruction(instructions);
      const rover = plateau.getSelectedRover();
      const roverPosition = rover.getCurrentPosition();
      console.log(
        '💩🐞 ~ file: assignment.test.js ~ line 30 ~ test ~ roverPosition',
        roverPosition,
      );

      expect(roverPosition).toEqual({
        x: 3,
        y: 2,
        direction: 'E',
      });
    });
  });
});
