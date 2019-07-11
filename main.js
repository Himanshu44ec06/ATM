const electron  = require('electron'),
     appEvent  = require('./enum/appEvents'),
    machine  = require('./model/machine'),
    app  = electron.app,
    window = electron.BrowserWindow;

let mainWindow;

app.on(appEvent.READY,()=> {

    machine.start();
    mainWindow = new window({
        width :  400,
        height :  400
    });
    console.log(__dirname);
    mainWindow.loadURL(`file://${__dirname}/screen/homepage.html`);

    mainWindow.on(appEvent.CLOSED, _=>{
        mainWindow = null;
        machine.shutDown("WINDOW CLOSE");
    });
});
