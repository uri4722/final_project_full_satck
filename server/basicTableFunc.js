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
    const row = {};
    row.id = insertId;
    for (let i = 0; i < columns.length; i++) {
        row[columns[i]] = values[i];
    }
    return row;
}

async function search(table, searchKey, userSearch, lookFor) {
    const sql = `SELECT ${lookFor ? lookFor : "*"} FROM ${table} 
    WHERE ${searchKey} = ?`;

    const [res] = await pool.query(sql, [userSearch])
    return res;
}

async function deleteRaw(table, pkName, id) {
    const sql = `DELETE FROM ${table} 
    WHERE ${pkName} = ?`;
    const [res] = await pool.query(sql, [id])

    return res;
}

// async function test() {
//     try {
//         console.log(await deleteRaw('comments', 'comments_id', 14));
//     } catch (error) {
//         console.log(error);
//     }
// }
// test()

module.exports = { addRow, search, deleteRaw }