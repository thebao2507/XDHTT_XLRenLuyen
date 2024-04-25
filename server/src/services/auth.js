import con from "../configs/database.js";

export const loginService = async (username, password) => {
    const sql = 'SELECT u.*, t.*, s.* FROM users u LEFT JOIN students s ON u.id = s.user_id LEFT JOIN teachers t ON u.id = t.user_id WHERE u.username = ? AND u.password = ? LIMIT 1';
    return new Promise((resolve, reject) => {
        con.query(sql, [username, password], (err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    })
}