// 1
const obtenerDatosAvion = () => {
	const nombre = document.querySelector('#nombre').value;
	const dni = document.querySelector('#dni').value;
	const telefono = document.querySelector('#telefono').value;
	const origen = document.querySelector('#origen').value;
	const destino = document.querySelector('#destino').value;
	const fecha = document.querySelector('#fecha').value;
	const hora = document.querySelector('#hora').value;
	const clase = document.querySelector('#clase').value;
	const equipaje = document.querySelector('#equipaje').value;

	return {
		nombre,
		dni,
		telefono,
		origen,
		destino,
		fecha,
		hora,
		clase,
		equipaje,
	};
};

//2
let reservasAvion = [];
const agregarReservasAvion = (reserva) => {
	reservasAvion.push(reserva);
};

//3
const mostrarReservaAvion = (reserva) => {
	const template = `
    nombre: ${reserva.nombre}
    dni: ${reserva.dni}
    teléfono: ${reserva.telefono}
    origen: ${reserva.origen}
    destino: ${reserva.destino}
    fecha: ${reserva.fecha}
    hora: ${reserva.hora}
    clase: ${reserva.clase}
    equipaje_adicional: ${reserva.equipaje}`;

	reservasAvion.push(reserva);
};

// //Manejo de datos con el formulario
// const formulario = document.querySelector('#FormReservaAvion');
// //Evento al dar click en el submit para el manejo de datos y registro de las reservas
// formulario.addEventListener('submit', (c) => {
// 	c.preventDefault();

// 	//Obtenemos los datos de la reserva
// 	const reserva = obtenerDatosAvion();

// 	//Almacenamos la reserva del avion
// 	agregarReservasAvion(reserva);

// 	//Mostrar los datos de la reserva
// 	mostrarReservaAvion(reserva);
// });
