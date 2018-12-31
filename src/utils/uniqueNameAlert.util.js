const { dialog } = require('electron').remote;

const uniqueNameAlert = () => {
  const options = {
    buttons: ['Okay'],
    message: 'Component names must be unique'
  }
  let response = dialog.showMessageBox(options)
}

export default uniqueNameAlert;