import getColor from '../utils/colors.util';
import formatTitle from '../utils/formatTitle.util';
import uniqueNameAlert from '../utils/uniqueNameAlert.util';
import getUniquePosition from '../utils/getUniquePosition.util';

export default {
  UPDATE_TEXT: (state, payload) => {
    state.currentText = payload;
  },
  ADD_COMPONENT: (state) => {
    const formattedTitle = formatTitle(state.currentText);
    let uniqueName = true;
    state.components.forEach((component) => {
      if (component.title === formattedTitle) {
        uniqueName = false;
        uniqueNameAlert();
      }
    });
    if (!uniqueName) {
      return;
    }
    if (state.usedColors.length > 9) {
      state.usedColors = [];
    }
    const newColor = getColor(state.usedColors);
    const position = getUniquePosition(state.components);
    const [x, y] = position;
    const newComponent = {
      ...state.component.newComponent,
      title: formattedTitle,
      id: state.nextId.toString(),
      fill: newColor,
      x,
      y
    };
    state.components.push(newComponent);
    state.focusComponent = newComponent;
    state.totalComponents += 1;
    state.nextId += 1;
    state.currentText = '';
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
  CLEAR_ALL_COMPONENTS: (state) => {
    state.currentText = '';
    state.nextId = 1;
    state.totalComponents = 0;
    state.components = [];
    state.focusComponent = {};
    state.usedColors = [];
  },
  CHANGE_PARENT: (state, payload) => {
    const childId = payload[0];
    let parentId;
    state.components.forEach((component) => {
      if (component.title === payload[1]) {
        parentId = component.id;
      }
    });
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
    state.components.forEach((component) => {
      const target = component.childrenIds.indexOf(childId);
      if (target !== -1) {
        component.childrenIds.splice(target, 1);
      }
      if (component.id === parentId) {
        const children = component.childrenIds.slice();
        children.push(childId);
        component.childrenIds = children;
      }
    });
  },
  CHANGE_COLOR: (state, payload) => {
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
