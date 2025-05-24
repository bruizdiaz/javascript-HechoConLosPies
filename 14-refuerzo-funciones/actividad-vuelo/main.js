// 1. Captura de datos del Form
const obtenerDatosAvion = () => {
	let payload = {
		// Obtenemos el valor de cada input por su id
		nombre: document.querySelector('#nombre').value,
		dni: document.querySelector('#dni').value,
		telefono: document.querySelector('#telefono').value,
		origen: document.querySelector('#origen').value,
		destino: document.querySelector('#destino').value,
		fecha: document.querySelector('#fecha').value,
		hora: document.querySelector('#hora').value,
		clase: document.querySelector('#clase').value,
		// Para el checkbox, usamos .checked para saber si está marcado o no
		equipaje: document.querySelector('#equipaje').checked
			? 'Incluye equipaje Adicional' // Si está marcado, este texto
			: 'No incluye equipaje adicional', // Si no está marcado, este texto
	};

	return payload; // Retornamos el objeto con todos los datos de la reserva

	// let fechaForm = document.querySelector('#fecha').value;
	// const fechaObj = new Date(fechaForm);
	// let fechaLocal = fechaObj.toLocaleDateString()
};

// 2. Almacenamiento de reservas
// Creamos un array vacío donde se guardarán todas las reservas realizadas
let reservasAvion = [];

// Esta función recibe una reserva (objeto) y la agrega al array de reservas
const agregarReservasAvion = (reserva) => {
	reservasAvion.push(reserva); // Añadimos la reserva al array
};

// 3. Mostrar resultado en la web
// Esta función recibe una reserva y muestra sus datos en el elemento con id 'resumenAvion'
const mostrarReservaAvion = (reserva) => {
	// Usamos innerHTML para insertar el resumen de la reserva en el div correspondiente
	const resumenAvion = document.getElementById('resumenAvion');
	resumenAvion.innerHTML = `
        <p><strong>Nombre: </strong> ${reserva.nombre}</p>
        <p><strong>DNI: </strong> ${reserva.dni}</p>
        <p><strong>Telefono: </strong> ${reserva.telefono}</p>
        <p><strong>Origen: </strong> ${reserva.origen}</p>
        <p><strong>Destino: </strong> ${reserva.destino}</p>
        <p><strong>Fecha: </strong> ${reserva.fecha}</p>
        <p><strong>Hora: </strong> ${reserva.hora}</p>
        <p><strong>Clase: </strong> ${reserva.clase}</p>
        <p><strong>¿Equipaje Adicional?: </strong> ${reserva.equipaje}</p>
    `;
};

// 4. Manejo de datos con el formulario
// Seleccionamos el formulario por su id para poder trabajar con él
const formulario = document.querySelector('#formReservaAvion');

// Añadimos un evento al formulario para cuando el usuario haga submit (enviar)
formulario.addEventListener('submit', (c) => {
	c.preventDefault(); // Evita que el formulario recargue la página

	// Obtenemos los datos del formulario en un objeto
	const reserva = obtenerDatosAvion();

	// Guardamos la reserva en el array
	agregarReservasAvion(reserva);

	// Mostramos la reserva recién registrada en la web
	mostrarReservaAvion(reserva);

	// Mostramos en consola todas las reservas
	console.log(reservasAvion);
});
