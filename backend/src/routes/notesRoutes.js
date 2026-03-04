const express = require('express');
const notesControllers = require('../controllers/notesControllers')

const router = express.Router();


router.get('/',notesControllers.getAllnotes);
router.get('/:id',notesControllers.getNoteByid)
router.post('/',notesControllers.createNote);
router.put("/:id",notesControllers.updateNote);
router.delete("/:id",notesControllers.deleteNote);


module.exports = router;