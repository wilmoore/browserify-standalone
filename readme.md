# browserify-standalone

[![Build Status](http://img.shields.io/travis/wilmoore/browserify-standalone.svg)](https://travis-ci.org/wilmoore/browserify-standalone) [![NPM version](http://img.shields.io/npm/v/browserify-standalone.svg)](https://www.npmjs.org/package/browserify-standalone) [![NPM downloads](http://img.shields.io/npm/dm/browserify-standalone.svg)](https://www.npmjs.org/package/browserify-standalone) [![LICENSE](http://img.shields.io/npm/l/browserify-standalone.svg)](license)

> Browserify standalone (UMD) build based on values in your package.json (`name` and `main`).

    $ npm install browserify-standalone --save-dev

## usage

    Usage: browserify-standalone [options]

    Options:

      -h, --help                   output usage information
      -V, --version                output the version number
      -d, --directory [directory]  package directory

## example

    % ./node_modules/.bin/browserify-standalone

## package.json

Given the following `package.json`, the file `somepackage.js` will be created.

    {
      "name": "somepackage",
      "version": "1.0.0",
      "description": "some package",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "MIT"
    }

## License

  [MIT](license)

