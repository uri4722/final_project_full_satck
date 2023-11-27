const { search } = require("../../basicTableFunc");


async function login(name, password) {
    const [user] = await search('users', 'user_name', name);
    if (user !== undefined) {
        if (user.password === password) {
            return user
        } else { throw 'Incorrect password' }
    } else {
        throw 'User does not exist'
    }
}


module.exports = login;