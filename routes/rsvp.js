var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res){
var rsvpEmail = req.body.rsvpEmail;
	//This will print in your terminal when a POST is made
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail); // Add to current data

	// Lets send our task name back so our browser knows it worked out!
	res.send(rsvpEmail)
}
