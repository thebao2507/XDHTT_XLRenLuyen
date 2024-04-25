import con from "../configs/database.js";

export const count = async (req, res) => {
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
        console.log(studentCount)

        res.json({ studentCount, teacherCount, lopCount, userCount })
    })
}

export const laydshdsk = async (req, res) => {
    const sql = 'SELECT * FROM activities'
    con.query(sql, (err, result) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        res.json(result)
    })
}

export const laydshk = async (req, res) => {
    const sql = 'SELECT * FROM semester'
    con.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }

        res.json(results);
    })
}


/* post */

export const taods = (req, res) => {
    const { hocki, namhoc, trangthai } = req.body
    const sqlthemdshk = 'INSERT INTO semester (hocki, namhoc, trangthai) VALUES (?, ?, ?)'
    con.query(sqlthemdshk, [hocki, namhoc, trangthai], (err, data) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }

        res.json("thêm dữ liệu thành công")
    })
}

export const taohdsk = (req, res) => {
    const { tenhoatdong,
        caphoatdong,
        diadiem,
        idhocki,
        time,
        pair,
        trangthai
    } = req.body
    const sql = 'INSERT INTO activities (tenhoatdong, caphoatdong, ngaydienra, thoigiandienra, diadiem, hocki_id, trangthai) VALUES (?, ?, ?, ?, ?, ?, ?)'
    con.query(sql, [tenhoatdong, caphoatdong, pair, time, diadiem, idhocki, trangthai], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        res.json("thêm dữ liệu thành công")
    })
}


export const danhdauhoanthanh = (req, res) => {
    const { id_1, trangthai } = req.body
    const sql = 'UPDATE semester SET trangthai = ? WHERE id = ?'
    con.query(sql, [trangthai, id_1], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        res.json("thêm dữ liệu thành công")
    })
}

export const danhdauhoanthanhsk = (req, res) => {
    const { id_1, trangthai } = req.body
    const sql = 'UPDATE activities SET trangthai = ? WHERE id = ?'
    con.query(sql, [trangthai, id_1], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        res.json("thêm dữ liệu thành công")
    })
}


/* delete */

export const xoahdrl = (req, res) => {
    const sql = 'DELETE FROM activities WHERE id = ?'
    con.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json("xóa thành công")
    });
}

