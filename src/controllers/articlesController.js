function listArticles(req, res) {
    return res.send('Articles list placeholder.');
}

function getArticle(req, res) {
    const { articleId } = req.params;
    return res.send(`Article details for ID: ${articleId}`);
}

function createArticle(req, res) {
    const { title } = req.body;
    return res.status(201).send(`Article created: ${title || 'Untitled'}`);
}

module.exports = { listArticles, getArticle, createArticle };
