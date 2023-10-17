// Importar la clase Persona desde el archivo Persona.js
import Persona from './Persona.js';

// Array para almacenar personas
const personas = [];

// Función para agregar una persona a la lista y mostrarla en la consola
function agregarPersona(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // Crear una instancia de Persona
    const persona = new Persona(nombre, apellido, fechaNacimiento, email, telefono);

    // Agregar la persona al array
    personas.push(persona);

    // Mostrar la lista de personas en la consola
    console.log("Lista de Personas:");
    console.log(personas);

    // Limpiar el formulario
    document.getElementById("formulario").reset();
}

// Agregar un evento al formulario para llamar a la función agregarPersona
document.getElementById("formulario").addEventListener("submit", agregarPersona);
