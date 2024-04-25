import express from 'express'
import cors from 'cors'
import con from './src/configs/database.js';
import routerAuth from './src/routes/auth.js'
import routerAdmin from './src/routes/admin.js'

const app = express();

app.use(cors());
app.use(express.json());

/* use router auth */
app.use("", routerAuth)

/* use router teacher */

/* use router student */

/* use router admin */
app.use("/admin", routerAdmin)

app.get('/giaovien/laythongbao/:magv', (req, res) => {
    const sql = 'SELECT * FROM thongbao WHERE magv = ?;'
    con.query(sql, [req.params.magv], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
})

app.delete('/giaovien/xoathongbao/:magv', (req, res) => {
    const sql = 'DELETE FROM thongbao WHERE magv = ?'
    //console.log(req.params.magv)
    con.query(sql, [req.params.magv], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json("xóa thành công")
    });
})

app.get('/giaovien/laydssv/:magv', (req, res) => {
    //console.log(req.query)
    // Truy vấn tất cả các dòng trong bảng
    const sql = `SELECT students.*, lop_students.tenlop, tongdiem.nhanxetcuagv,
                COALESCE(tongdiem.totalScore, 'chưa nhập điểm') AS totalScore, 
                COALESCE(tongdiem.totaltapthedanhgia, 'chưa nhập điểm') AS totaltapthedanhgia,
                COALESCE(tongdiem.xeploai, 'chưa xếp loại') AS xeploai
                FROM students
                JOIN lop AS lop_students ON students.lop_id = lop_students.id
                JOIN teachers ON teachers.magv = lop_students.magiaovienchunhiem
                LEFT JOIN tongdiem ON students.masv = tongdiem.username
                WHERE teachers.magv = ? AND tongdiem.hocki = ? AND tongdiem.namhoc = ?;`
    con.query(sql, [req.params.magv, req.query.hocki, req.query.namhoc], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
});

app.post('/giaovien/thongbaosv', (req, res) => {
    const { magv, title, textContent } = req.body
    const sql = 'INSERT INTO thongbao (magv, tieude, noidung) VALUES (?, ?, ?)'
    con.query(sql, [magv, title, textContent], (err, data) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }

        res.json("thêm dữ liệu thành công")
    })
})


app.post('/giaovien/nhanxetsinhvien', (req, res) => {
    const { masv, nhanxet } = req.body
    const sql = 'UPDATE tongdiem SET nhanxetcuagv = ? WHERE username = ?'
    con.query(sql, [nhanxet, masv], (err, data) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }

        res.json("cập nhật dữ liệu thành công")
    })
})


