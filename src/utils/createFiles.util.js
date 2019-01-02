const { dialog } = require('electron').remote;
const fs = require('fs');
const path = require('path');

import componentRender from './componentRender.util';
// import { format } from 'prettier';
/**
 * 
 * @param { Array } components
 * Creates Vue files from components array 
 */
const createFiles = (components) => {
  const comp = components;
  dialog.showOpenDialog(
    {
      title: 'Select a folder',
      properties: ['openDirectory']
    }, async (folderPaths) => {
      // folderPaths is an array that contains all the selected paths
      if (folderPaths === undefined) {
        console.log('No destination folder selected');
        return;
      }
      // added async await here to make sure the folder is created first
      await fs.mkdir(path.join(folderPaths[0], '/preVuer-components'), (err) => {
        if (err) console.log('Failed to write folder', err);
        else console.log('made folder');
      });
      // after folder is created, then create the files inside
      const promises = [];
      components.forEach((component) => {
        const content = componentRender(component, comp);
        // Writing to filesystem, storing attempts to write a file in a Promise and resolving all the promises at once
        const newPromise = new Promise((resolve, reject) => {
          fs.writeFile(path.join(folderPaths[0] + '/preVuer-components', `${component.title}.vue`), content, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            // file written successfully
          });
        });
        promises.push(newPromise);
      });
      return Promise.all(promises);
    },
  );
};

export default createFiles;
