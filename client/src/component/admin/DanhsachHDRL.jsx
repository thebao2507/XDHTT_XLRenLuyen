import React, { useState, useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { parse, format } from 'date-fns';
import './danhsachHDRL.css'

const DanhsachHDRL = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [time, setTime] = useState(null);
    const [tenhoatdong, setTenhoatdong] = useState('')
    const [diadiem, setDiadiem] = useState('')
    const [caphoatdong, setCaphoatdong] = useState('')
    const [idhocki, setIdhocki] = useState(0)
    const [dshd, setDshd] = useState([])
    const [table, setTable] = useState(false)
    const datahocki = JSON.parse(localStorage.getItem('datahocki'))

    const convert = (str) => {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("/");
    }

    const pair = `${convert(startDate)}-${convert(endDate)}`

    const handleOnTable = async () => {
        setTable(true)
        //alert(table)
    }

    const handleTaoHDSK = () => {
        axios.post('http://localhost:8000/admin/taohdsk', {
            tenhoatdong,
            caphoatdong,
            diadiem,
            idhocki,
            time,
            pair,
            trangthai: 'pending'
        })
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
        axios.post('http://localhost:8000/admin/danhdauhoanthanhsk', { id_1, trangthai: 'success' })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gửi đánh giá tới máy chủ:', error);
            })
        window.location.reload()
    }

    const handlexoahd = (id) => {
        const id_1 = id
        axios.delete(`http://localhost:8000/admin/xoahdrl/${id_1}`)
            .then((response) => {
                alert('xóa thành công')
                window.location.reload()
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gửi đánh giá tới máy chủ:', error);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/admin/laydshdsk')
            .then((response) => {
                const { data } = response
                setDshd(data)
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
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Danh sach hoat dong ren luyen</p>
                    </h2>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                    </div>
                    <div className='ml-2'>
                        <button
                            className='p-2 h-10 bg-cyan-600 rounded-md text-white'
                            onClick={() => handleOnTable()}
                        >
                            Tạo hoạt động
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {
                    table ? (<div className='fixed top-0 left-10 bg-black/[.54] w-[110%] h-[100%] flex items-center justify-center'>
                        <div className='bg-white p-5 rounded-3xl table_hdrl w-[40%]'>
                            <p className='mb-10 mt-5 text-center text-2xl font-sans tracking-wide'>Thêm hoạt động</p>
                            {/* <div className='my-2 flex w-full items-center justify-between'> */}
                            <div className='flex justify-between items-center'>
                                <label htmlFor="" className='mb-4 p-4 text-lg  text-gray-600'>TÊN HOẠT ĐỘNG:</label>
                                <input
                                    type="text"
                                    className="mb-4 outline-1 outline-gray-300 bg-gray-100 border-[0px] border-gray-100 focus:border-slate-100 text-gray-500 text-lg rounded-xl w-[70%] p-4 "
                                    onChange={e => setTenhoatdong(e.target.value)}
                                    placeholder='TÊN HOẠT ĐỘNG?'
                                />
                            </div>
                            <div className='flex justify-between items-center'>
                                <label htmlFor="" className='mb-4 p-4 text-lg  text-gray-600'>ĐỊA ĐIỂM:</label>
                                <input
                                    type="text"
                                    className="mb-4 outline-1 outline-gray-300 bg-gray-100 border-[0px] border-gray-100 focus:border-slate-100 text-gray-500 text-lg rounded-xl w-[70%] p-4 "
                                    onChange={e => setDiadiem(e.target.value)}
                                    placeholder='ĐỊA ĐIỂM?'
                                />
                            </div>
                            <div className='flex justify-between items-center'>
                                <label htmlFor="" className='mb-4 p-4 text-lg  text-gray-600'>CẤP HOẠT ĐỘNG:</label>
                                <select
                                    id="countries"
                                    className="mb-4 outline-1 outline-gray-300 bg-gray-100 border-[0px] border-gray-100 focus:border-slate-100 text-gray-500 text-lg rounded-xl w-[70%] p-4 pr-10"
                                    onChange={e => setCaphoatdong(e.target.value)}
                                >
                                    <option selected>Chọn cấp hoạt động</option>
                                    <option value="Cấp tỉnh">Cấp tỉnh</option>
                                    <option value="Cấp trường">Cấp trường</option>
                                    <option value="Cấp khoa">Cấp khoa</option>
                                    <option value="Cấp lớp">Cấp lớp</option>
                                </select>
                            </div>
                            {/* </div> */}
                            <div>
                                <div className='my-2 flex items-center justify-between'>
                                    <div className='flex justify-between items-center'>
                                        <label className='mb-4 p-4 text-lg text-gray-600'>Từ ngày:</label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            className="mb-4 outline-1 outline-gray-300 bg-gray-100 border-[0px] border-gray-100 focus:border-slate-100 text-gray-500 text-lg rounded-xl w-full p-4 "
                                            dateFormat="yyyy/MM/dd"
                                        />
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <label className='mb-4 p-4 text-lg  text-gray-600'>Đến ngày:</label>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={date => setEndDate(date)}
                                            className="mb-4 outline-1 outline-gray-300 bg-gray-100 border-[0px] border-gray-100 focus:border-slate-100 text-gray-500 text-lg rounded-xl w-full p-4 "
                                            dateFormat="yyyy/MM/dd"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center '>
                                    <label className='mb-4 p-4 text-lg  text-gray-600'>THỜI GIAN:</label>
                                    <TimePicker
                                        value={time}
                                        className="mb-4 outline-1 outline-gray-300 bg-gray-100 border-[0px] border-gray-100 focus:border-slate-100 text-gray-500 text-lg rounded-xl w-full p-4 "
                                        onChange={setTime}
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <label className='mb-4 p-4 text-lg  text-gray-600'>HỌC KÌ-NĂM HỌC:</label>
                                    <select
                                        id="countries"
                                        className="mb-4 outline-1 outline-gray-300 bg-gray-100 border-[0px] border-gray-100 focus:border-slate-100 text-gray-500 text-lg rounded-xl w-full p-4 "
                                        onChange={e => setIdhocki(e.target.value)}
                                    >
                                        {
                                            datahocki.map(item => (
                                                <option value={item.id}>{item.hocki} {item.namhoc}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                                    onClick={handleTaoHDSK}
                                >
                                    Create
                                </button>
                                <button
                                    className="bg-indigo-600 px-4 ml-2 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                                    onClick={() => setTable(false)}
                                >
                                    Hide
                                </button>
                            </div>
                        </div>

                    </div>)
                        : (<h1></h1>)
                }
            </div>
            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        STT
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Hoat dong su kien
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Cap hoat dong
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Ngay dien ra
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        T/G dien ra
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Dia diem
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Trang Thai
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dshd.map(item => (
                                        <tr>
                                            <td className="px-1 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {stt++}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{item.tenhoatdong}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.caphoatdong}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.ngaydienra}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.thoigiandienra}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.diadiem}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span className="relative">{item.trangthai}</span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                                <button className='text-2xl mr-2' onClick={() => handlexoahd(item.id)}><AiOutlineDelete className='text-xl' /></button>
                                                <button className='text-2xl' onClick={() => handleDanhdauhoanthanh(item.id)}><BiEdit className='text-xl' /></button>
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

export default DanhsachHDRL