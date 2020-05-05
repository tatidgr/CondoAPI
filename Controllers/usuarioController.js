
let Usuario = require('../Models/usuarioModel.js');

exports.index = get;
exports.new = novo;
exports.view = view;
exports.update = update;
exports.delete = del;

async function get (req, res) {
    try {
        const usuarios = await Usuario.find({});
        res.json({
            status: 200,
            message: 'Usuário consultado com sucesso',
            data: usuarios
        });
      } catch (err) {
        res.status(500).send(err);
      }
}

async function novo (req, res) {
    let usuario = new Usuario();
    usuario.nome = req.body.nome ? req.body.nome : usuario.nome;
    usuario.sobrenome = req.body.sobrenome;
    //usuario.genero = req.body.genero;
    usuario.celular = req.body.celular;
    //usuario.celularContato = req.body.celularContato;
    //usuario.endereco = req.body.endereco;
    usuario.nomeDoCondominio = req.body.nomeDoCondominio;
    //usuario.dataDeNascimento = req.body.dataDeNascimento;
    //usuario.PCD = req.body.PCD;
    //usuario.doencaCronica = req.body.doencaCronica;
    usuario.senha = req.body.senha;
    try {
        await usuario.save();
        res.json({
            status: 200,
            message: 'Usuário criado com sucesso'
        });
      } catch (err) {
        res.status(500).send(err);
      }
}

async function view (req, res) {
    try {
        const usuario = await Usuario.findById(req.params.usuario_id);
        res.json({
            status: 200,
            message: 'Usuário consultado com sucesso',
            data: usuario
        });
      } catch (err) {
        res.status(500).send(err);
      }
}

async function update (req, res) {
    try { 
        await Usuario.findByIdAndUpdate(req.params.usuario_id, req.body);
        res.json({
            status: 200,
            message: 'Usuário atualizado com sucesso'
        });
      } catch (err) {
        res.status(500).send(err);
      }
}

async function del (req, res) {
    try { 
        const usuario = await Usuario.findById(req.params.usuario_id);
        await Usuario.findByIdAndDelete(usuario._id);
        res.json({
            status: 200,
            message: 'Usuário excluído com sucesso'
        });
      } catch (err) {
        res.status(500).send(err);
      }
}