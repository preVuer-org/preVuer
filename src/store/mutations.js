import getColor from '../utils/colors.util';
import uniqueNameAlert from '../utils/uniqueNameAlert.util'

export default {
  UPDATE_TEXT: (state, payload) => {
    // Changing a current text in a state
    // Payload is coming from input field
    state.currentText = payload;
  },
  // ADD_COMPONENT : (state) => {
  //   state.components.push(state.currentText)
  //   state.currentText = '';
  // }

  ADD_COMPONENT: (state) => {
    let uniqueName = true;
    // Grabbing an input and formatting it to match Vue file declarations
    const formattedTitle = state.currentText
      .replace(/[a-z]+/gi,
        word => word[0].toUpperCase() + word.slice(1))
      .replace(/[-_\s0-9\W]+/gi, '');

    state.components.forEach(component => {
      if (component.title === formattedTitle) {
        uniqueName = false;
        uniqueNameAlert()
      }
    })

    if (!uniqueName) {
      return
    }

    const newColor = getColor();
    // Generating a new component
    const newComponent = {
      ...state.component.newComponent,
      title: formattedTitle,
      id: state.nextId.toString(),
      // stroke: newColor,
      fill: newColor,
    };
    // Updating state
    state.components.push(newComponent);
    state.focusComponent = newComponent;
    state.totalComponents += 1;
    state.nextId += 1;
  },
  DELETE_COMPONENT: (state, payload) => {
    let target;
    state.components.forEach((element, index) => {
      if (element.id === payload) {
        target = index;
      }
    });

    state.components.forEach(component => {
      if (component.parentId === Number(payload)) {
        component.parentId = null;
        component.parentTitle = 'none';
      }
    })

    state.components.splice(target, 1);
  },

  // Initializing a Konva rectangle
  DRAW_BOX: (state) => {
    let rect2 = new Konva.Rect({
      x: 250,
      y: 100,
      width: 150,
      height: 90,
      fill: 'green',
      name: 'rect',
      draggable: true
    });
  },
  IMPORT_IMAGE_FILE: (state, payload) => {
    state.imagePath = payload;
  },
  CLEAR_WORKSPACE: (state) => {
    state.currentText = '',
    state.nextId = 1,
    state.totalComponents = 0,
    state.components = [],
    state.focusComponent = {}
  },
  CHANGE_PARENT: (state, payload) => {
    // payload[0] is childId, payload[1] is parentId
    // convert parentTitle to parentId
    let childId = payload[0]
    let parentId;
    state.components.forEach(component => {
      if (component.title === payload[1]) {
        parentId = component.id
      }
    })

    // assign parentId to component, handle 'none' selection
    state.components.forEach(component => {
      if (component.id === childId) {
        if (payload[1] === 'none') {
          component.parentId = null;
        } else {
          component.parentId = Number(parentId)
          component.parentTitle = payload[1];
        }
      }
    })
    // assign OR re-assign childId to parent's childrenID property (array)
    state.components.forEach(component => {
      const target = component.childrenIds.indexOf(childId)
      // if child has parent, remove from parent
      if (target !== -1) {
        component.childrenIds.splice(target, 1)
      }
      // assign OR re-assign childId to first OR new parent
      if (component.id === parentId) {
        const children = component.childrenIds.slice();
        children.push(childId);
        component.childrenIds = children;
      }
    })
  }
};
