const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', () =>   {
    mainWindow = new BrowserWindow({});
    
    //Load html into window
    mainWindow.loadURL('https://www.audible.com/lib');
    mainWindow.webContents.on('new-window', (event, e) => {
        mainWindow.loadURL(e);
    });
    // .loadURL(url.format({
    //     pathname: path.join(__dirname, 'mainWindow.html'),
    //     protocol:'file',
    //     slashes: true
    // }));
    mainWindow.allowpopups = false;
    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

//Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label:'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click() {
                    app.quit();
                }
            }
        ],
    }, {
        label:'Sleeptimer',
        submenu: [
            {
                label: '5 min sleep',
                click() {
                    mainWindow.webContents.executeJavaScript(`
                        player.play();
                        setTimeout(function(){ player.pause(); }, 300000);
                    `)
                }
            },
            {
                label: '10 min sleep',
                click() {
                    mainWindow.webContents.executeJavaScript(`
                        player.play();
                        setTimeout(function(){ player.pause(); }, 600000);
                    `)
                }
            },
            {
                label: '15 min sleep',
                click() {
                    mainWindow.webContents.executeJavaScript(`
                        player.play();
                        setTimeout(function(){ player.pause(); }, 900000);
                    `)
                }
            },
            {
                label: '20 min sleep',
                click() {
                    mainWindow.webContents.executeJavaScript(`
                        player.play();
                        setTimeout(function(){ player.pause(); }, 1200000);
                    `)
                }
            },
            {
                label: '30 min sleep',
                click() {
                    mainWindow.webContents.executeJavaScript(`
                        player.play();
                        setTimeout(function(){ player.pause(); }, 1800000);
                    `)
                }
            },
        ],
        
    }
];