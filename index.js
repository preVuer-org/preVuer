const { app, BrowserWindow } = require('electron');
// const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer');
let win;

function createWindow() {
  win = new BrowserWindow({ width: 1800, height: 800 });

  // installExtension(VUEJS_DEVTOOLS)
  //   .then((name) => console.log(`Added Extension:  ${name}`))
  //   .catch((err) => console.log('An error occurred: ', err));
  win.loadFile('index.html');
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
