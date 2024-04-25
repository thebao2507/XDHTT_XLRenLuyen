import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa6";

const QLDSDRL = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [ds, setDs] = useState([])

    const datahoc = JSON.parse(localStorage.getItem('datahocki'));
    const cc = datahoc.filter(item => item.trangthai === 'pending')

    useEffect(() => {
        axios.get(`http://localhost:8000/sinhvien/laydslop/${user[0].lop_id}?hocki=${cc[0].hocki}&namhoc=${cc[0].namhoc}`)
            .then((response) => {
                const { data } = response
                setDs(data)
            })
            .catch((error) => {
                console.log("lỗi khi lấy dữ liệu", error)
            })
    })
    return (
        <div className=''>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Họ tên
                        </th>
                        <th scope="col" className="px-6 py-3">
                            MASV
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Điểm SV đ.giá
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Điểm t.thể lớp đ.giá
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                        <th scope="col" className="px-6 py-3">
                            TTDG
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ds.map(item => (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.tensv}
                                </th>
                                <td className="px-6 py-4">
                                    {item.masv}
                                </td>
                                <td className="px-6 py-4">
                                    {item.totalScore}
                                </td>
                                <td className="px-6 py-4">
                                    {item.totaltapthedanhgia}
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/dashboardSV/chitietdanhgia/${item.masv}`} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                                <td className="px-6 py-4">
                                    {item.trangthai === 'xong' ? (
                                        <FaCheck />
                                    ) : ''
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

export default QLDSDRL