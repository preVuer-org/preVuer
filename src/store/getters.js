// import formatNestableItems from '../utils/formatNestableItems.util';
// import formatNestableItemsDeep from '../utils/formatNestableDeep.util'
import formatNestableItemsJim from '../utils/formatNestableJim';
export default {
  getComponents: state => state.components,
  getCurrentText: state => state.currentText,
  // getNestableItems: state => formatNestableItems(state.components)
  getNestableItems: state => formatNestableItemsJim(state.components)
};
