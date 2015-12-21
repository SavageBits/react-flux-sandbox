"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var TaskApi = require('../api/taskApi');
var ActionTypes = require('../constants/actionTypes');

var TaskActions = {
    createTask: function(task) {
        //would need a promise or callback to handle this in real life
        // since that process would likely be async
        var newTask = TaskApi.saveTask(task);

        console.log(newTask);

        //Hey, dispatcher... go tell all the stores that a task was just created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_TASK,
            task: newTask
        });
    },

    updateTask: function(task) {
        var updatedTask = TaskApi.saveTask(task);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_TASK,
            task: updatedTask
        });
    }
}

module.exports = TaskActions;
