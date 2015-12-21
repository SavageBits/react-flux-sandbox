"use strict";

var tasks = require('./taskData').tasks;
var Firebase = require('firebase');

// var fbUrl = 'https://shining-inferno-6516.firebaseio.com/';
//
// var database = new Firebase(fbUrl);

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};

var TaskApi = {
    getAllTasks: function() {
        return _clone(tasks);
    },

    getTaskById: function(taskId) {
        console.log(taskId + ', man!');
    },

    loadTasks: function(successFunction) {

    },

    saveTask: function(task) {
        console.log("taskApi:saveTask creating task");
        return {
            id: task.id,
            taskDescription: task.taskDescription
        }
    }
}

module.exports = TaskApi;
