const { dialog } = require('electron').remote
const fs = require('fs');
const path = require('path');
import componentRender from './componentRender.util';
// import { format } from 'prettier';

const createFiles = (components) => {
  dialog.showOpenDialog({
    title: 'Select a folder',
    properties: ['openDirectory']
    }, (folderPaths) => {
      // folderPaths is an array that contains all the selected paths
    if (folderPaths === undefined){
      console.log("No destination folder selected");
      return;
    } else {
      const promises = [];

      components.forEach(component => {
        const content = componentRender(component);
        const newPromise = new Promise((resolve, reject) => {
          fs.writeFile(path.join(folderPaths[0], `${component.title}.vue`), content, (err) => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
            })
          })
        promises.push(newPromise)
      })
    return Promise.all(promises)
    }
  })
}

export default createFiles;

