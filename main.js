const {app, BrowserWindow, Menu, globalShortcut, Tray} = require('electron')

app.dock.hide()

let tray = null
let win = null

app.on('ready', () => {
    

    tray = new Tray('calculator16.png')
    let bounds = tray.getBounds()
    console.log(bounds)

    globalShortcut.register('CommandOrControl+Shift+B', () => {
        win.isVisible() ? win.hide() : win.show()
      })

  win = new BrowserWindow({x: bounds.x - 100 + bounds.width / 2, y: bounds.y, width: 200, height: 300, frame: false, show: false, skipTaskbar: true, toolbar: false})
    


  win.setMenu(null)
  Menu.setApplicationMenu(null)
  

  tray.setToolTip('This is my application.')

  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show()
  })
})

app.on('browser-window-blur', () => {
    win.hide()
})
