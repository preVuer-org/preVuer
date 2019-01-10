/**
 * Returns a string that is formatted to captialize the first letter, lose all numbers and spacing
 * @param { String } string - string from currentText in state, which is from the user input
 * @returns { String } - formatted title string
 */

const formatTitle = (string) => {
  return string
    .replace(/[a-z]+/gi,
      word => word[0].toUpperCase() + word.slice(1))
    .replace(/[-_\s0-9\W]+/gi, '');
};

export default formatTitle;
