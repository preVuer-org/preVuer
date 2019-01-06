import getters from '../../src/store/getters';

describe('Getter functionalities', () => {
  const state = {
    currentText: 'Testing123',
    nextId: 4,
    totalComponents: 3,
    components: [{ id: 1 }, { id: 2 }, { id: 3 }],
    focusComponent: {},
    imagePath: '',
  };

  test('getComponents should return state components array', () => {
    expect(getters.getComponents(state)).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  test('getCurrentText should return a string from user input', () => {
    expect(getters.getCurrentText(state)).toBe('Testing123');
  });
});
