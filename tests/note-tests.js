function testNoteInitializedWithProperty() {
  var note = new Note('this parameter will be linked to a property of the Note object');
  expect.toEqual(note.text === 'this parameter will be linked to a property of the Note object')
};

function testGetTextMethodReturnsText() {
  var note = new Note('My favourite language is JS');
  expect.toEqual(note.getText() === 'My favourite language is JS')
};

testNoteInitializedWithProperty();
testGetTextMethodReturnsText();
