import con from "../configs/database.js"

export const getStatistical = async () => {
    const sqlGetStatistical = `SELECT 
                            (SELECT COUNT(*) FROM students) AS sc,
                            (SELECT COUNT(*) FROM teachers) AS tc,
                            (SELECT COUNT(*) FROM lop) AS lc,
                            (SELECT COUNT(*) FROM users) AS uc`
    return new Promise((resolve, reject) => {
        con.query(sqlGetStatistical, (err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    })
}