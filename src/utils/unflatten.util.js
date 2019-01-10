/**
 * Returns an array of (nested) objects, represents parent/child relationships, used to construct TreeView
 * @param { Array } components - all components from state
 * @returns { Array } an array of objects with nested objects
 */

const unflatten = (components) => {
  // formats components into data-structure readable by tree plug-in
  const arr = components.reduce((accum, component) => {
    const { id, parentId, title } = component;
    accum.push({ id, parentId, 'text': title})
    return accum;
  },[])

  const tree = [];
  const mappedArr = {};
  let arrElem;
  let mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for(let i = 0; i < arr.length; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]['children'] = [];
  }

  for (let id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parentId) {
        mappedArr[mappedElem['parentId']]['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

export default unflatten;