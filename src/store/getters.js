import formatNestableItems from '../utils/formatNestableItems.util';

export default {
  getComponents: state => state.components,
  getCurrentText: state => state.currentText,
  getNestableItems: state => formatNestableItems(state.components)
};
