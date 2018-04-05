
function testNoteListView() {
  var notelist = new NoteList();
  var note1 = new Note('Favourite food: paella');
  var note2 = new Note('Favourite drink: aquarius');

  notelist.adds(note1);
  notelist.adds(note2);

  var notelistview = new NoteListView(notelist);

  document.write(' NLV is initialized wih an NL ', expect(notelistview.core).toBe(NoteList));

  document.write(' NLV can show the NL ', expect(notelistview.show()).toEqual('<ul><li><div>Favourite food: paella</div></li><li><div>Favourite drink: aquarius</div></li></ul>'));
};

testNoteListView();
