const usersControllers = {};

const User = require('../models/User');

usersControllers.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersControllers.createUsers = async (req, res) => {
  const { Texto, Pass, Numeros, Email, Primero, Segundo, Tercero, Cuarto, Opcion, Fecha, Hora, ArchivoBase64, Descripcion, Date } = req.body;
  const newUser = new User({
    Texto,
    Pass,
    Numeros,
    Email,
    Primero,
    Segundo,
    Tercero,
    Cuarto,
    Opcion,
    Fecha,
    Hora,
    ArchivoBase64,
    Descripcion,
    Date
  });
  await newUser.save();
  res.json({message: 'Usuario creado'});
};

usersControllers.getUser = async (req, res) => {
  console.log("ID DEL USUARIO: " + req.params.id); //OBTENER ID CUANDO EN EL URL SALE LA ID
  const user = await User.findById(req.params.id);
  console.log(user);
  res.json(user);
};

usersControllers.updateUser = async (req, res) => {
  const { Texto, Pass, Numeros, Email, Primero, Segundo, Tercero, Cuarto, Opcion, Fecha, Hora, ArchivoBase64, Descripcion, Date } = req.body;
  await User.findOneAndUpdate({_id: req.params.id},{
    Texto,
    Pass,
    Numeros,
    Email,
    Primero,
    Segundo,
    Tercero,
    Cuarto,
    Opcion,
    Fecha,
    Hora,
    ArchivoBase64,
    Descripcion,
    Date
  });
  res.json({message: 'Usuario actualizado'})
};

usersControllers.deleteUser = async (req, res) => {
  console.log(req.params.id);
  await User.findByIdAndDelete(req.params.id);
  res.json('Usuario eliminado');
};


module.exports = usersControllers;