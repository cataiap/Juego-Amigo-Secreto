// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// asinación de texto
function asignarTextoElemento(selector, texto) {
    let elemento = document.querySelector(selector);
    elemento.innerHTML = texto;
}

// 0) lista para guardar los nombres que el usuario añade
const listaAmigos = [];

// 1) función para añadir un amigo a la lista 
function agregarAmigo() {
    // 1a) Aqui obtiene y añade el valor del campo de entrada
    let nombreDeUsuario = document.querySelector('#amigo').value;

    // 1b) valida la entrada: en el caso de estar vacio mostara una alerta y sale
    if (nombreDeUsuario === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // 1c) actualiza el array creado de amigo: se utiliza el push para añadir el nombre de usuario en la lista
    listaAmigos.push(nombreDeUsuario);

    // (extra) para ver la lista crecer en pantalla (no necesario para sortear, pero útil)
    actualizarLista();

    // 1d) limpiar el campo de entrada
    document.querySelector('#amigo').value = '';
}

// 2) funcion para mostrar la lista de amigos en la pantalla
function actualizarLista () {
    //2a) obtener elemento de la lista donde agregare los nombres
    let lista = document.getElementById('listaAmigos');

    //2b) aqui limpiaremos la lista que tenemos para no duplicar
    lista.innerHTML = '';

    // 2.c) Construir el li variable
    let elementos = '';  
    for (let i = 0; i < listaAmigos.length; i++) {
        elementos += '<li>' + listaAmigos[i] + '</li>';
    }
    
    // 2.d) Asignar la cadena completa de una vez
    lista.innerHTML = elementos;
}

// 3) funcion para sortear los amigos en forma aleatoria
function sortearAmigo () {

    // 3a) aqui podemos ver si existen amigos disponible
    if (listaAmigos.length === 0) {
        alert('Por favor, añade al menos un amigo antes de realizar el sorteo');
        return;
    }

    // 3b) aqui generamos un indice aleatorio valido
    // usamos el math random que es entre 0 y 1, y multiplicamos por la lista de amigo para tener todo el rango 
    // mientras que el math floor permite redondear a un numero entero
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // 3c) aqui podemos ob tener el nombre usando el indice que creamos anteriormente
    let amigoSecreto = listaAmigos[indiceAleatorio];

    // 4d) ahora mostraremos el resultado con mensaje personalizado
    asignarTextoElemento('#resultado', `<li>El amigo secreto que te ha tocado es: ${amigoSecreto}</li>`);
}

