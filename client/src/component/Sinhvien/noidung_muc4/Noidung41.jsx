import React from 'react'
import { FaCircle } from "react-icons/fa";

const Noidung41 = () => {
    return (
        <div className='pl-4'>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Trường hợp vi phạm bị nhắc nhở: <b>-2đ</b>/lần</p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Vi phạm bị từ khiển trách đổ lên: <b className='pl-1'>-3đ</b>/lần</p>
            </div>
        </div>
    )
}

export default Noidung41