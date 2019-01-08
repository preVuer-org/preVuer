import unflatten from '../../../src/utils/unflatten.util';

describe('Unflatten functionality', () => {
  const components = [
    {"id":"1","title":"App","parentId":null,"parentTitle":"none","childrenIds":["2","3","4"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
    {"id":"2","title":"LeftContainer","parentId":1,"parentTitle":"App","childrenIds":["5","6"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#18FFFF","isRootInsert":false,"elm":"[object Text]"},
    {"id":"3","title":"CenterContainer","parentId":1,"parentTitle":"App","childrenIds":["7","8"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#2196F3","isRootInsert":false,"elm":"[object Text]"},
    {"id":"4","title":"RightContainer","parentId":1,"parentTitle":"App","childrenIds":["9"],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
    {"id":"5","title":"ComponentList","parentId":2,"parentTitle":"LeftContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#C6FF00","isRootInsert":false,"elm":"[object Text]"},
    {"id":"6","title":"ComponentListItem","parentId":2,"parentTitle":"LeftContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#4CAF50","isRootInsert":false,"elm":"[object Text]"},
    {"id":"7","title":"TopBar","parentId":3,"parentTitle":"CenterContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#9C27B0","isRootInsert":false,"elm":"[object Text]"},
    {"id":"8","title":"CenterCanvas","parentId":3,"parentTitle":"CenterContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#00BCD4","isRootInsert":false,"elm":"[object Text]"},
    {"id":"9","title":"TreeView","parentId":4,"parentTitle":"RightContainer","childrenIds":[],"x":100,"y":100,"height":50,"width":50,"stroke":"black","strokeWidth":3,"strokeScaleEnabled":false,"draggable":true,"opacity":0.5,"fill":"#E91E63","isRootInsert":false,"elm":"[object Text]"}
  ];

  const result = [
    { 
      'id': '1',
      'text': 'App',
      'children': [
        { 
          'id': '2', 'text': 'LeftContainer', 'children': [
            { 
              'id': '5', 'text': 'ComponentList', 'children': []
            },
            { 
              'id': '6', 'text': 'ComponentListItem', 'children': []
            }
          ]
        },
        { 
          'id': '3', 'text': 'CenterContainer', 'children': [
            { 
              'id': '7', 'text': 'TopBar', 'children': []
            },
            { 
              'id': '8', 'text': 'CenterCanvas', 'children': []
            }
          ]
        },
        { 
          'id': '4', 'text': 'RightContainer', 'children': [
            { 
              'id': '9', 'text': 'TreeView', 'children': []
            }
          ]
        }
      ]
    }
  ];

  test('Unflatten should take state and grab components and return an array of nested objects', () => {
    expect(unflatten(components)).toMatchObject(result);
  });
});
