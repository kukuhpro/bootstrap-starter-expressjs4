'use strict';

var root         = require('path').resolve();
var Middleware = require(root + '/helpers/cores/Angel/Middleware');

class authislogin extends Middleware {
	constructor() {
		super();
	}

	handle() {
		console.log("Hello i'm middleware for authenticate user");
	    return this.next();
	}
}


module.exports = authislogin;