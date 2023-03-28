const router = require('express').Router();

const { getAll, getById, create, update, deleteById } = require('../models/merits.model.js');

//GET

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
    if (result.length === 0) {
      res.json({ fatal: "No s'han trobat mèrits" })
    }
    res.json(result)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await getById(id);
    if (result.length === 0) {
      res.json({ fatal: "No s'ha trobat cap mèrit amb la id especificada" })
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
    const [result] = await create(req.body);
    const [merit] = await getById(result.insertId)
    res.json(merit)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

//PUT

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await update(id, req.body);
    const [merit] = await getById(id);
    res.json(merit)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

//DELETE

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const [result] = await deleteById(id)
    res.json({ message: 'El mèrit sel·leccionat ha estat eliminat' })
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

module.exports = router;
