var path = require('path');

module.exports = {
	showHome: showHome,
	showAbout: showAbout,
	showContact: showContact,
	processContact: processContact,
	showProfile: showProfile,
	show404: show404
};

function showHome(req, res) {
	res.sendFile(path.join(__dirname, '../../views/index.html'));
}

function showAbout(req, res) {
	res.json({ message: 'I am the about page' });
}

function showContact(req, res) {
	res.sendFile(path.join(__dirname, '../../views/contact.html'));
}

function processContact(req, res) {
	console.log(req.body);
	res.send('hello ' + req.body.name + '! How are you doing!?')
}

function showProfile(req, res) {
	console.log(req.params);

	//grab user profile
	//grab the post, based on post slug - Allows you to display blog post
	res.send('You are reading' + req.params.post_slug + ' by ' + req.params.username);
}

function show404(req, res) {
	res.status(404);
	res.sendFile(path.join(__dirname, '../../views/404.html'));
}