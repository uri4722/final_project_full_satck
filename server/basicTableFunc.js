const mysql = require('mysql2/promise');
require('dotenv').config({ path: "C:/Users/user/Desktop/לימודים/final_project_full_satck/server/.env" });

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
})


async function addRow(table, columns, values) {
    // Generic function to add a row in any table
    const sql = `INSERT INTO ${table} (${columns.join(',')})
    VALUES (?);`;

    const [res] = await pool.query(sql, [values]);
    const { insertId } = res;

    // return the new objact without calling the server
    const user = {};
    user.id = insertId;
    for (let i = 0; i < columns.length; i++) {
        user[columns[i]] = values[i];
    }
    return user;
}

async function search(table, searchKey, userSearch, lookFor) {
    const sql = `SELECT ${lookFor ? lookFor : "*"} FROM ${table} 
    WHERE ${searchKey} = ?`;

    const [[res]] = await pool.query(sql, [userSearch])
    return res;
}
// async function userAuthentication(pass, userNameOrEmail) {
//     const sql =
//         `  SELECT password
//              FROM users
//              WHERE  user_name = ? OR email = ? `;
//     const [[res]] = await pool.query(sql, [userNameOrEmail, userNameOrEmail]);
//     if (res) {
//         const { password } = res
//         if (pass === password) {
//             return
//         } else { throw 'Incorrect password' }

//     }
//     else {
//         throw 'User does not exist'
//     }

// }

async function test() {
    // console.log(await search('users', 'user_name', 'uri1'));
    try {
        // await userAuthentication("1234", "uri")
    } catch (error) {
        console.log(error);
    }
}
test()

module.exports = { addRow, search }