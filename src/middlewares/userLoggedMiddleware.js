const db = require('../database/models');

async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	if (emailInCookie){
		let userFromCookie = await db.User.findOne({where: {email: emailInCookie}, include: ['rol'] });
		if (userFromCookie) {
			req.session.userLogged = userFromCookie;
			req.session.isAdmin = userFromCookie.rol.name == "admin";
		}
	}
	
	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;