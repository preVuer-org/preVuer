const generateOffsetPositions = () => {
  let count = 25;
  const output = [];
  for (let i = 0; i < 1000; i++) {
    output.push([count, count]);
    count += 10;
  }
  return output;
};


const getUniquePosition = (components) => {
  // get position options for new component
  const offsetPositions = generateOffsetPositions();
  // get an array of current positions
  const currentPositions = components.map(component => component.x);
  let position;

  if (currentPositions.length === 0) return offsetPositions[0];

  for (let i = 0; i < offsetPositions.length; i++) {
    if (!currentPositions.includes(offsetPositions[i][0])) {
      position = offsetPositions[i];
      break;
    }
  }
  return position;
};

export default getUniquePosition;
