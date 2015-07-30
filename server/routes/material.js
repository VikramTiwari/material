'use strict';

var mean = require('meanio');

module.exports = function(Material, app, auth, database) {

	// Home route
	var material = require('../controllers/material');
	app.route('/')
		.get(material.render);

	app.get('/*', function(req, res, next) {
		res.header('workerID', JSON.stringify(mean.options.workerid));
		next(); // http://expressjs.com/guide.html#passing-route control
	});
};
