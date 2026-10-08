const { app, BrowserWindow } = require('electron');

console.error('[TEST] Starting test window creation');

app.on('ready', () => {
  console.error('[TEST] App ready event fired');
  
  try {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
        preload: null
      }
    });
    
    console.error('[TEST] BrowserWindow created, ID:', win.id);
    
    // Try to load a simple HTML file
    win.loadFile('./offline-test.html').then(() => {
      console.error('[TEST] File loaded successfully');
    }).catch((err) => {
      console.error('[TEST] File load error:', err.message);
    });
    
    win.show();
    console.error('[TEST] Window shown');
  } catch (e) {
    console.error('[TEST] Exception during window creation:', e.message);
    console.error(e.stack);
  }
});

app.on('window-all-closed', () => {
  console.error('[TEST] window-all-closed event');
  app.quit();
});

console.error('[TEST] Script loaded, waiting for ready event');
