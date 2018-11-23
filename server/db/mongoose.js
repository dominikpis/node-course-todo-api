var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('https://my-api-38a2d.firebaseio.com/');
mongoose.co
module.exports = {mongoose};