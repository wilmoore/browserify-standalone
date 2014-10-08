'use strict';

var path = require('path');
var file = require('fs');

module.exports = meta;

/**
 * Get package metadata.
 *
 * @param {String} directory
 * Package directory.
 *
 * @return {Object}
 * Package metadata.
 */

function meta(directory) {
  var package_path = resolve(directory || './');
  var package_data = read(package_path);

  return {
    name: package_data.name,
    main: package_data.main,
    entry_path: entry_path(directory, package_data.main),
    bundle_path: bundle_path(directory, package_data.name)
  };
}

/**
 * Resolve path to package.json.
 *
 * @param {String} directory
 * Package directory.
 *
 * @return {String}
 * Path to package.json.
 */

function resolve(directory) {
  var package_path = path.resolve(directory, 'package.json');
  return package_path;
}

/**
 * Read package.json (sync).
 *
 * @param {String} package_path
 * Path to package.json.
 *
 * @return {Object}
 * package.json content.
 */

function read(package_path) {
  try {
    var pkg = require(package_path);
  } catch (e) {
    throw new Error(package_path + ' does not exist.');
  }

  return pkg;
}

function nameraw(name) {
  return path.basename(name, path.extname(name));
}

function bundle_path(directory, name) {
  return path.resolve(directory, nameraw(name)) + '.js';
}

function entry_path(directory, main) {
  return path.resolve(directory, main);
}

