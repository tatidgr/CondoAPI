
Usuario = require('../Models/usuarioModel.js');

exports.index = (req, res) => {
    Usuario.get ((err, usuarios) => {
        if(err) {
            res.json({
                status: 'error',
                message: 'err'
            });
        }

        res.json({
            status: 'success',
            message: 'Usuario consultado com sucesso',
            data: usuarios
        });
    });
};

exports.new = (req, res) => {
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

    usuario.save((err) => {
        if (err)
        res.json(err);
    

        res.json({
            message: 'Novo usuario criado!',
            data: usuario
        });

    });
};

exports.view = (req, res) => {
    Usuario.findById(req.params.usuario_id, (err, usuario)=>{
        if(err){
            res.send(err);
        }

        res.json({
            message: 'Carregando dados do usuario...',
            data: usuario
        });
    });
};

exports.update = (req, res) => {
    Usuario.findById(req.params.usuario_id, (err, usuario)=>{
        if(err){
            res.send(err);
        }

        usuario.nome = req.body.name ? req.body.name : usuario.nome;
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

        usuario.save((err) => {
            if (err)
            res.json(err);
    
            res.json({
                message: 'Usuario atualizado!',
                data: usuario
            });
    
        });
    });
};

exports.delete = (req, res) => {
    Usuario.remove({
        _id: req.params.usuario_id
    }, (err, usuario) =>{
        if(err){
            res.send(err);
        }

        res.json({
            message: 'Usuario excluido!',
            data: usuario
        });

    });
};