const generateOffsetPositions = () => {
  let count = 25;
  let output = [];
  for (let i = 0; i < 25; i++) {
    output.push([count, count]);
    count += 10
  }
  return output;
}


const getUniquePosition = (components) => {

  const offsetPositions = generateOffsetPositions();

  const currentPositions = components.map(component => { 
    return component.x
  })
  console.log('currentPositions: ', currentPositions, 'offsetPositions: ', offsetPositions);
  let position;

  if (currentPositions.length === 0) return offsetPositions[0];

  for (let i = 0; i < offsetPositions.length; i++) {
    if (!currentPositions.includes(offsetPositions[i][0])) {
      position = offsetPositions[i];
      break;
    }
  }
  return position;
}

export default getUniquePosition;