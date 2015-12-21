// just a test store to listen to all events
"use strict";

var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/appDispatcher');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var DummyStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        console.log('DummyStore knows all!');
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function(action) {
    DummyStore.emitChange();
});

module.exports = DummyStore;
