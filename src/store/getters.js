import unflatten from '../utils/unflatten.util';

export default {
  getComponents: state => state.components,
  getCurrentText: state => state.currentText,
  getNestableItems: state => unflatten(state.components),
  getImagePath: state => state.imagePath,
};
