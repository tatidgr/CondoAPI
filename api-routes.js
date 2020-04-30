const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'Welcome to Condo!'
    });
});

const usuarioController = require('./Controllers/usuarioController.js');

router.route('/usuarios')
.get(usuarioController.index)
.post(usuarioController.new);

router.route('/usuarios/:usuario_id')
    .get(usuarioController.view)
    .patch(usuarioController.update)
    .put(usuarioController.update)
    .delete(usuarioController.delete);

module.exports = router;