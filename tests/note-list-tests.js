
function testNoteList() {
  var notelist = new NoteList();
  var note1 = new Note('I am the 1st note');
  var note2 = new Note('I am the 2nd note');
  
  document.write('NL is initialized wih an empty array', expect(notelist.content).toBeEmpty());

  notelist.adds(note1);

  document.write('NL can add notes to its array', expect(notelist.content).toNotToBeEmpty());

  notelist.adds(note2);

  document.write('NL can show all the notes on its array', expect(notelist.show()[1]).toEqual(note2));
};

testNoteList();
