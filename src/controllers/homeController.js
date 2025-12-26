function getHome(req, res) {
    req.session.views = (req.session.views || 0) + 1;
    res.send(`Welcome! Session views: ${req.session.views}`);
}

module.exports = { getHome };
