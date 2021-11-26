function adminMiddleware(req, res, next) {
	if (!req.session.userLogged || !req.session.isAdmin) {
		return res.redirect('/');
	}
	next();
}

module.exports = adminMiddleware;