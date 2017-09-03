const {app, BrowserWindow, Menu, globalShortcut, Tray} = require('electron')
const path = require('path')
const url = require('url')

app.dock.bounce()

setTimeout(() => {
  app.dock.hide()
}, 2000)

let tray = null
let win = null

app.on('ready', () => {
    

    tray = new Tray('calc.png')
    let bounds = tray.getBounds()

    globalShortcut.register('CommandOrControl+Shift+B', () => {
        let bounds = tray.getBounds()
        win.setPosition(bounds.x - 200 + bounds.width / 2, bounds.y);
        win.isVisible() ? win.hide() : win.show()
      })

  win = new BrowserWindow({x: bounds.x - 200 + bounds.width / 2, y: bounds.y, width: 400, height: 600, frame: false, show: false, skipTaskbar: true, toolbar: false})

  win.openDevTools()

  win.loadURL('file://calculator.html')

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'calculator.html'),
    protocol: 'file:',
    slashes: true
  }))
    


  win.setMenu(null)
  Menu.setApplicationMenu(null)
  

  tray.setToolTip('base10')

  tray.on('click', () => {
    let bounds = tray.getBounds()
    win.setPosition(bounds.x - 200 + bounds.width / 2, bounds.y);
    win.isVisible() ? win.hide() : win.show()
  })
})



app.on('browser-window-blur', () => {
    win.hide()
})
