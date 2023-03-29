const router = require('express').Router();

const { getAll, getById, getByReviewer, getByStars, create, update, deleteById } = require('../models/comments.model.js');

//GET

router.get('/', async (req, res) => {
  try {
    const [result] = await getAll()
    if (result.length === 0) {
      res.json({ message: "No hi ha comentaris disponibles" })
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
    const [result] = await getById(id)
    if (result.length === 0) {
      res.json({ fatal: "No s'ha trobat cap comentari amb la id especificada" })
    }
    res.json(result)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

router.get('/reviewer/:reviewer', async (req, res) => {
  const { reviewer } = req.params;
  try {
    const [result] = await getByReviewer(reviewer)
    if (result.length === 0) {
      res.json({ fatal: "No s'ha trobat cap reviewer amb aquesta id" })
    }
    res.json(result)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});
router.get('/stars/:starsNum', async (req, res) => {
  const { starsNum } = req.params;
  try {
    const [result] = await getByStars(starsNum)
    if (result.length === 0) {
      res.json({ fatal: "No s'han trobat comentaris amb les estrelles indicades" })
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
    const [comment] = await getById(result.insertId)
    res.json(comment)
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

//PUT

router.put('/:commentId', async (req, res) => {
  const { commentId } = req.params
  try {
    const [result] = await update(commentId, req.body)
    const [comment] = await getById(commentId)
    if (comment.length === 0) {
      res.json({ fatal: "No s'ha trobat cap comentari amb aquesta id" })
    }
    res.json(comment);
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

//DELETE

router.delete('/:commentId', async (req, res) => {
  const { commentId } = req.params;
  try {
    const [result] = await deleteById(commentId)
    res.json({ message: `El comentari amb id ${commentId} ha estat eliminat correctament` })
  }
  catch (error) {
    res.json({ fatal: error.message })
  }
});

module.exports = router