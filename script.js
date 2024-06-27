let precioActual = 0;
let tiposPescado = ['Merluza', 'Sardina', 'Bonito', 'Rape', 'Lubina'];
let loteActual = {};

function iniciarSubasta() {
    loteActual = {
        tipo: tiposPescado[Math.floor(Math.random() * tiposPescado.length)],
        cantidad: Math.floor(Math.random() * 100) + 50,
        precioInicial: Math.floor(Math.random() * 5) + 3
    };
    precioActual = loteActual.precioInicial;
    actualizarInterfaz();
}

function actualizarInterfaz() {
    document.getElementById('tipo-pescado').textContent = loteActual.tipo;
    document.getElementById('cantidad').textContent = loteActual.cantidad;
    document.getElementById('precio-actual').textContent = precioActual.toFixed(2);
}

function hacerPuja() {
    precioActual += 0.50;
    actualizarInterfaz();
}

document.getElementById('puja-btn').addEventListener('click', hacerPuja);

// Iniciar la primera subasta
iniciarSubasta();