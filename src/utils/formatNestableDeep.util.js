// const one = [
//   {"id":"3","title":"One","parentId":null,"parentTitle":"none","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#FF9800","isRootInsert":false,"elm":"[object Text]"}
// ]

// // const componentsOne = [
// //   {"id":"1","title":"App","parentId":null,"parentTitle":"none","childrenIds":["2","4","5"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#76FF03","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"2","title":"One","parentId":1,"parentTitle":"App","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#00BCD4","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"4","title":"Two","parentId":1,"parentTitle":"App","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#18FFFF","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"5","title":"Three","parentId":1,"parentTitle":"App","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#E91E63","isRootInsert":false,"elm":"[object Text]"}
// // ]

// // const components = [
// //   {"id":"1","title":"App","parentId":null,"parentTitle":"none","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#2196F3","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"2","title":"LeftContainer","parentId":1,"parentTitle":"App","childrenIds":["5"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"3","title":"CenterContainer","parentId":1,"parentTitle":"App","childrenIds":["6"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"4","title":"RightContainer","parentId":1,"parentTitle":"App","childrenIds":["7"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#F44336","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"5","title":"LeftList","parentId":2,"parentTitle":"LeftContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"6","title":"CenterBar","parentId":3,"parentTitle":"CenterContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#F50057","isRootInsert":false,"elm":"[object Text]"},
// //   {"id":"7","title":"RightTree","parentId":4,"parentTitle":"RightContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#CDDC39","isRootInsert":false,"elm":"[object Text]"}
// // ]

const preVuerComponentTree = [
  {"id":"1","title":"App","parentId":null,"parentTitle":"none","childrenIds":["2","3","4"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
  {"id":"2","title":"LeftContainer","parentId":1,"parentTitle":"App","childrenIds":["5","6"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#18FFFF","isRootInsert":false,"elm":"[object Text]"},
  {"id":"3","title":"CenterContainer","parentId":1,"parentTitle":"App","childrenIds":["7","8"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#2196F3","isRootInsert":false,"elm":"[object Text]"},
  {"id":"4","title":"RightContainer","parentId":1,"parentTitle":"App","childrenIds":["9"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
  {"id":"5","title":"ComponentList","parentId":2,"parentTitle":"LeftContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#C6FF00","isRootInsert":false,"elm":"[object Text]"},
  {"id":"6","title":"ComponentListItem","parentId":2,"parentTitle":"LeftContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#4CAF50","isRootInsert":false,"elm":"[object Text]"},
  {"id":"7","title":"TopBar","parentId":3,"parentTitle":"CenterContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
  {"id":"8","title":"CenterCanvas","parentId":3,"parentTitle":"CenterContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#00BCD4","isRootInsert":false,"elm":"[object Text]"},
  {"id":"9","title":"TreeView","parentId":4,"parentTitle":"RightContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#E91E63","isRootInsert":false,"elm":"[object Text]"},
  {"id":"10","title":"App2","parentId":null,"parentTitle":"none","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"}
]

// const test = [
//   {"id":"10","title":"App2","parentId":'1',"parentTitle":"none","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
// ]

const createComponentCache = (components) => {
  return components.reduce((accum, component) => {
    const { id, title, parentId, parentTitle, childrenIds } = component;
    accum[id] = { id, title, parentId, parentTitle, childrenIds };
    return accum;
  },{})
}

// create component cache in state to make application more performant

const formatNestableItemsDeep = (components, parent = []) => {

  const compCache = createComponentCache(components);

  components.forEach(component => {
    const { id, title, parentId, childrenIds } = component;
    const hasNoChildren = { id, 'text': title }

    if (!parentId && childrenIds.length === 0) {
      parent.push(hasNoChildren)
    } 
    
    if (childrenIds.length > 0) {
      const hasChildren = { id, 'text': title, children: [] }
      // iterate through component's childrenIds array
      compCache[id].childrenIds.forEach(childId => {
        
        const childComponent = components.filter(component => component.id === childId)
        const { id, title, childrenIds } = childComponent[0];

        if (childrenIds.length === 0) {
          hasChildren.children.push({ id, 'text': title })
        } else {
          // get array of all child components
          const grandChildren = components.filter(component => childrenIds.includes(component.id))
          hasChildren.children.push({ id, 'text': title, children: [] })
          return formatNestableItemsDeep(grandChildren, parent)
        }   
      })
      parent.push(hasChildren)
      // return formatNestableItemsDeep(childComponent, parent)
    } 
  })
  
  return parent;
}



console.log(formatNestableItemsDeep(preVuerComponentTree));


// // const formatNestableItemsDeep = (components) => {

// //   const cache = components.reduce((accum, component) => {

// //     const { id, title, parentId, childrenIds } = component;
// //     const hasNoChildren = { 'id': id, 'text': title, 'children': []};
// //     // if no children
// //     if (childrenIds.length === 0 || parentId) {
// //       if (!accum[parentId]) {
// //         accum[parentId] = [hasNoChildren]
// //       } else {
// //         accum[parentId].push(hasNoChildren)
// //       }
// //     } 
// //     return accum;
// //   },{})
// //   console.log(cache);

// //   const appendChildren = components.reduce((accum, component) => {

// //     const { id, title, parentId, childrenIds } = component;
// //     const hasChildren = { 'id': id, 'text': title, 'children': cache[Number(id)]}
    
// //     if (childrenIds.length > 0) {
// //       accum.push(hasChildren);
// //     }
// //     return accum;
// //   },[])

// //   return appendChildren;
// // }

// // console.log(formatNestableItemsDeep(one));

// // export default formatNestableItemsDeep;

// const desiredOutput = [
//   { 
//     'id': '1', 'text': 'App', 'children': [
//       { 
//         'id': '2', 'text': 'LeftContainer', 'children': [
//           { 
//             'id': '5', 'text': 'ComponentList', 'children': []
//           },
//           { 
//             'id': '6', 'text': 'ComponentListItem', 'children': []
//           }
//         ]
//       },
//       { 
//         'id': '3', 'text': 'CenterContainer', 'children': [
//           { 
//             'id': '7', 'text': 'TopBar', 'children': []
//           },
//           { 
//             'id': '8', 'text': 'CenterCanval', 'children': []
//           }
//         ]
//       },
//       { 
//         'id': '4', 'text': 'RightContainer', 'children': [
//           { 
//             'id': '9', 'text': 'TreeView', 'children': []
//           }
//         ]
//       }
//     ]
//   }
// ]