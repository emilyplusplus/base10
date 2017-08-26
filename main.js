const {app, BrowserWindow, Tray} = require('electron')

let tray = null
let win = new BrowserWindow({width: 800, height: 600, frame: false})

app.on('ready', () => {
    
  tray = new Tray('calculator16.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'}
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show()
  })
})
