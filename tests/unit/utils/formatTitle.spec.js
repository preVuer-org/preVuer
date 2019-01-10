import formatTitle from '../../../src/utils/formatTitle.util';

describe('FormatTitle', () => {
  test('formats component title', () => {
    expect(formatTitle('one')).toBe('One');
  });
});

describe('FormatTitle', () => {
  test('removes integers', () => {
    expect(formatTitle('two3')).toBe('Two');
  });
});

describe('FormatTitle', () => {
  test('removes spaces, capitalizes character after space', () => {
    expect(formatTitle('main container')).toBe('MainContainer');
  });
});

describe('FormatTitle', () => {
  test('removes underscore, capitalizes character after space', () => {
    expect(formatTitle('app_container')).toBe('AppContainer');
  });
});

describe('FormatTitle', () => {
  test('removes punctuation', () => {
    expect(formatTitle('another.thing')).toBe('AnotherThing');
  });
});