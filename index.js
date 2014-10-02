var seminarjs = require('seminarjs');

seminarjs.init({

	'name': 'Seminarjs Demo',

	'favicon': 'public/favicon.ico',
	'static': ['public'],

	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'mongo': 'mongodb://localhost/my-project',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'blablabla'

});

seminarjs.set('routes', require('./private/routes'));

seminarjs.loadPlugin('chat');

seminarjs.start();