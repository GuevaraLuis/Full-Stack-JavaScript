const listaUsuarios = document.getElementById('lista-usuarios');
const boton = document.getElementById('boton');


function reqListener () {
    const usuarios = JSON.parse(this.responseText);
    console.log(usuarios);
    const usuariosRender = usuarios.map(usuario => `<li>${usuario.nombre}</li>`).join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
}

var peticion = new XMLHttpRequest();
peticion.addEventListener("load", reqListener);

function enviarDatos(){
    const datos = {nombre: 'lunes 24'};
    fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios', {
        method: 'POST', // 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then((reponse) => response.json())
    .then(respuestaJson=>{
        console.log('respuestaJson', respuestaJson)
    })
}

function refrescar(){
    fetch("https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios")
    .then(respose=>console.log('responde', respose))
}

boton.onclick = enviarDatos;