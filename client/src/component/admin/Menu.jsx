import React from 'react'
import { Link } from 'react-router-dom'
import { BiCategory } from 'react-icons/bi'
import { CiLogout } from 'react-icons/ci'
import { BsCardChecklist } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    const nav = useNavigate()
    const dangxuat = () => {
        localStorage.removeItem('user')
        nav('/', { replace: true })
    }

    return (
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <div className="relative border-b border-white/20">
                <div className="flex items-center gap-4 py-6 px-8">
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">QLDRL - {user[0].username}</h6>
                </div>
            </div>
            <div className="m-4">
                <ul className="mb-4 flex flex-col gap-1">
                    <li>
                        <Link aria-current="page" to='/dashboard/trangchu'>
                            <button className="middle none font-sans font-bold center transition-all  text-xs py-3 rounded-lg to-blue-400 text-white shadow-md hover:shadow-l w-full flex items-center gap-4 px-4 capitalize hover:bg-white/10 active:bg-white/30" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                </svg>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Trang chu</p>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link className="" to='/dashboard/danhsachhocky'>
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                <h3 className='text-xl'><BsCardChecklist /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Danh sach hoc ky</p>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link className="" to='/dashboard/danhsachhoatdongrenluyen'>
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd"></path>
                                </svg>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Danh sach hoat dong</p>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link className="" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                <h3 className='text-2xl'><BiCategory /></h3>
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Danh muc</p>
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
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Dang xuat</p>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Menu