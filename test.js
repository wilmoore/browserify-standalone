var test = require('tape');
var path = require('path');
var meta = require('./');
var info = meta('examples/somepackage');

test('.name', function (t) {
  t.assert('name' in info);
  t.equal(info.name, 'somepackage');
  t.end();
});

test('.main', function (t) {
  t.assert('main' in info);
  t.equal(info.main, 'index.js');
  t.end();
});


test('.bundle_path', function (t) {
  t.assert('bundle_path' in info);
  t.equal(info.bundle_path, path.resolve('examples', 'somepackage', 'somepackage.js'));
  t.end();
});

test('.entry_path', function (t) {
  t.assert('entry_path' in info);
  t.equal(info.entry_path, path.resolve('examples', 'somepackage', 'index.js'));
  t.end();
});