// truy vấn sinh vien
app.get('/sinhvien/laythongtinsinhvienedit/:masv', (req, res) => {
    const sql = `SELECT students.tensv, students.khoahoc, students.chucvu, lop.tenlop, nganh.tennganh
        FROM students
        INNER JOIN lop ON students.lop_id = lop.id
        INNER JOIN nganh ON lop.nganh_id = nganh.id
        WHERE students.masv = ?;`
    con.query(sql, [req.params.masv], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
})



app.get('/sinhvien/laydslop/:lop_id', (req, res) => {
    const sql = `SELECT students.*, lop_students.tenlop, tongdiem.trangthai,
                COALESCE(tongdiem.totalScore, 'chưa nhập điểm') AS totalScore, 
                COALESCE(tongdiem.totaltapthedanhgia, 'chưa nhập điểm') AS totaltapthedanhgia
                FROM students
                JOIN lop AS lop_students ON students.lop_id = lop_students.id
                LEFT JOIN tongdiem ON students.masv = tongdiem.username
                WHERE tongdiem.hocki = ? AND tongdiem.namhoc = ? AND students.lop_id = ?`
    con.query(sql, [req.query.hocki, req.query.namhoc, req.params.lop_id], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
})

app.get('/sinhvien/laychitietrl/:masv', (req, res) => {
    const sql = 'SELECT * FROM chitietxeploairenluyen WHERE chitietxeploairenluyen.username = ?'
    con.query(sql, [req.params.masv], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
})

app.post('/sinhvien/capnhatxlrl', async (req, res) => {
    const { username, totallopdanhgia, items, hocki, namhoc, trangthai, xeploai } = req.body
    const sql1 = 'UPDATE chitietxeploairenluyen SET chitietxeploairenluyen.lopdanhgia = ?, chitietxeploairenluyen.ghichu = ? WHERE  chitietxeploairenluyen.username = ? AND chitietxeploairenluyen.iddsm = ?'
    const sql2 = 'UPDATE tongdiem SET tongdiem.totaltapthedanhgia = ?, tongdiem.xeploai = ?, tongdiem.trangthai = ? WHERE tongdiem.username = ? AND tongdiem.hocki = ? AND tongdiem.namhoc = ?'
    try {
        for (const item of items) {
            await new Promise((resolve, reject) => {
                con.query(sql1, [item.lopdanhgia, item.note, username, item.iddsm], (err, results) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
            });
        }

        await new Promise((resolve, reject) => {
            con.query(sql2, [totallopdanhgia, xeploai, trangthai, username, hocki, namhoc], (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            })
        })

        res.json({
            mess: "Lưu thành công"
        });
    } catch (err) {
        console.error('Lỗi khi truy vấn dữ liệu:', err);
        res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
    }

})

app.post('/sinhvien/xlrl', async (req, res) => {
    //console.log(req.body.items)
    const { username, totalScore, totallopdanhgia, items, hocki, namhoc } = req.body
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

        const sqlTongdiem = 'INSERT INTO tongdiem (username, totalScore, totaltapthedanhgia, hocki, namhoc) VALUES (?, ?, ?, ?, ?)';
        const inserttongdiem = () => {
            return new Promise((resolve, reject) => {
                con.query(sqlTongdiem, [username, totalScore, totallopdanhgia, hocki, namhoc], (err, results) => {
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

app.get('/sinhvien/laythongtin/:masv', (req, res) => {
    const sql = "SELECT lop.tenlop, nganh.tennganh FROM students JOIN lop ON students.lop_id = lop.id JOIN nganh ON lop.nganh_id = nganh.id WHERE students.masv = ?"
    const masv = req.params.masv
    //console.log(typeof(masv))
    con.query(sql, masv, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
})

app.get('/sinhvien/laythongbao/:masv', (req, res) => {
    const sql = `SELECT COALESCE(thongbao.tieude, 'chưa có nội dung') AS tieude, COALESCE(thongbao.noidung, 'chưa có thông báo') AS noidung 
    FROM students
    LEFT JOIN lop ON students.lop_id = lop.id
    LEFT JOIN thongbao ON thongbao.magv = lop.magiaovienchunhiem
    WHERE students.masv = ?`
    const masv = req.params.masv
    //console.log(typeof(masv))
    con.query(sql, masv, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
})

app.get('/sinhvien/layketqua/:masv', (req, res) => {
    const sql = 'SELECT * FROM tongdiem WHERE username = ?'
    con.query(sql, [req.params.masv], (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn dữ liệu:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
            return;
        }
        //console.log(results)
        res.json(results);
    });
})
/// truy vấn admin

// app.delete('/admin/xoahdrl/:id_1', (req, res) => {
//     const sql = 'DELETE FROM activities WHERE id = ?'
//     con.query(sql, [req.params.id_1], (err, results) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }
//         //console.log(results)
//         res.json("xóa thành công")
//     });
// })

// app.get('/admin/counts', (req, res) => {
//     const sqlGetCount = `SELECT 
//                             (SELECT COUNT(*) FROM students) AS sc,
//                             (SELECT COUNT(*) FROM teachers) AS tc,
//                             (SELECT COUNT(*) FROM lop) AS lc,
//                             (SELECT COUNT(*) FROM users) AS uc
//                         `
//     con.query(sqlGetCount, (err, data) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }
//         const studentCount = data[0].sc
//         const teacherCount = data[0].tc
//         const lopCount = data[0].lc
//         const userCount = data[0].uc

//         res.json({ studentCount, teacherCount, lopCount, userCount })
//     })
// })

// app.post('/admin/taods', (req, res) => {
//     const { hocki, namhoc, trangthai } = req.body
//     const sqlthemdshk = 'INSERT INTO semester (hocki, namhoc, trangthai) VALUES (?, ?, ?)'
//     con.query(sqlthemdshk, [hocki, namhoc, trangthai], (err, data) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }

//         res.json("thêm dữ liệu thành công")
//     })
// })

// app.get('/admin/laydshk', (req, res) => {
//     const sql = 'SELECT * FROM semester'
//     con.query(sql, (err, results) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }

//         res.json(results);
//     })
// })


// app.post('/admin/taohdsk', (req, res) => {
//     const { tenhoatdong,
//         caphoatdong,
//         diadiem,
//         idhocki,
//         time,
//         pair,
//         trangthai
//     } = req.body
//     const sql = 'INSERT INTO activities (tenhoatdong, caphoatdong, ngaydienra, thoigiandienra, diadiem, hocki_id, trangthai) VALUES (?, ?, ?, ?, ?, ?, ?)'
//     con.query(sql, [tenhoatdong, caphoatdong, pair, time, diadiem, idhocki, trangthai], (err, results) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }
//         res.json("thêm dữ liệu thành công")
//     })
// })

// app.get('/admin/laydshdsk', (req, res) => {
//     const sql = 'SELECT * FROM activities'
//     con.query(sql, (err, result) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }
//         res.json(result)
//     })
// })

// app.post('/admin/danhdauhoanthanh', (req, res) => {
//     const { id_1, trangthai } = req.body
//     const sql = 'UPDATE semester SET trangthai = ? WHERE id = ?'
//     con.query(sql, [trangthai, id_1], (err, results) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }
//         res.json("thêm dữ liệu thành công")
//     })
// })


// app.post('/admin/danhdauhoanthanhsk', (req, res) => {
//     const { id_1, trangthai } = req.body
//     const sql = 'UPDATE activities SET trangthai = ? WHERE id = ?'
//     con.query(sql, [trangthai, id_1], (err, results) => {
//         if (err) {
//             console.error('Lỗi khi truy vấn dữ liệu:', err);
//             res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
//             return;
//         }
//         res.json("thêm dữ liệu thành công")
//     })
// })

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});