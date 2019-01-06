import colors from '../../../src/utils/colors.util';

describe('Randomized box colors', () => {
  test('Running function should return a color string', () => {
    expect(colors()).toMatch('#');
  });
});
