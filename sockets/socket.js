function socket(io) {
    io.on("connection", (socket) => {
        socket.on("mensaje", (mensaje) => {
            const respuesta = obtenerRespuestaDelChatBot(mensaje);
            io.emit("respuesta", respuesta);
        });
    });
}

function obtenerRespuestaDelChatBot(mensaje) {
    const mensajeLowerCase = mensaje.toLowerCase();
    switch (mensajeLowerCase) {
        case "hola":
            return "¡Hola! ¿Cómo puedo ayudarte?";
        case "¿cómo estás?":
            return "Estoy bien, gracias por preguntar.";
        case "adiós":
            return "¡Hasta luego!";
        default:
            return "No entiendo ese mensaje. ¿Puedes ser más claro?";
    }
}

module.exports = socket;
