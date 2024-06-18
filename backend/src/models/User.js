const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  Texto: String,
  Pass: String,
  Numeros: {
    type: Number,
    require: true,
    trim: true
  },
  Email: String,
  Primero: Boolean,
  Segundo: Boolean,
  Tercero: Boolean,
  Cuarto: Boolean,
  Opcion: String,
  Fecha: String,
  Hora: String,
  ArchivoBase64: String,
  Descripcion: String,
  Date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = model('User', userSchema);