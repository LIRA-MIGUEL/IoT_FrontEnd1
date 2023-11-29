// Obtén el parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const dispositivo = urlParams.get('identificador');

// Función para obtener un solo registro por su ID
function getDispositivoById(dispositivo) {
    // Realiza una solicitud para obtener el registro por su ID, por ejemplo:
    const request = new XMLHttpRequest();
    //request.open('GET', "http://localhost:8000/dispositivos/" + dispositivo);
    request.open('GET', "https://iotbackend-640e9ed63b8e.herokuapp.com/dispositivos/" + dispositivo);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const dispositivo_e = JSON.parse(response);
        console.log(dispositivo_e);

        // Ahora puedes mostrar los datos del registro en la página "ver.html" como valores predeterminados en campos de entrada
        const identificador = document.getElementById("identificador");
        const nombre = document.getElementById("nombre");

        identificador.value = dispositivo_e.id;
        nombre.value = dispositivo_e.dispositivo;
        if (dispositivo_e.valor === 0) {
            document.getElementById("status").checked = false;
        } else if (dispositivo_e.valor === 1) {
            document.getElementById("status").checked = true;
        }
    };
}

// Llama a la función para obtener y mostrar el registro
getDispositivoById(dispositivo);

function updateData(id, nombre, valor) {
    var request = new XMLHttpRequest();
    //var url = "http://localhost:8000/dispositivos/" + id;
    var url = "https://iotbackend-640e9ed63b8e.herokuapp.com/dispositivos/"+ id;

    var data = {
        id: id,
        nombre: nombre,
        valor: valor
    };

    console.log(JSON.stringify(data));

    request.open('PUT', url, true);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert(request.responseText);
            window.location.href = '/';
        }
    }

    request.send(JSON.stringify(data));
}
