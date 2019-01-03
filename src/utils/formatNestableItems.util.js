const formatNestableItems = (components) => {
  // create Nestable Items, store in cache: key = componentId
  const cache = components.reduce((obj, component) => {
    obj[component.id] = {
      "id": component.id,
      "text": component.title
    }
    return obj;
  },{})
  // creates array of Nestable Items, 'children' property populated by checking
  const children = new Set();
  const rawNestedComponents = components.map(component => {
    return ({ 
      "id": component.id,
      "text": component.title,
      "children": component.childrenIds.map(childId => {
        children.add(childId);
        return cache[childId];
      })
    })
  })
  const filteredComponents = rawNestedComponents.filter(component => {
    return !children.has(component.id)
  });
  return filteredComponents;
}

export default formatNestableItems;