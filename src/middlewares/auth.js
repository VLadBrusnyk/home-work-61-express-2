function auth(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).send('Access denied. Provide Authorization header.');
    }
    next();
}

module.exports = auth;
