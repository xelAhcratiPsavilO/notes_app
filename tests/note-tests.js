
function testNote() {
  var note = new Note('I am a new note');

  document.write(' N is initialized with text ', expect(note.text).toEqual('I am a new note'));
  document.write(' N can show its text ', expect(note.show()).toEqual('I am a new note'));
};

testNote();
