const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { createToken } = require('../helpers/utils')
const { getAll, getById, getByEmail, create, update, deleteById } = require('../models/user.model');

//GET

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    }
    catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params
    try {
        const [result] = await getById(userId);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el usuario' })
        }
        res.json(result);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
});

//POST

router.post('/', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 15);

        const [result] = await create(req.body);
        const [user] = await getById(result.insertId)
        res.json(user);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
});

router.post('/login', async (req, res) => {

    const [users] = await getByEmail(req.body.email);

    if (users.length === 0) {
        return res.json({ fatal: 'Error usuario y/o constraseña' });
    }
    const user = users[0];

    const same = bcrypt.compareSync(req.body.password, user.password);

    if (!same) {
        return res.json({ fatal: 'Error usuario y/o contraseña' })
    }
    res.json({
        success: 'Benvingut' + ' ' + user.name,
        token: createToken(user)
    });
});

//PUT

router.put('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        req.body.password = bcrypt.hashSync(req.body.password, 15);
        const [result] = await update(userId, req.body);
        const [user] = await getById(userId);
        if (user.length === 0) {
            res.json({ fatal: 'El usuario no existe' })
        }
        res.json(user);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
});

//DELETE

router.delete('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const [result] = await deleteById(userId);
        res.json({ message: 'El usuario seleccionado ha sido eliminado' })
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router;
