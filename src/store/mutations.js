export default {
  UPDATE_TEXT: (state, payload) => {
    state.currentText = payload;
  },
  // ADD_COMPONENT : (state) => {
  //   state.components.push(state.currentText)
  //   state.currentText = '';
  // }

  ADD_COMPONENT: (state) => {
    const formattedTitle = state.currentText
      .replace(/[a-z]+/gi,
        word => word[0].toUpperCase() + word.slice(1))
      .replace(/[-_\s0-9\W]+/gi, '');
    const newComponent = {
      ...state.newComponent,
      title: formattedTitle,
      id: state.nextId.toString(),
    };
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
    })
    state.components.splice(target, 1);
    // console.log(state.components);
  },
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
    // layer.add(rect2);
    // layer.draw();
  }
};
