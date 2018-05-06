var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
} else if (env === 'production') {
  process.env.MONGODB_URI = 'mongodb://borisgern:1@ds117749.mlab.com:17749/test-todo-app-api'
}
