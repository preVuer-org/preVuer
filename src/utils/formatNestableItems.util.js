const formatNestableItems = (components) => {
  // create Nestable Items, store in cache: key = componentId
  const cache = components.reduce((obj, component) => {
    obj[component.id] = {
      "id": component.id,
      "text": component.title
    }
    return obj;
  },{})
  // return array of Nestable Items, 'children' property populated by checking cache
  return components.map(component => {
    return ({ 
      "id": component.id,
      "text": component.title,
      "children": component.childrenIds.map(childId => {
        return cache[childId];
      })
    })
  })
}

export default formatNestableItems;