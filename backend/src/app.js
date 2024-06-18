const express = require('express');
const cors = require('cors');
const app = express();

//  settings
app.set('port',process.env.PORT || 4000);

//  middlewares (funciones antes de llegar a las rutas)
app.use(cors());    // PERMITIR EL INTERCAMBIO DE DATOS
app.use(express.json());    //PARA QUE EL SV ENTIENDA FORMATO JSON

//  routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;