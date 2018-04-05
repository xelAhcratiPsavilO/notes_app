(function(exports) {
  function NoteList() {
    this.content = []
  };

  NoteList.prototype.adds = function (text) {
    this.content.push(text)
  };

  NoteList.prototype.show = function () {
    return this.content
  };

  exports.NoteList = NoteList
})(this);
