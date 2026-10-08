const { app, BrowserWindow } = require('electron');
const path = require('path');

console.error('[DEBUG] main.js: Starting application');
console.error('[DEBUG] main.js: app version:', app.getVersion());
console.error('[DEBUG] main.js: working directory:', process.cwd());

let mainWindow = null;

// Log app lifecycle events
['ready', 'window-all-closed', 'before-quit', 'will-quit', 'activate'].forEach(event => {
  app.on(event, () => console.error(`[DEBUG] app event: ${event}`));
});

// Intercept app.quit to see if it's being called unexpectedly
const originalQuit = app.quit.bind(app);
app.quit = function() {
  console.error('[DEBUG] app.quit() called');
  new Error().stack.split('\n').slice(1, 5).forEach(line => console.error('[DEBUG]  ', line));
  return originalQuit();
};

console.error('[DEBUG] About to load main.obfuscated.js');

try {
  require('./main.obfuscated.js');
  console.error('[DEBUG] main.obfuscated.js loaded successfully');
  console.error('[DEBUG] Waiting for app initialization...');
  
  // Fallback: if no window is created after 8 seconds, try to create one ourselves
  // Encapsulate fallback creation so it can be invoked from catch as well
  function createFallbackWindow() {
    console.error('[DEBUG] Attempting fallback window creation...');

    if (!mainWindow) {
      try {
        const { screen } = require('electron');
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        mainWindow = new BrowserWindow({
          x: 0,
          y: 0,
          width: Math.min(width, 1200),
          height: Math.min(height, 900),
          minWidth: 600,
          minHeight: 400,
          webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js')
          }
        });

        console.error('[DEBUG] Fallback: BrowserWindow created');

        const indexPath = path.join(__dirname, 'dist', 'binz-accounting-app', 'index.html');
        console.error('[DEBUG] Attempting to load:', indexPath);

        mainWindow.loadFile(indexPath).catch((err) => {
          console.error('[ERROR] Failed to load index.html:', err.message);
        });

        mainWindow.show();
        console.error('[DEBUG] Fallback: Window shown');

        mainWindow.on('closed', () => {
          mainWindow = null;
        });
      } catch (e) {
        console.error('[ERROR] Fallback window creation failed:', e.message);
        console.error(e.stack);
      }
    }
  }

  setTimeout(() => {
    console.error('[DEBUG] Watchdog timeout - main.obfuscated.js did not create window');
    createFallbackWindow();
  }, 8000);
} catch (err) {
  console.error('[ERROR] Failed to load main.obfuscated.js:', err.message);
  console.error(err.stack);
  // Don't exit — attempt fallback window creation so the app can still show the packaged UI
  try {
    createFallbackWindow();
  } catch (e) {
    console.error('[ERROR] Fallback after require failed:', e && e.message ? e.message : e);
    console.error(e && e.stack ? e.stack : 'no stack');
    // If fallback also fails, exit to avoid a hung process
    process.exit(1);
  }
}
