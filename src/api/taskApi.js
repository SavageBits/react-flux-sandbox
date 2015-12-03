"use strict";

var tasks = require('./taskData').tasks;

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
};

var TaskApi = {
    getAllTasks: function() {
        return _clone(tasks);
    }
}

module.exports = TaskApi;
