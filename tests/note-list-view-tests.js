
function testNoteListView() {
  var notelistview = new NoteListView();

  document.write(' NLV is initialized wih an NL ', expect(notelistview.core).toBe(NoteList));
};

testNoteListView();
