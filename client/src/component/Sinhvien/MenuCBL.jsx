import React from 'react'
import { Link } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'
import { BsCardChecklist } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { MdOutlineRateReview, MdOutlineNotificationsActive, MdOutlineMedicalInformation } from "react-icons/md"

const MenuCBL = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const nav = useNavigate()
    const dangxuat = () => {
        localStorage.removeItem('user')
        nav('/', { replace: true })
    }

    return (
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-56 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <div className="relative border-b border-white/20">
                <div className="gap-4 py-6 px-8" >
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white text-lg">{user[0].username}</h6>
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white text-lg">{user[0].chucvu}</h6>
                </div>
            </div>
            <div className="m-4">
                <ul className="mb-4 flex flex-col gap-1">
                    <li>
                        <Link className="" to="/dashboardSV/thongbao">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                <h3 className='text-2xl'><MdOutlineMedicalInformation /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Trang chính</p>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link aria-current="page" to='/dashboardSV/writeXLRL'>
                            <button className="middle none font-sans font-bold center transition-all  text-xs py-3 rounded-lg to-blue-400 text-white shadow-md hover:shadow-l w-full flex items-center gap-4 px-4 capitalize hover:bg-white/10 active:bg-white/30" type="button">
                                <h3 className='text-2xl'><MdOutlineRateReview /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Đánh Giá DRL</p>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link aria-current="page" to='/dashboardSV/qldsdrl'>
                            <button className="middle none font-sans font-bold center transition-all  text-xs py-3 rounded-lg to-blue-400 text-white shadow-md hover:shadow-l w-full flex items-center gap-4 px-4 capitalize hover:bg-white/10 active:bg-white/30" type="button">
                                <h3 className='text-2xl'><BsCardChecklist /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">DSDRL Lớp</p>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link aria-current="page" to='/dashboardSV/qldshd'>
                            <button className="middle none font-sans font-bold center transition-all  text-xs py-3 rounded-lg to-blue-400 text-white shadow-md hover:shadow-l w-full flex items-center gap-4 px-4 capitalize hover:bg-white/10 active:bg-white/30" type="button">
                                <h3 className='text-2xl'><BsCardChecklist /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">DSHD lớp</p>
                            </button>
                        </Link>
                    </li>
                </ul>
                <ul className="mb-4 flex flex-col gap-1">
                    <li className="mx-3.5 mt-4 mb-2">
                        <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">Khac</p>
                    </li>
                    <li>
                        <div className="">
                            <button
                                className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                                type="button"
                                onClick={dangxuat}
                            >
                                <h3 className='text-2xl'><CiLogout /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Đăng Xuất</p>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default MenuCBL