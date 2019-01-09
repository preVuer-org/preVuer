import unflatten from '../utils/unflatten.util';

export default {
  getComponents: state => state.components,
  getCurrentText: state => state.currentText,
  getImagePath: state => state.imagePath,
  getNestableItems: state => unflatten(state.components)
};
