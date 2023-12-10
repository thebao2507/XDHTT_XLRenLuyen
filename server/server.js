const express = require('express');
const cors = require('cors');
var mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo",
    port: 3306
});

app.get('/', (req, res) => {
    res.send('Hello ');
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT u.*, t.*, s.* FROM users u LEFT JOIN students s ON u.id = s.user_id LEFT JOIN teachers t ON u.id = t.user_id WHERE u.username = ? AND u.password = ? LIMIT 1';
    const sqlcheck = 'SELECT * FROM tongdiem WHERE username = ?'
    //const sql = "SELECT u.*, (SELECT CASE WHEN u.role = 'giaovien' THEN JSON_OBJECT('data', (SELECT JSON_OBJECT(t.magv, t.tengv ) FROM teachers t WHERE t.user_id = u.id) ) ELSE JSON_OBJECT('data', (SELECT JSON_OBJECT( s.masv, s.tensv ) FROM students s WHERE s.user_id = u.id) ) END ) AS user_data FROM users u WHERE u.username = ? AND u.password = ?"
    con.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json("no record")
        }
    })
});

app.get('/giaovien/:magv/laydanhsachsv', (req, res) => {
    // Truy vấn tất cả các dòng trong bảng
    const sql = 'SELECT s.* FROM students s INNER JOIN lop l ON s.lop_id = l.id WHERE l.magiaovienchunhiem = ?'
    con.query(sql, [req.params.magv], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }

        res.json(results);
    });
});

app.post('/sinhvien/xlrl', async (req, res) => {
    //console.log(req.body.items)
    const { username, totalScore, totallopdanhgia, items } = req.body
    // lưu vào table chitietxeploai
    const sqlChitiet = 'INSERT INTO chitietxeploairenluyen (username, iddsm, studentScore, lopdanhgia, ghichu) VALUES (?, ?, ?, ?, ?)'
    try {
        for (const item of items) {
            await new Promise((resolve, reject) => {
                con.query(sqlChitiet, [username, item.iddsm, item.studentScore, item.lopdanhgia, item.note], (err, results) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
            });
        }

        const sqlupdate = 'UPDATE students SET trangthainhapdiem = ? WHERE masv = ?';
        await new Promise((resolve, reject) => {
            con.query(sqlupdate, ['yes', username], (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })
        })

        const sqlTongdiem = 'INSERT INTO tongdiem (username, totalScore, totaltapthedanhgia) VALUES (?, ?, ?)';
        const inserttongdiem = () => {
            return new Promise((resolve, reject) => {
                con.query(sqlTongdiem, [username, totalScore, totallopdanhgia], (err, results) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(results);
                });
            });
        }

        const result = await inserttongdiem()

        res.json({
            mess: "Lưu thành công",
            ketqua: result
        });
    } catch (err) {
        console.error('Lỗi khi truy vấn dữ liệu:', err);
        res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
    }

    // thực hiện lưu thông tin total vào table tongdiem

    //console.log(req.body)
})



const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});