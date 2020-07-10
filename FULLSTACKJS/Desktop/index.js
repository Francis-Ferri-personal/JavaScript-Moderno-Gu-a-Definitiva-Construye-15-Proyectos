const {app, BrowserWindow} = require("electron");

let appWindow;

function crearVentana() {
    appWindow = new BrowserWindow({

    });

    // Cuando la aplicacion es cerrada
    appWindow.on("closed", () => {
        appWindow = null;
    });

    // Cargar HTML
    appWindow.loadFile("./index.html");

    // Cuando la app este lista mostrar la ventana
    appWindow.once("reeady-to-show", () => {
        appWindow.show();
    });
}

app.on("ready", crearVentana);