const {app, BrowserWindow, Menu, globalShortcut, Tray} = require('electron')

app.dock.bounce()

setTimeout(() => {
    app.dock.hide()
}, 2000)

let tray = null
let win = null

app.on('ready', () => {
    

    tray = new Tray('calculator16.png')
    let bounds = tray.getBounds()

    globalShortcut.register('CommandOrControl+Shift+B', () => {
        win.isVisible() ? win.hide() : win.show()
      })

  win = new BrowserWindow({x: bounds.x - 100 + bounds.width / 2, y: bounds.y, width: 200, height: 300, frame: false, show: false, skipTaskbar: true, toolbar: false})

  win.loadURL('https://www.tools4noobs.com/online_tools/base_convert/')
    


  win.setMenu(null)
  Menu.setApplicationMenu(null)
  

  tray.setToolTip('base10')

  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show()
  })
})



app.on('browser-window-blur', () => {
    win.hide()
})
