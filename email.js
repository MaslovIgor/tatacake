var mongoose = require("mongoose");
  
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
