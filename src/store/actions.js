export default {
  addComponent({ commit }) {
    commit('ADD_COMPONENT');
  },
  updateText({ commit }, payload) {
    commit('UPDATE_TEXT', payload);
  },
  drawBox({ commit }) {
    commit('DRAW_BOX');
  },
  deleteComponent({ commit }, payload) {
    commit('DELETE_COMPONENT', payload);
  },
  importImageFile({ commit }, payload) {
    commit('IMPORT_IMAGE_FILE', payload);
  },
  clearWorkspace({ commit }) {
    commit('CLEAR_WORKSPACE');
  },
  changeParent({ commit }, payload) {
    commit('CHANGE_PARENT', payload);
  },
  changeColor({ commit }, payload) {
    commit('CHANGE_COLOR', payload);
  }
};
