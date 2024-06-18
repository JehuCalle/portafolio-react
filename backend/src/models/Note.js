const { Schema, model } = require('mongoose');

const noteSchema = new Schema ({
  Nombre: String,
  Edad: {
    type: Number,
    require: true,  //PARA QUE EL DATO SEA OBLIGATORIO
    trim: true  //PARA QUE AL INGRESAR LOS DATOS SE BORREN LOS ESPACIOS EN BLANCO
  },
  Palabra: String,
  Date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true  //PARA GUARDAR LA FECHA Y HORA DE CREACION Y ACTUALIZACION DE DATOS
});

module.exports = model('Note', noteSchema);