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


// truy vấn sinh vien

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

/// truy vấn dmin

app.get('/admin/counts', (req, res) => {
    const sqlGetCount = `SELECT 
                            (SELECT COUNT(*) FROM students) AS sc,
                            (SELECT COUNT(*) FROM teachers) AS tc,
                            (SELECT COUNT(*) FROM lop) AS lc,
                            (SELECT COUNT(*) FROM users) AS uc
                        `
    con.query(sqlGetCount, (err, data) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        const studentCount = data[0].sc
        const teacherCount = data[0].tc
        const lopCount = data[0].lc
        const userCount = data[0].uc

        res.json({ studentCount, teacherCount, lopCount, userCount })
    })
})

app.post('/admin/taods', (req, res) => {
    const { hocki, namhoc } = req.body
    const sqlthemdshk = 'INSERT INTO semester (hocki, namhoc) VALUES (?, ?)'
    con.query(sqlthemdshk, [hocki, namhoc], (err, data) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }

        res.json("thêm dữ liệu thành công")
    })
})

app.get('/admin/laydshk', (req, res) => {
    const sql = 'SELECT * FROM semester'
    con.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }

        res.json(results);
    })
})


app.post('/admin/taohdsk', (req, res) => {
    const { tenhoatdong,
        caphoatdong,
        diadiem,
        idhocki,
        time,
        pair
    } = req.body
    const sql = 'INSERT INTO activities (tenhoatdong, caphoatdong, ngaydienra, thoigiandienra, diadiem, hocki_id) VALUES (?, ?, ?, ?, ?, ?)'
    con.query(sql, [tenhoatdong, caphoatdong, pair, time, diadiem, idhocki], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        res.json("thêm dữ liệu thành công")
    })
})

app.get('/admin/laydshdsk', (req, res) => {
    const sql = 'SELECT * FROM activities'
    con.query(sql, (err, result) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        res.json(result)
    })
})


const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});