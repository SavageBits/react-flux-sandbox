"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; //nodejs module for handling events
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _tasks = [];

// "get an empty new object, add EventEmitter object properties (members, functions, etc)
// and here's more stuff it should have (inside the curlies)"
//essentially makes EventEmitter the base class of our new object
var TaskStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        console.log('emitting event');
        this.emit(CHANGE_EVENT);
    },

    getAllTasks: function() {
        return _tasks;
    },

    getTaskById: function(id) {
        return _.find(_tasks, {id: id});
    }
});

//called ANYTIME ANY action/event happens
Dispatcher.register(function(action){
    switch (action.actionType) {
        case ActionTypes.CREATE_TASK:
            _tasks.push(action.task);
            TaskStore.emitChange();
            break;
        default:
    }
});

module.exports = TaskStore;
