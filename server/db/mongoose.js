var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://borisgern:1@ds117749.mlab.com:17749/test-todo-app-api');
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://borisgern:1@ds117749.mlab.com:17749/test-todo-app-api'
};
mongoose.connect(process.env.PORT ?  db.mlab: db.localhost);
module.exports = {mongoose};
