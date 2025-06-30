// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
beforeEach(function() {
  this.addMatchers({
    toSubclass: function(func) { return this.actual instanceof func; }
  });
});
