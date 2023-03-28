const router = require('express').Router();

const { getAll, getById, create, update, deleteById } = require('../models/skills.model.js');

//GET

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll();
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
      res.json({ fatal: 'No se encuentran skills con la id especificada' })
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
    const [skill] = await getById(result.insertId)
    res.json(skill)
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
    const [skill] = await getById(id);
    if (skill.length === 0) {
      res.json({ fatal: 'No se encuentra ningún skill con la id especificada' })
    }
    res.json(skill)
  } catch (error) {
    res.json({ fatal: error.message })
  }
});

//DELETE

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await deleteById(id)
    res.json({ message: 'La skill con la id especificada ha sido eliminada' })
  }
  catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;
