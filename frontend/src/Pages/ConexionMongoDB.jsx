import React from "react";

function ConexionMongoDB(){
  const mongoose = require('mongoose');

  const URI = 'mongodb+srv://josiasandres56:Jehucalle123.@test01.vbyxjrw.mongodb.net/usuarios';

  mongoose.connect(URI,{
    userNewUrlParse: true,
    userCreateIndex: true
  });

  const connection = mongoose.connection;

  connection.once('open',() =>{
    console.log('Conectado a la BD')
  });

};

export default ConexionMongoDB;