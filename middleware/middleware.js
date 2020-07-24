const alumnos = require('../datos/alumnos');

function log(req, res, next) {
	console.log(`${req.method} - ${req.path} - ${JSON.stringify(req.query)} - ${JSON.stringify(req.body)}`);
	next();
}

function manejoDeErrores(err, req, res, next) {
	if (!err) {
		return next();
	}
	res.status(500).send('Se ha producido un error inesperado');
}

function validarDatos(req, res, next) {
	let nuevoAlumno = req.body;
	if (!nuevoAlumno.nombre || !nuevoAlumno.apellido || !nuevoAlumno.email) {
		return res.status(400).send('Información incompleta');
	}
	next();
}

function comprobarExistencia(req, res, next) {
	let posibleAlumno = req.body;
	let nuevoAlumno = posibleAlumno;
	alumnos.alumnos.forEach((element) => {
		if (
			element.nombre == posibleAlumno.nombre &&
			element.apellido == posibleAlumno.apellido &&
			element.email == posibleAlumno.email
		) {
			nuevoAlumno = false;
		}
	});
	if (!nuevoAlumno) {
		return res.status(409).send('El alumno ya existe');
	}
	next();
}

function comprobarQueryStringVersion(req, res, next) {
	let queryStringVersion = req.query;
	if (queryStringVersion.version > 5) {
		return next();
	}
	return res.status(422).send('No se pudo procesar');
}

module.exports = { log, manejoDeErrores, validarDatos, comprobarExistencia, comprobarQueryStringVersion };
