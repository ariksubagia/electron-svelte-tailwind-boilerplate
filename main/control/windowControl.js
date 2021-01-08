let { remote } = require('electron')

function minimize(){
    getWindow().minimize()
}

function maximize(){
    getWindow().isMaximized() ? getWindow().unmaximize() : getWindow().maximize()
}

function close(){
    getWindow().close()
}

function getWindow(){
    return remote.BrowserWindow.getFocusedWindow()
}

module.exports = {
    minimize,
    maximize,
    close
}