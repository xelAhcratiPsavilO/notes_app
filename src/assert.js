var expect = {
  toEqual: function(thing) {
    if (!thing) {
      throw new Error("Assertion failed: " + thing + " is not truthy");
    }
    document.write('works!');
  }
};
