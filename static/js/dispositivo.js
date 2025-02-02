// Obtén el parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const dispositivo = urlParams.get('dispositivo');
// Función para obtener un solo registro por su ID
function getDispositivoById(dispositivo) {
    // Realiza una solicitud para obtener el registro por su ID, por ejemplo:
    const request = new XMLHttpRequest();
    //request.open('GET', "http://127.0.0.1:8000/dispositivos/" + dispositivo);
    request.open('GET', "https://pruebaback-93d404ffa0df.herokuapp.com/dispositivos/" + dispositivo);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const dispositivo = JSON.parse(response);

        // Ahora puedes mostrar los datos del registro en la página "ver.html"
        const detalle = document.getElementById("detalle");
        detalle.innerHTML = `
            <p>Dispositivo: ${dispositivo.dispositivo}</p>
            <p>Valor del sensor: ${dispositivo.valor}</p>
        `;
    };
}

// Llama a la función para obtener y mostrar el registro
getDispositivoById(dispositivo);