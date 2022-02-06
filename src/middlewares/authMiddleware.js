function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		var originalUrl = req.originalUrl;
		return res.redirect('/users/login?redirectTo='+originalUrl);
	}
	next();
}

module.exports = authMiddleware;