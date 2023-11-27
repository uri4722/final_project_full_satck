const { search } = require("../../basicTableFunc");


async function login(userName, password) {
    const user = await search('users', 'user_name', userName);
    if (user !== undefined) {
        if (user.password === password) {
            return user
        } else { throw 'Incorrect password' }
    } else {
        throw 'User does not exist'
    }
}

// login("uri", 1234)
// async function test() {

//     // console.log(await search('users', 'user_name', 'uri1'));
//     try {
//         // console.log(await login("uri1", '1234'));
//         // await userAuthentication("1234", "uri")
//     } catch (error) {
//         console.log(error);
//     }
// }
// test()
module.exports = login;