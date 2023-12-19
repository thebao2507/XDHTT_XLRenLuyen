import React, { useEffect, useState } from 'react'
import axios from 'axios'

const KetquaRL = () => {
    const [datarl, setDatarl] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        axios.get(`http://localhost:5000/sinhvien/layketqua/${user[0].masv}`)
        .then((response) => {
            const { data } = response
            setDatarl(data)
            //console.log(data)
        })
        .catch((error) => {
            console.log("lỗi khi lấy dữ liệu", error)
        })
    })

    return (
        <div>
            <p className='border-b border-black font-semibold text-xl my-5'>Kết quả đánh giá</p>
            <p>
                tổng điểm sinh viên tự đánh giá: <b>{datarl.length > 0 ? datarl[0].totalScore : "..."}</b>
            </p>
            <p>
                tổng điểm tập thể lớp đánh giá: <b>{datarl.length > 0 ? datarl[0].totaltapthedanhgia : "..."}</b>
            </p>
            <p>
                xếp loại đánh giá: <b>{datarl.length > 0 ? datarl[0].xeploai : "..."}</b>
            </p>
            <p className='border-b border-black font-semibold mt-2 text-xl my-5'>Nhận xét của giáo viên</p>
            <p>{datarl.length > 0 ? datarl[0].nhanxetcuagv : "..."}</p>
        </div>
    )
}

export default KetquaRL