const middleware = require('../middleware/middleware');

let alumnos = [
	{
		id: 1,
		nombre: 'PepeA',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'dwfs',
	},
	{
		id: 2,
		nombre: 'PepeB',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'dwfs',
	},
	{
		id: 3,
		nombre: 'PepeC',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'dwfs',
	},
	{
		id: 4,
		nombre: 'PepeD',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'dwa',
	},
	{
		id: 5,
		nombre: 'PepeE',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'dwa',
	},
	{
		id: 6,
		nombre: 'PepeF',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'dwa',
	},
	{
		id: 7,
		nombre: 'PepeG',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'bigdata',
	},
	{
		id: 8,
		nombre: 'PepeH',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'bigdata',
	},
	{
		id: 9,
		nombre: 'PepeI',
		apellido: 'Perez',
		email: 'abc@asasas.com',
		comision: 'bigdata',
	},
];

let nuevoId = 10;

function postAlumnoNuevo(data) {
	let alumnoNuevo = data;
	alumnoNuevo.id = nuevoId;
	nuevoId++;
	alumnos.push(alumnoNuevo);
	return alumnos;
}

module.exports = { alumnos, postAlumnoNuevo };
