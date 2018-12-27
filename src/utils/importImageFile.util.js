const { dialog } = require('electron').remote;

const types = [
  {
    name: 'images',
    extensions: ['jpg', 'jpeg', 'png']
  }
];

const options = {
  filters: types,
  properties: ['openFile']
};

const importImageFile = () => {
  const output = dialog.showOpenDialog(options);
  console.log(output);
  if (output) {
    return output;
  }
  return '';
};

export default importImageFile;
