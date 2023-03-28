
const router = require('express').Router();

const { getAll, getByClase, getById, create, update, deleteById } = require('../models/studies.model');

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

router.get('/clase/:clase', async (req, res) => {
  const { clase } = req.params;
  try {
    const [result] = await getByClase(clase);
    if (clase.length === 0) {
      res.json({ fatal: 'No hay estudios con la clase especificada' })
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
      res.json({ fatal: 'No hay estudios con la id especificada' })
    }
    res.json(result)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

//POST

router.post('/', async (req, res) => {
  try {
    const [result] = await create(req.body)
    const [study] = getById(result.insertId)
    res.json(study)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

//PUT

router.put('/:studyId', async (req, res) => {
  const { studyId } = req.params;

  try {
    const [result] = await update(studyId, req.body)
    const [study] = await getById(studyId);
    if (study.length === 0) {
      res.json({ fatal: 'No se encuentra el estudio especificado' })
    }
    res.json(study)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

//DELETE

router.delete('/:studyId', async (req, res) => {
  const { studyId } = req.params
  try {
    const [result] = await deleteById(studyId);
    res.json({ message: 'El estudio especificado ha sido eliminado correctamente' })
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

module.exports = router;
