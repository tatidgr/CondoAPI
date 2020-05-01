const mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    genero: String,
    celular:  {
        type: String,
        required: true
    },
    celularContato:  String,
    endereco: String,
    nomeDoCondominio: {
        type: String,
        required: true
    },
    dataDeNascimento: Date,
    PCD: Boolean,
    doencaCronica: String,
    senha: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }

});

let Usuario = module.exports = mongoose.model("Usuario", usuarioSchema);
module.exports.get = function (callback, limit) {
    Usuario.find(callback).limit(limit);
}