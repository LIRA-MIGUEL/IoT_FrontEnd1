function getAll() {
    var request = new XMLHttpRequest();
    //request.open('GET', "http://localhost:8000/dispositivos");
    request.open('GET', "https://iotbackend-640e9ed63b8e.herokuapp.com/dispositivos");
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("status_code: " + request.status);
        const tbody_dispositivos = document.getElementById("tbody_dispositivos");

        // Limpia el contenido existente en tbody_contactos
        tbody_dispositivos.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            const dispositivo = json[i];

            var tr = document.createElement("tr");
            var td_nombre = document.createElement("td");

            var td_estado = document.createElement("td");
            var td_opciones = document.createElement("td");

            td_nombre.innerHTML = dispositivo["dispositivo"];


            if (dispositivo["id"] != 2){
                if(dispositivo["valor"] === 0){
                    td_estado.innerHTML = "Inactivo";
                } else if (dispositivo["valor"] === 1){
                    td_estado.innerHTML = "Activo";
                } else{
                    td_estado.innerHTML = "Valor Incorrecto";
                }

                td_opciones.innerHTML = "<a href='/ver?identificador=" + dispositivo["id"] + "'>Modificar</a>"
            } else {

                td_estado.innerHTML = dispositivo["valor"];


                td_opciones.innerHTML = "<a href='/observar?identificador=" + dispositivo["id"] + "'>Ver</a>"

            }


            tr.appendChild(td_nombre);
            tr.appendChild(td_estado);
            tr.appendChild(td_opciones);

            tbody_dispositivos.appendChild(tr);
        }
    };
}
