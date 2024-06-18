const notesControllers = {};

const Note = require('../models/Note');

notesControllers.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesControllers.createNotes = async (req, res) => {
  console.log(req.body);  //NOTAS QUE ENVIA EL CLIENTE
  const { Nombre, Edad, Palabra, Date } = req.body;
  console.log("Nombre obtenido de los datos recibidos: " + Nombre);  //CONTENIDO DE TEST OBTENIDO DESDE LOS DATOS ENVIADOS POR EL CLIENTE
  const newNote = new Note({
    Nombre,
    Edad,
    Palabra,
    Date
  });
  console.log( "Nueva Nota agregada: " + newNote);
  await newNote.save(); //PARA GUARDAR LA NUEVA NOTA EN LA BD
  res.json({message: 'Note guardada'})
};

notesControllers.getNote = async (req, res) => {
  console.log("ID DEL USUARIO: " + req.params.id); //OBTENER ID CUANDO EN EL URL SALE LA ID
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json(note);
};

notesControllers.updateNote = async (req, res) => {
  const { Nombre, Edad, Palabra } = req.body;
  await Note.findOneAndUpdate({_id: req.params.id}, {
    Nombre,
    Edad,
    Palabra
  });
  res.json({message: 'Note actualizada'});
};

notesControllers.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);

  res.json({message: 'Note eliminada'});  
};

module.exports = notesControllers;