function validateEmail(emailStr) { 
  // http://stackoverflow.com/a/46181/11236  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailStr);
}

function validateEmailForm(emailStr)
{
	if(validateEmail(emailStr))
	{
		return true;
	}
	else
	{
		alert("Invalid email. Please check correctness");
		return false;
	}
}
