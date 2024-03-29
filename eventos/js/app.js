///Instanciar ambas clases
const eventBrite = new EventBrite();
const ui = new Interfaz();      

// Listener al buscador
document.getElementById("buscarBtn").addEventListener("click", (e) => {
    e.preventDefault();
    // leer el text del input buscar
    const texto_evento = document.getElementById("evento").value;
    const categorias = document.getElementById("listado-categorias");
    const categoria_seleccionada = categorias.options[categorias.selectedIndex].value;
    // Revisar que haya algo escrito en el buscador
    if (texto_evento === ""){
        // Mostrar mensaje para que imprima algo
        ui.mostrar_mensaje("Escribe algo en el buscador", "alert alert-danger mt-4");
    } else {
        console.log("Buscando...");
        eventBrite.obtenerEventos(texto_evento, categoria_seleccionada).then(eventos =>{
            if(eventos.eventos.events.length > 0){
                ui.limpiar_resultados();
                ui.mostrar_eventos(eventos.eventos);
            } else {
                ui.mostrar_mensaje("No hay resultados", "alert alert-danger mt-4");
            }
        });
    }
    
});