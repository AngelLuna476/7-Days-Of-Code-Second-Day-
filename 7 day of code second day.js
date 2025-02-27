function pedirNombre() {
    let nombre = prompt('¿Cuál es tu nombre?: ');
    while (!validarNombre(nombre)) {
        alert("Por favor, introduce un nombre válido.");
        nombre = prompt('¿Cuál es tu nombre?: ');
    }
    return nombre;
}

function pedirEdad() {
    let edad = prompt(`¿Cuántos años tienes ${nombre}?: `);
    while (!validarEntero(edad)) {
        edad = prompt(`Por favor, introduce una edad válida. ¿Cuántos años tienes ${nombre}?: `);
    }
    return edad;
}

function pedirLenguaje() {
    return prompt(`¿Qué lenguaje de programación estás estudiando ${nombre}?: `);
}

function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre);
}

function validarEntero(edad) {
    edad = edad.trim();
    if (edad === "" || !/^\d+$/.test(edad)) {
        alert(`Por favor, introduce una edad válida ${nombre}.`);
        return false;
    }
    return true;
}

const nombre = pedirNombre();
const edad = pedirEdad();
const lenguaje = pedirLenguaje();

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

let pregunta = prompt(`¿Te gusta estudiar ${lenguaje} ${nombre}? Responde con el número 1 para SÍ o 2 para NO.`);

while (pregunta !== '1' && pregunta !== '2') {
    alert(`Favor de indicar alguna de las opciones anteriormente descritas ${nombre}`);
    pregunta = prompt(`¿Te gusta estudiar ${lenguaje} ${nombre}? Responde con el número 1 para SÍ o 2 para NO.`);
}

if (pregunta === '1') {
    alert(`¡Muy bien! Sigue estudiando y tendrás mucho éxito ${nombre} :D.`);
} else if (pregunta === '2') {
    alert("Oh... Mi consejo es que intentes con otros en este caso, no hay problema volver a iniciar ;)");
}

