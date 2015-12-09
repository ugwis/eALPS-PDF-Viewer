'use strict';

var self = require('sdk/self');
var PageMod = require('sdk/page-mod').PageMod;

PageMod({
  include: /^https:\/\/moodle-cloud\.ealps\.shinshu-u\.ac\.jp\/.+\/resource\/view\.php\?id=.*$/,
  contentScriptFile: self.data.url('main.js').replace('/data/', '/')
});

function main(options, callbacks) {
}

function onUnload(reason) {
}

exports.main = main;
exports.onUnload = onUnload;
