function listUsers(req, res) {
    return res.send('Users list placeholder.');
}

function getUser(req, res) {
    const { userId } = req.params;
    return res.send(`User details for ID: ${userId}`);
}

function createUser(req, res) {
    const { username, email } = req.body;
    return res.status(201).send(`User created: ${username} (${email})`);
}

module.exports = { listUsers, getUser, createUser };
