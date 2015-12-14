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

    loadTasks: function(successFunction) {

    },

    saveTask: function() {
        console.log("save clicked");
    }
}

module.exports = TaskApi;
