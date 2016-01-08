module.exports = function (listen) {

var mongoose = require("mongoose");

var mongouri = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/tatacakes';
  
function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(mongouri, options).connection;
}

function open () {
  console.log ('mongoose open connection ' + mongouri);
  listen();
}

function error (err) {
  console.log ('ERROR mongoose ' + mongouri + '. ' + err);
}

connect()
  .on('error', error)
  .on('disconnected', connect)
  .once('open', open);
};
