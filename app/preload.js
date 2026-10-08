const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electron', {
//     ipcRendererInvoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
//     ipcRendererOn: (channel, listener) => ipcRenderer.on(channel, listener),
// });

const onceChannels = ['google-sign-in-callback', 'google-sign-in-callback-failure', 'google-sign-in-callback-register'];

contextBridge.exposeInMainWorld('electron', {
    ipcRendererInvoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
    ipcRendererOn: (channel, listener) => {
        if (onceChannels.includes(channel)) {
            ipcRenderer.once(channel, listener);
        } else {
            ipcRenderer.on(channel, listener);
        }
    },
});




