const { dialog } = require('electron').remote;

/**
 * Fires the Electron dialog box to show an alert to confirm clear image
 */

const clearAllComponents = () => {
  // options = buttons for electron dialog box
  const options = {
    buttons: ['Yes', 'Cancel'],
    message: 'Do you want to clear all components?'
  }
  // ask user in a popup alert box to see if they really want to clear their workspace
  return dialog.showMessageBox(options);
};

export default clearAllComponents;