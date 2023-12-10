import React from 'react'
import { FaCircle, FaRegCircle } from "react-icons/fa";

const Ketquahoctap = () => {
    return (
        <div className='ml-5'>
            <ul>
                <li >
                    <div className='flex items-center'>
                        <FaCircle className='text-[8px]' />
                        <div className='pl-1 flex items-center'>
                            <p className=''>ĐTB chung học kỳ</p>
                            <p className='pl-[170px]'>(HK trước: ……. HK này:……..)</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around'>
                        <div className='pr-28'>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Dưới 4.0:</p>
                                    <b className='pl-[88px]'>+3đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 4.0 - cận 5.0:</p>
                                    <b className='pl-10'>+6đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 5.0 - cận 6.0:</p>
                                    <b className='pl-10'>+8đ</b>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 6.5 - cận 8.0:</p>
                                    <b className='pl-10'>+10đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 8.0 - 10:</p>
                                    <b className='pl-[72px]'>+12đ</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className=''>
                    <div className='flex items-center'>
                        <FaCircle className='text-[8px]' />
                        <p className='pl-1'>Tăng ĐTB chung học kỳ so với ĐTB chung học kỳ của kỳ trước</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='pr-32'>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.01 - cận 0.1:</p>
                                    <b className='pl-[31px]'>+1đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.1 - cận 0.2:</p>
                                    <b className='pl-[40px]'>+2đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.2 - cận 0.3:</p>
                                    <b className='pl-[40px]'>+3đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.3 - cận 0.4:</p>
                                    <b className='pl-[40px]'>+4đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.4 - cận 0.5:</p>
                                    <b className='pl-[40px]'>+5đ</b>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.5 - cận 0.6:</p>
                                    <b className='pl-[30px]'>+6đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.6 - cận 0.7:</p>
                                    <b className='pl-[30px]'>+7đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.7 - cận 0.8:</p>
                                    <b className='pl-[30px]'>+8đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.8 - cận 0.9:</p>
                                    <b className='pl-[30px]'>+9đ</b>
                                </div>
                            </div>
                            <div className='flex items-center pl-3'>
                                <FaRegCircle className='text-[9px]' />
                                <div className='flex items-center pl-1'>
                                    <p className=''>Từ 0.9 trở lên:</p>
                                    <b className='pl-[44px]'>+10đ</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Ketquahoctap