const { dialog } = require('electron').remote;

const uniqueNameAlert = () => {
  const options = {
    buttons: ['Okay'],
    message: 'Component names must be unique',
  };
  const response = dialog.showMessageBox(options);
  if (response === 0) {
    return;
  }
};

export default uniqueNameAlert;