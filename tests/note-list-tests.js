function testNoteListIsInstantiatedWithEmptyArray() {
  var noteList = new NoteList();
  expect.toBeEmptyArray(noteList.list)
};

function testAddNoteCanAddNewNoteToList() {
  var noteList = new NoteList();
  noteList.addNote("I am a new note")
  expect.toEqual(noteList.list[0].getText() === "I am a new note")
};

function testThatShowAllNotesReturnsAllNotesStoredInList() {
  var noteList = new NoteList();
  noteList.addNote("Note Number 1")
  noteList.addNote("Note Number 2")
};

testNoteListIsInstantiatedWithEmptyArray();
testAddNoteCanAddNewNoteToList();
