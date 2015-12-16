"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var TaskApi = require('../api/taskApi');
var ActionTypes = require('../constants/actionTypes');

var TaskActions = {
    createTask: function(task) {
        var newTask = TaskApi.saveTask(task);

        Dispatcher.dispatch({
            actionType:
            task:
        });
    }
}

module.exports = TaskActions;
