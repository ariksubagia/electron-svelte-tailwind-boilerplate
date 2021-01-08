const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

require('electron-reload')(__dirname,{
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd')
});

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    window = new BrowserWindow({
        frame: false,
        width: width / 1.25,
        height: height / 1.25,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, "main", "preload.js")
        }
    });

    window.loadFile('public/index.html');
    window.webContents.openDevTools()
    window.maximize()
};

let window = null;

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());