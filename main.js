const electron  = require('electron'),
    appEvent  = require('./enum/appEvents'),
    machine  = require('./model/machine'),
    app  = electron.app,
    window = electron.BrowserWindow;

let mainWindow;

app.on(appEvent.READY,()=> {
    
    // Open Window
    mainWindow = new window({
        width :  400,
        height :  400
    });
    
    machine.start((screen) => {
        mainWindow.loadURL(screen);
    });

    mainWindow.on(appEvent.CLOSED, _=>{
        // In Case of Close application 
        // Free mainWindow variable 
        // Closing machine down
        mainWindow = null;
        machine.shutDown("WINDOW CLOSE");
    });
});
