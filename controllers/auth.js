const userService = require('../services/user');


async function register(req, res, next) {
    const { username, password } = req.body;

    return await req.auth.register(username, password);
}


module.exports = {
    register
}