import getColor from '../utils/colors.util';
import formatTitle from '../utils/formatTitle.util';
import uniqueNameAlert from '../utils/uniqueNameAlert.util';
import getUniquePosition from '../utils/getUniquePosition.util';

export default {
  UPDATE_TEXT: (state, payload) => {
    // changing a current text in a state
    // payload is coming from input field
    state.currentText = payload;
  },
  ADD_COMPONENT: (state) => {
    // fomat component title input
    const formattedTitle = formatTitle(state.currentText);
    // check if component title already exists. if so, alert user
    let uniqueName = true;
    state.components.forEach((component) => {
      if (component.title === formattedTitle) {
        uniqueName = false;
        // electron function to show a popup alert window
        uniqueNameAlert();
      }
    });
    // if name is not unique, exit
    if (!uniqueName) {
      return;
    }
    // color assignment
    if (state.usedColors.length > 9) {
      state.usedColors = [];
    }
    const newColor = getColor(state.usedColors);
    // get unique position for component render
    const position = getUniquePosition(state.components);
    const [x, y] = position;
    // generate new component
    const newComponent = {
      ...state.component.newComponent,
      title: formattedTitle,
      id: state.nextId.toString(),
      fill: newColor,
      x,
      y
    };
    // update state
    state.components.push(newComponent);
    state.focusComponent = newComponent;
    state.totalComponents += 1;
    state.nextId += 1;
    // reset text field for next new component
    state.currentText = '';
    // put latest color used into usedColors so it can't be called again
    state.usedColors.push(newColor);
  },
  DELETE_COMPONENT: (state, payload) => {
    let target;
    state.components.forEach((element, index) => {
      if (element.id === payload) {
        target = index;
      }
    });
    state.components.forEach((component) => {
      if (component.parentId === Number(payload)) {
        component.parentId = null;
        component.parentTitle = 'none';
      }
    });
    state.components.splice(target, 1);
    state.totalComponents -= 1;
  },
  // initializing a konva rectangle
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
    // return to initial sate
    state.currentText = '';
    state.nextId = 1;
    state.totalComponents = 0;
    state.components = [];
    state.focusComponent = {};
    state.usedColors = [];
  },
  CHANGE_PARENT: (state, payload) => {
    // payload[0] is childId, payload[1] is parentId
    // convert parentTitle to parentId
    const childId = payload[0];
    let parentId;
    state.components.forEach((component) => {
      if (component.title === payload[1]) {
        parentId = component.id;
      }
    });
    // assign parentId to component, handle 'none' selection
    state.components.forEach((component) => {
      if (component.id === childId) {
        if (payload[1] === 'none') {
          component.parentId = null;
        } else {
          component.parentId = Number(parentId);
          component.parentTitle = payload[1];
        }
      }
    });
    // assign OR re-assign childId to parent's childrenIds property (array)
    state.components.forEach((component) => {
      const target = component.childrenIds.indexOf(childId);
      // if child has parent, remove from parent
      if (target !== -1) {
        component.childrenIds.splice(target, 1);
      }
      // assign OR re-assign childId to first OR new parent
      if (component.id === parentId) {
        const children = component.childrenIds.slice();
        children.push(childId);
        component.childrenIds = children;
      }
    });
  },
  CHANGE_COLOR: (state, payload) => {
    // find the component in the components array and change the fill color
    const [componentId, color] = payload;
    state.components.forEach((component) => {
      if (component.id === componentId) {
        component.fill = color;
      }
    });
  },
  CLEAR_IMAGE: (state) => {
    if (state.imagePath) {
      state.imagePath = '';
    }
  },
};
