// 1. CONFIGURACIÓN: Definí la fecha de llegada de tu celu nuevo (Año, Mes [0-11], Día)
// Nota: En JavaScript los meses van de 0 a 11 (0 = Enero, 5 = Junio, 11 = Diciembre)
const fechaObjetivo = new Date(2026, 6, 7); 

// 2. LISTA DE FRASES: Podés agregar o cambiar las que quieras acá adentro
const frases = [
    "La espera va a valer la pena ✨",
    "¡Pensá en las fotos que vas a sacar! 📸",
    "Falta menos que ayer y más que mañana 🙌",
    "El modo oscuro de las apps se va a ver tremendo 🌙",
    "Un día más es un día menos para el unboxing 📦",
    "Guardate la manija un ratito más, ya casi está 🏍️",
    "Tu nuevo compañero de código está en camino 💻",
    "Aguantá un cachito, lo bueno se hace esperar 🧉"
];

// 3. FUNCIÓN PARA CALCULAR LOS DÍAS
function actualizarContador() {
    const contenedorNumero = document.getElementById("contador-dias").querySelector(".numero");
    const hoy = new Date();

    // Seteamos las horas en cero para que el cálculo cuente días enteros perfectos
    hoy.setHours(0, 0, 0, 0);
    fechaObjetivo.setHours(0, 0, 0, 0);

    // Calculamos la diferencia en milisegundos
    const diferenciaMilisegundos = fechaObjetivo - hoy;

    // Convertimos los milisegundos a días exactos
    // (1000ms * 60s * 60m * 24h = 86.400.000 ms en un día)
    const diasRestantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    // Mostramos el resultado en la pantalla
    if (diasRestantes > 0) {
        contenedorNumero.textContent = diasRestantes;
    } else if (diasRestantes === 0) {
        contenedorNumero.textContent = "¡0!";
        document.querySelector(".etiqueta").textContent = "¡ES HOY!";
    } else {
        contenedorNumero.textContent = "🎉";
        document.querySelector(".etiqueta").textContent = "¡Ya llegó!";
    }
}

// 4. FUNCIÓN PARA CAMBIAR LA FRASE ALEATORIAMENTE
function mostrarFraseAleatoria() {
    const contenedorFrase = document.getElementById("frase-motivacional");
    
    // Elegimos un índice al azar de nuestro array de frases
    const indiceAzar = Math.floor(Math.random() * frases.length);
    
    // Inyectamos la frase en el HTML
    contenedorFrase.textContent = frases[indiceAzar];
}

// 5. EJECUCIÓN: Corremos las funciones apenas carga la página
actualizarContador();
mostrarFraseAleatoria();