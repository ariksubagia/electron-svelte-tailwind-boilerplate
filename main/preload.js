let { contextBridge } = require('electron')

let windowControl = require('./control/windowControl')

contextBridge.exposeInMainWorld('control', { ...windowControl })