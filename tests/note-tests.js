function testNoteInitializedWithProperty() {
  var note = new Note('this parameter will be linked to a property of the Note object');
  expect.toEqual(note.text === 'this parameter will be linked to a property of the Note object')
};

testNoteInitializedWithProperty();
