// 1. Captura de datos
function obtenerDatosHotel() {
	let dato = {
		nombre: document.querySelector('#nombre').value,
		dni: document.querySelector('#dni').value,
		email: document.querySelector('#email').value,
		checkin: document.querySelector('#checkin').value,
		checkout: document.querySelector('#checkout').value,
		habitacion: document.querySelector('#habitacion').value,
		desayuno: document.querySelector('#desayuno').checked ? 'Desayuno' : '',
		gimnasio: document.querySelector('#gimnasio').checked ? 'Gimnasio' : '',
		spa: document.querySelector('#spa').checked ? ' Spa ' : '',
		comentarios: document.querySelector('#comentarios').value,
	};
	return dato;
}

//2. Almacenamiento de datos.
let reservasHotel = [];
function agregarReservasHotel(reserva) {
	reservasHotel.push(reserva);
}

//3. Mostrar resultado.
function mostrarReservaHotel(reserva) {
	const resumenHotel = document.getElementById('resumenHotel');

	resumenHotel.innerHTML = `
    <p><strong>Nombre: </strong> ${reserva.nombre}</p>
    <p><strong>DNI: </strong> ${reserva.dni}</p>
    <p><strong>Email: </strong> ${reserva.email}</p>
    <p><strong>Check-In: </strong> ${reserva.checkin}</p>
    <p><strong>Check-Out</strong> ${reserva.checkout}</p>
    <p><strong>Servicios Adicionales: </strong>
        <ul>
            <li>${reserva.desayuno}</li>
            <li>${reserva.gimnasio}</li>
            <li>${reserva.spa}</li>
        </ul>
    </p>
    <p><strong>Comentarios Adicionales: </strong> ${reserva.comentarios}</p>

    `;
}

//CUANDO DAMOS CLICK AL BOTON SE LLAMAN LAS FUNCIONES.
const formulario = document.querySelector('#formReservaHotel');
// Añadimos un evento al formulario para cuando el usuario haga submit (enviar)
formulario.addEventListener('submit', (c) => {
	c.preventDefault(); // Evita que el formulario recargue la página

	const reserva = obtenerDatosHotel(); //Añadi los datos de la funcion obtenerDatosHotel a la constante llamada reserva.

	agregarReservasHotel(reserva);

	mostrarReservaHotel(reserva);

	console.log(reservasHotel);
});
