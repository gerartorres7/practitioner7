const {Router} = require('express');
const router = Router()

const {renderNoteForm, createNewNote, renderNotes, renderEditForm, updateNote, deleteNote} = require('../controllers/notes.controller');

//get optener datos, post enviar datos

//Nueva operacion
router.get('/operaciones/add', renderNoteForm);

router.post('/operaciones/new-operacion', createNewNote);

//Get Todas las operaciones
router.get('/operaciones', renderNotes);

//Editar operaciones
router.get('/operaciones/edit/:id', renderEditForm);
//Actualizar datos del formulario
router.put('/operaciones/edit/:id', updateNote);

//Eliminar operaciones
router.delete('/operaciones/delete/:id', deleteNote);

module.exports = router
