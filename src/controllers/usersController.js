function listUsers(req, res) {
    res.send('Users list placeholder.');
}

function getUser(req, res) {
    const { userId } = req.params;
    res.send(`User details for ID: ${userId}`);
}

function createUser(req, res) {
    const { username, email } = req.body;
    res.status(201).send(`User created: ${username} (${email})`);
}

module.exports = { listUsers, getUser, createUser };
