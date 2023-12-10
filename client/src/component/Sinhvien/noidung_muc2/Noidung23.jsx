import React from 'react'
import { FaCircle } from "react-icons/fa";

const Noidung23 = () => {
    return (
        <div className='pl-4'>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Mức khiển trách: <b>-15đ</b>/lần</p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Mức cảnh cáo trở lên: <b>-20đ</b>/lần</p>
            </div>
        </div>
    )
}

export default Noidung23