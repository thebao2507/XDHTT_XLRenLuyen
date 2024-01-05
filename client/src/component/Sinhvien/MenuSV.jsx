import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'
import { BsCardChecklist } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { MdOutlineRateReview, MdOutlineNotificationsActive, MdOutlineMedicalInformation } from "react-icons/md"

const MenuSV = ({ user }) => {
    const nav = useNavigate()
    const dangxuat = () => {
        localStorage.removeItem('user')
        nav('/', { replace: true })
    }

    const [selectedItem, setSelectedItem] = useState(0)

    const handleItemClick = (index) => {
        setSelectedItem(index)
    }

    return (
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-56 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <div className="relative border-b border-white/20">
                <div className="gap-4 py-6 px-8" >
                    <h6 className="block antialiased tracking-normal font-sans font-semibold leading-relaxed text-white text-lg">{!user ? "error" : user[0].username}</h6>
                    <h6 className="block antialiased tracking-normal font-sans font-semibold leading-relaxed text-white text-lg">{!user ? "error" : user[0].tensv}</h6>
                </div>
            </div>
            <div className="m-4">
                <ul className="mb-4 flex flex-col gap-1">
                    <li className={`${selectedItem === 0 ? 'bg-blue-800 text-white' : ''}`} onClick={() => handleItemClick(0)}>
                        <Link className="" to="/dashboardSV/thongbao">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                <h3 className='text-2xl'><MdOutlineMedicalInformation /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Trang chính</p>
                            </button>
                        </Link>
                    </li>
                    <li className={`${selectedItem === 1 ? 'bg-blue-800 text-white' : ''}`} onClick={() => handleItemClick(1)}>
                        <Link aria-current="page" to='/dashboardSV/writeXLRL'>
                            <button className="middle none font-sans font-bold center transition-all  text-xs py-3 rounded-lg to-blue-400 text-white shadow-md hover:shadow-l w-full flex items-center gap-4 px-4 capitalize hover:bg-white/10 active:bg-white/30" type="button">
                                <h3 className='text-2xl'><MdOutlineRateReview /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Đánh Giá DRL</p>
                            </button>
                        </Link>
                    </li>
                    <li className={`${selectedItem === 2 ? 'bg-blue-800 text-white' : ''}`} onClick={() => handleItemClick(2)}>
                        <Link className="" to="/dashboardSV/ketquarl">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd"></path>
                                </svg>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Kết quả RL</p>
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

export default MenuSV