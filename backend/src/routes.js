const express = require('express');
const crypto = require('crypto'); //Gerar um texto aleatório
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileControllers');
const SessionController = require('./Controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index);

module.exports = routes;