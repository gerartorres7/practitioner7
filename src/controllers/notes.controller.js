const notesCtrl = {};

const Note = require('../models/Note');


notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note')
};

notesCtrl.createNewNote = (req, res) => {
  const {title, description} = req.body;
  const newNote = new Note({title , description});
  newNote.save();
  res.send('Nueva Operacion')
};

notesCtrl.renderNotes = (req, res) => {
  const notes = db.genbetadev.find();
  res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = (req, res) => {
  res.send('Editar Operacion')
};

notesCtrl.updateNote = (req, res) => {
  res.send('Actualizar Operacion')
};

notesCtrl.deleteNote = (req, res) => {
  res.send('Eliminar Operacion')
};


module.exports = notesCtrl;
