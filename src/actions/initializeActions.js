var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var TaskApi = require('../api/taskApi');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                tasks: TaskApi.getAllTasks()
            }
        });
    }
};

module.exports = InitializeActions;
