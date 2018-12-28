import getColor from '../utils/colors.util';

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
    // Grabbing an input and formatting it to match Vue file declarations
    const formattedTitle = state.currentText
      .replace(/[a-z]+/gi,
        word => word[0].toUpperCase() + word.slice(1))
      .replace(/[-_\s0-9\W]+/gi, '');
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
  }
};
