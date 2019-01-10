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
  clearAllComponents({ commit }) {
    commit('CLEAR_ALL_COMPONENTS');
  },
  changeParent({ commit }, payload) {
    commit('CHANGE_PARENT', payload);
  },
  changeColor({ commit }, payload) {
    commit('CHANGE_COLOR', payload);
  },
  clearImage({ commit }) {
    commit('CLEAR_IMAGE');
  },
};
