import React from 'react'


const LoginSinhVien = () => {
    return (
        <div className='w-full h-screen flex items-start'>
            <div className='relative w-1/2 h-full flex flex-col'>
                <img src="https://i.pinimg.com/originals/ba/3d/4c/ba3d4cf26383465c7fcd6e6ac4809f5d.jpg" alt="hinh" className='w-full h-full object-cover' />
            </div>

            <div className='w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between'>
                <div className="w-full flex flex-col">
                    <div className="px-8 rounded-xl">
                        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                        <form action="" className="mt-6">
                            <div className="my-5 text-sm">
                                <label  className="block text-black">Student ID</label>
                                <input type="text" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Student ID" />
                            </div>
                            <div className="my-5 text-sm">
                                <label className="block text-black">Password</label>
                                <input type="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                                <div className="flex justify-end mt-2 text-xs text-gray-600">
                                    <a href="#">Forget Password?</a>
                                </div>
                            </div>

                            <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                        </form>

                        <div className="flex md:justify-between justify-center items-center mt-10">
                            <div className="bg-gray-300 md:block hidden w-4/12"></div>
                            <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Role</p>
                            <div className="bg-gray-300 md:block hidden w-4/12"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-2 mt-7">
                            <div>
                                <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Teacher</button>
                            </div>
                            <div>
                                <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Admin</button>
                            </div>
                        </div>
                        <p className="mt-12 text-xs text-center font-light text-gray-400"> Quy Nhơn University <a href="#" className="text-black font-medium"> Click here </a>  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSinhVien