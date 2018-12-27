const { dialog } = require('electron').remote
const fs = require('fs');
const path = require('path');

const types = [
  {
    name: 'images',
    extensions: ['jpg', 'png']
  }
];

const options = {
  filters: types,
  properties: ['openFile']
}

const importImageFile = () => {
  return dialog.showOpenDialog(options)
}

export default importImageFile;