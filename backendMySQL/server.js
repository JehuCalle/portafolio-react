/* IMPORTAR LIBRERIAS */
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3002;
app.use(cors());

/* PARA PODER PROCESAR LOS DATOS EN FORMATO JSON QUE LLEGAN DESDE EL FRONTEND */
app.use(express.json());

/* CONEXION BASE DE DATOS */
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jehucalle123.',
  database: 'usuarios',
});

DB.connect((err) => {
  if(err){
    throw err;
  }
  console.log('CONECTADO A LA BASE DE DATOS');
});

/* INGRESAR DATOS A LA BASE DE DATOS */
app.post('/api/datos', (req, res) => {
  const {texto, pass, numeros, email, primero, segundo, tercero, cuarto, opcion, fecha, hora, archivoBase64, descripcion} = req.body;
  /* VALIDAR LOS DATOS PARA QUE NO ESTEN VACIOS */
  if(!texto || !pass || !numeros || !email || !opcion || !fecha || !hora || !archivoBase64 || !descripcion){
    return res.status(400).json({
      error: 'Faltan datos por completar',
    });
  }
  const SQL_QUERY = 'insert into datos (texto, pass, numeros, email, primero, segundo, tercero, cuarto, opcion, fecha, hora, archivoBase64, descripcion) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  DB.query(
    SQL_QUERY, [texto, pass, numeros, email, primero, segundo, tercero, cuarto, opcion, fecha, hora, archivoBase64, descripcion], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }res
        .status(201)
        .json({ id: result.insertId, texto, pass, numeros, email, primero, segundo, tercero, cuarto, opcion, fecha, hora, archivoBase64, descripcion});
    }
  );
});

/* OBTENER LOS DATOS CON get PARA LUEGO TRANSFORMARLOS EN FORMATO JSON PARA USARLOS EN EL FRONTEND */
app.get('/api/datos', (req, res) => {
  const SQL_QUERY = 'SELECT * from datos';
  DB.query(SQL_QUERY, (err, result) => {
    if(err){
      throw err;
    }
    res.json(result);
  });
});
app.get('/api/datos/:id', (req, res) => {
  const { id } = req.params;
  const SQL_QUERY = 'SELECT * FROM datos WHERE id = ?';
  
  DB.query(SQL_QUERY, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.status(200).json(result[0]);
  });
});

/* ACTUALIZAR UN REGISTRO DE LA BASE DE DATOS */
app.put('/api/datos/:id', (req, res) => {
  const { id } = req.params;
  const { texto, pass, numeros, email, primero, segundo, tercero, cuarto, opcion, fecha, hora, archivoBase64, descripcion } = req.body;
  /*
  if (!texto || !pass || !numeros || !email || !opcion || !fecha || !hora || !archivoBase64 || !descripcion) {
    return res.status(401).json({ error: 'Faltan datos por completar' });
  }
  */
  const SQL_QUERY = 'UPDATE datos SET texto = ?, pass = ?, numeros = ?, email = ?, primero = ?, segundo = ?, tercero = ?, cuarto = ?, opcion = ?, fecha = ?, hora = ?, archivoBase64 = ?, descripcion = ? WHERE id = ?';
  
  DB.query(SQL_QUERY, [texto, pass, numeros, email, primero, segundo, tercero, cuarto, opcion, fecha, hora, archivoBase64, descripcion, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.status(200).json({ message: 'Registro actualizado correctamente' });
  });
});

/* ELIMINAR UN REGISTRO DE LA BASE DE DATOS */
app.delete('/api/datos/:id', (req, res) => {
  const { id } = req.params;

  // Verifica si se proporcionó el ID
  if (!id) {
    return res.status(400).json({
      error: 'Falta el ID del registro a eliminar',
    });
  }

  const SQL_QUERY = 'DELETE FROM datos WHERE id = ?';

  DB.query(SQL_QUERY, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Verifica si algún registro fue afectado (eliminado)
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    res.status(200).json({ message: 'Registro eliminado correctamente' });
  });
});
/* HACER FUNCIONAR EL SERVIDOR CON LOS DATOS DECLARADOS ANTES*/
app.listen(PORT,()=>{
  console.log(`usando el puerto ${PORT}`);  
});