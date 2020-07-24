const express = require('express');
const middleware = require('./middleware/middleware');
const alumnos = require('./datos/alumnos');

const server = express();

server.use(express.json());
server.use(middleware.log);

server.post('/contacto', middleware.validarDatos, middleware.comprobarExistencia, (req, res) => {
	let alumnoNuevo = req.body;
	alumnos.postAlumnoNuevo(alumnoNuevo);
	res.status(200).send('Alumno nuevo ingresado');
});

server.get('/demo', middleware.comprobarQueryStringVersion, (req, res) => {
	res.status(200).send(alumnos.alumnos);
});

server.use(middleware.manejoDeErrores);

server.listen(3000, () => {
	console.log('Server iniciado');
});
