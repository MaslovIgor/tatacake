var mongoose = require("mongoose");
var mongouri = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/tatacakes';
  
mongoose.connect(mongouri, function (err, res) {
	if (err) { 
		console.log ('ERROR connecting to: ' + mongouri + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + mongouri);
	}
});
var Schema = mongoose.Schema;
EmailShema = new Schema({
  email:String
});
var Email = mongoose.model('Email', EmailShema);

var saveEmail = function(email) {
  var mail = new Email();
	mail.email = email;
	mail.save(
	  function(err){
		if(err)
		{
			console.log ('ERROR saving email: ' + req.query.email + '. ' + err);
		}
	  }
	);
};
	
module.exports.saveEmail = saveEmail;
