(function(exports) {
  function Note(text) {
    this.text = text
  };

  Note.prototype.show = function() {
    return this.text
  };

  exports.Note = Note
})(this);
