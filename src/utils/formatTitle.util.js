const formatTitle = (string) => {
  return string
  .replace(/[a-z]+/gi,
    word => word[0].toUpperCase() + word.slice(1))
  .replace(/[-_\s0-9\W]+/gi, '');
}

export default formatTitle;
