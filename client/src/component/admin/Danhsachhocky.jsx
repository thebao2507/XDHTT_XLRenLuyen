import React, { useState, useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import axios from 'axios'

const Danhsachhocky = () => {
    const namhocs = ["2020-2021", "2021-2022", "2022-2023", "2023-2024"]
    const [hocki, setHocki] = useState('')
    const [namhoc, setNamhoc] = useState('')

    const [dshk, setDshk] = useState([])


    const handletaodshk = () => {
        axios.post('http://localhost:5000/admin/taods', { hocki, namhoc, trangthai: 'pending' })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gửi đánh giá tới máy chủ:', error);
            })
        window.location.reload()
    }

    const handleDanhdauhoanthanh = (id) => {
        const id_1 = id
        axios.post('http://localhost:5000/admin/danhdauhoanthanh', { id_1, trangthai: 'success' })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gửi đánh giá tới máy chủ:', error);
            })
        window.location.reload()
    }



    useEffect(() => {
        axios.get('http://localhost:5000/admin/laydshk')
            .then((response) => {
                const { data } = response
                setDshk(data)
                localStorage.setItem('datahocki', JSON.stringify(data))
            })
            .catch((error) => {
                console.log("lỗi khi lấy dữ liệu", error)
            })
    },)

    let stt = 1

    return (
        <div className="bg-white p-4 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold flex">
                        <a href="#">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">Dashboard</p>
                        </a>
                        <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Danh sach hoc ky - nam hoc</p>
                    </h2>
                </div>
                <div className="flex items-center">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md ml-[10px]">
                        <input
                            className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" value={hocki} placeholder="nhập tên học kì..."
                            onChange={e => setHocki(e.target.value)}
                        />
                        <select name="" id="" onChange={e => setNamhoc(e.target.value)}>
                            {
                                namhocs.map(item => (
                                    <option value={item}>
                                        {item}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="lg:ml-40 ml-10 space-x-8">
                        <button
                            className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                            onClick={handletaodshk}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        STT
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Hoc ky
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Nam hoc
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Trang thai
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dshk.map(item => (
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {stt++}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{item.hocki}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.namhoc}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    {
                                                        item.trangthai === 'pending' ? (
                                                            <>
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                                                                <span className="relative">{item.trangthai}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span aria-hidden
                                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                <span className="relative">{item.trangthai}</span>
                                                            </>
                                                        )
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                                <button className='text-2xl mr-2'><AiOutlineDelete className='text-xl' /></button>
                                                <button className='text-2xl' onClick={() => handleDanhdauhoanthanh(item.id)} ><BiEdit className='text-xl' /></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Danhsachhocky