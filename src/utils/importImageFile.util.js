// Telling main Electron process to open a dialog for open an image file
const { dialog } = require('electron').remote;

const types = [
  {
    name: 'images',
    extensions: ['jpg', 'jpeg', 'png'],
  }
];

const options = {
  filters: types,
  properties: ['openFile'],
};
/**
 * Opens a dialog to open an image file
 * Returns a file path
 */
const importImageFile = () => {
  const output = dialog.showOpenDialog(options);
  console.log(output);
  if (output) {
    return output;
  }
  return '';
};

export default importImageFile;
