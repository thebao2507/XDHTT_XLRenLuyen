import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSinhVien = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErorr] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập ở đây
        axios.post('http://localhost:5000/login', { username, password })
            .then(res => {
                const data = res.data;
                //console.log()
                if (data.length > 0) {
                    localStorage.setItem('user', JSON.stringify(data));
                    //console.log("success")
                    if (data[0].role === 'giaovien') {
                        navigate('/dashboardGV/dssv')
                    }
                    if (data[0].role === 'sinhvien') {
                        if (data[0].trangthainhapdiem === 'yes') {
                            localStorage.setItem('trangthai', 'true')
                        }
                        else {
                            localStorage.setItem('trangthai', 'false')
                        }
                        navigate('/dashboardSV/thongbao')
                    }
                    if (data[0].role === 'admin') {
                        navigate('/dashboard/trangchu')
                    }
                }
                //console.log("tai khoan mat khau ko hop le")
                setErorr(1)
                //toast.error("tài khoản hoặc mật khẩu không hợp lệ")
            })
            .catch(err => console.log(err))
    }

    console.log(error)

    return (
        <>
            <div className='w-full h-screen flex items-start'>
                <div className='relative w-1/2 h-full flex flex-col'>
                    <img src="https://i.pinimg.com/originals/ba/3d/4c/ba3d4cf26383465c7fcd6e6ac4809f5d.jpg" alt="hinh" className='w-full h-full object-cover' />
                </div>

                <div className='w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between'>
                    <div className="w-full flex flex-col">
                        <div className="px-8 rounded-xl">
                            <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                            <form action="" className="mt-6" onSubmit={handleSubmit}>
                                <div className="my-5 text-sx">
                                    <label className="block text-black">Username</label>
                                    <input
                                        type="text"
                                        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="my-5 text-sx">
                                    <label className="block text-black">Password</label>
                                    <input
                                        type="password"
                                        className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="flex justify-end mt-2 text-xs text-gray-600">
                                        <Link to='/forgotpassword' target="_blank">Forget Password?</Link>
                                    </div>
                                </div>

                                <button type='submit' className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                                {
                                    error ? (
                                        <p className='text-center mt-2 text-red-500 font-semibold'>tài khoản mật khẩu không hợp lệ!!!</p>
                                    ) : (
                                        <></>
                                    )
                                }
                            </form>
                            <p className="mt-12 text-sm text-center font-light text-gray-400"> Quy Nhơn University <a href="https://www.qnu.edu.vn/" target="_blank" className="text-black font-medium"> Click here </a>  </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default LoginSinhVien