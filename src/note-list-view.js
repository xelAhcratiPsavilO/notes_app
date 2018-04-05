(function(exports) {
  function NoteListView(notelist) {
    this.core = notelist;
  };

  NoteListView.prototype.show = function () {
  var ultag = ['<ul>'];

    this.core.show().forEach(function(note) {
      ultag.push('<li><div>' + note.text + '</div></li>');
    });

    ultag.push('</ul>');
    return ultag.join('');
  };

  exports.NoteListView = NoteListView
})(this);
