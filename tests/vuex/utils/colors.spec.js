import getColor from '../../../src/utils/colors.util';

describe('Randomized box colors', () => {
  const state = {
    usedColors: [],
  };

  test('Running function should return a color string', () => {
    expect(getColor(state.usedColors)).toMatch('#');
  });
});
