"use strict";

//mirrors key name as value
//without keyMirror, you'd just type the name and value, for ex
// CREATE_TASK: CREATE_TASK
//seems eh and possibly introducing some unnecessary complexity
var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
        INITIALIZE: null,
        CREATE_TASK: null,
        UPDATE_TASK: null
});
