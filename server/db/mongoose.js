var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://borisgern:1@ds117749.mlab.com:17749/test-todo-app-api');
module.exports = {mongoose};
