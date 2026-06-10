// 1. CONFIGURACIÓN REAL
const FECHA_INICIO = new Date(2026, 4, 23); // 23 de Mayo de 2026 (Mes 4 es Mayo)
const DIAS_HABILES_TOTALES = 45; 

// 2. LISTA DE FRASES
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

// 3. FUNCIÓN PARA ENCONTRAR EL DÍA EXACTO DE LLEGADA
function calcularFechaEntrega(inicio, diasHabiles) {
    let fecha = new Date(inicio.getTime());
    let contados = 0;

    while (contados < diasHabiles) {
        fecha.setDate(fecha.getDate() + 1);
        const diaSemana = fecha.getDay(); // 0 = Domingo, 6 = Sábado
        
        // Solo contamos si es día de semana (Lunes a Viernes)
        if (diaSemana !== 0 && diaSemana !== 6) {
            contados++;
        }
    }
    return fecha;
}

// 4. FUNCIÓN PRINCIPAL DEL CONTADOR
function actualizarContador() {
    const contenedorNumero = document.getElementById("contador-dias").querySelector(".numero");
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Calculamos el día de entrega (va a dar 24 de Julio de 2026)
    const fechaEntrega = calcularFechaEntrega(FECHA_INICIO, DIAS_HABILES_TOTALES);
    fechaEntrega.setHours(0, 0, 0, 0);

    // Calculamos los días reales que te quedan de manija desde HOY
    const diferenciaMilisegundos = fechaEntrega - hoy;
    const diasCorridosRestantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    // Mostramos en pantalla
    if (diasCorridosRestantes > 0) {
        contenedorNumero.textContent = diasCorridosRestantes;
        document.querySelector(".etiqueta").textContent = "días de espera"; 
    } else if (diasCorridosRestantes === 0) {
        contenedorNumero.textContent = "0";
        document.querySelector(".etiqueta").textContent = "¡ES HOY! 🎉";
    } else {
        contenedorNumero.textContent = "📦";
        document.querySelector(".etiqueta").textContent = "¡Ya debería estar con vos!";
    }
}

// 5. FUNCIÓN FRASES
function mostrarFraseAleatoria() {
    const contenedorFrase = document.getElementById("frase-motivacional");
    if (contenedorFrase) {
        const indiceAzar = Math.floor(Math.random() * frases.length);
        contenedorFrase.textContent = frases[indiceAzar];
    }
}

// 6. EJECUCIÓN
actualizarContador();
mostrarFraseAleatoria();