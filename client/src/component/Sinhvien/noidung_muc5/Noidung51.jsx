import React from 'react'
import { FaCircle } from "react-icons/fa";

const Noidung51 = () => {
    return (
        <div className='pl-4'>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Hoàn thành nhiệm vụ (hoàn thành/tốt/xuất sắc): <b>+1đ</b> đến <b>+7đ</b></p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Không hoàn thành nhiệm vụ: <b>-1đ</b> đến <b>-2đ</b></p>
            </div>
        </div>
    )
}

export default Noidung51