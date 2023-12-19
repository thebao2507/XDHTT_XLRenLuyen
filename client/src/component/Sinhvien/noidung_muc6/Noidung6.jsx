import React from 'react'
import { FaCircle } from "react-icons/fa";

const Noidung6 = () => {
    return (
        <div className='pl-4'>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Được khen thưởng cấp khoa, LCĐ, LCH: <b className='pl-10'>+6đ</b>/lần</p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Được khen thưởng cấp trường/tỉnh: <b className='pl-16'>+8đ</b>/lần</p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Được khen thưởng cấp bộ, quốc gia trở lên: <b className='pl-2'>+10đ</b>/lần</p>
            </div>
        </div>
    )
}

export default Noidung6