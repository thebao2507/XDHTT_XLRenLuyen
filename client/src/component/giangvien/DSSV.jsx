import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import axios from 'axios'

const DSSV = () => {
    const [dssv, setDssv] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const [handleNX, setHandleNX] = useState(false)
    const [tt, setTt] = useState({})
    const [nhanxet, setNhanxet] = useState('')

    const datahoc = JSON.parse(localStorage.getItem('datahocki'));
    const cc = datahoc.filter(item => item.trangthai === 'pending')
    let stt = 1

    useEffect(() => {
        axios.get(`http://localhost:5000/giaovien/laydssv/${user[0].magv}?hocki=${cc[0].hocki}&namhoc=${cc[0].namhoc}`)
            .then((response) => {
                const { data } = response
                setDssv(data)
            })
            .catch((error) => {
                console.log("lỗi khi lấy dữ liệu", error)
            })
    })

    const masv = tt.masv

    const handleNhanxet = () => {
        axios.post('http://localhost:5000/giaovien/nhanxetsinhvien', { nhanxet, masv })
            .then((response) => {
                alert('đã gửi nhận xét')
                window.location.reload()
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gửi đánh giá tới máy chủ:', error);
            })
    }


    const handleClickNX = (item) => {
        const sinhvien = item
        setHandleNX(true)
        setTt(sinhvien)
    }

    const handleHide = () => {
        setHandleNX(false)
    }

    return (
        <div className=''>
            <div className='my-2'>
                <p className='font-semibold text-xl'>{cc[0].hocki} năm học: {cc[0].namhoc}</p>
            </div>
            {
                handleNX === false ? (
                    <>
                    </>
                ) : (
                    <div className='flex items-center mb-4'>
                        <p className='mx-1 w-[30%] text-sx font-semibold'>Nhận xét sinh viên {tt.tensv} :</p>
                        <input
                            value={nhanxet}
                            onChange={e => setNhanxet(e.target.value)}
                            type="text"
                            name="" id=""
                            className='mx-1 w-full py-1.5 bg-gray-200 border border-gray-500 text-gray-900 rounded-lg ' />
                        <button onClick={handleHide} className='mx-1 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-6 py-2 text-center mb-1'>Ẩn</button>
                        <button type="button" onClick={handleNhanxet} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-1 ">Save</button>
                    </div>
                )
            }
            <table className="min-w-full text-left text-sm font-light text-white">
                <thead
                    className="border-b bg-white font-medium dark:border-neutral-400 dark:bg-neutral-500">
                    <tr>
                        <th scope="col" className="px-6 py-4">STT</th>
                        <th scope="col" className="px-6 py-4">MASV</th>
                        <th scope="col" className="px-6 py-4">Họ Tên</th>
                        <th scope="col" className="px-6 py-4">Chức vụ</th>
                        <th scope="col" className="px-6 py-4">Điêm SV TĐG</th>
                        <th scope="col" className="px-6 py-4">Điêm TTL TĐG</th>
                        <th scope="col" className="px-6 py-4">Xếp loại</th>
                        <th scope="col" className="px-6 py-4">Nhận xét</th>
                        <th scope="col" className="px-6 py-4">TTNX</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dssv.map(item => (
                            <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{stt++}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.tensv}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.masv}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.chucvu}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.totalScore}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.totaltapthedanhgia}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.xeploai}</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <button type="button" onClick={() => handleClickNX(item)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Nhận xét</button>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    {
                                        !item.nhanxetcuagv ? "" : <FaCheck />
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DSSV