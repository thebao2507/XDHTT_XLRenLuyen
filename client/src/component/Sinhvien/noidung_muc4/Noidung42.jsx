import React from 'react'
import { FaCircle, FaRegCircle } from "react-icons/fa";

const Noidung42 = () => {
    return (
        <div className='pl-4'>
            <div className='flex items-center'>
                <FaCircle className='text-[14px]' />
                <p className='pl-2'>Tham gia (đạt yêu cầu trở lên) chuỗi hoạt động tình nguyện có quy mô vừa/lớn (mùa hè xanh, tiếp sức mùa thi,…): <b>+7đ</b> đến <b>+10đ</b>/lần</p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Tham gia các hoạt động tình nguyện tại chỗ (trong ngày): <b>+3đ</b>/lần</p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Hiến máu tình nguyện (có giấy chứng nhận): <b>+5đ</b>/lần</p>
            </div>
            <div className='flex items-start'>
                <FaCircle className='text-[8px] mt-2' />
                <div className='pl-2'>
                    <p>Tham gia đội xung kích của khoa:</p>
                    <ul className='ml-8'>
                        <li className='flex items-center'>
                            <FaRegCircle className='text-[8px]' />
                            <p className='pl-1'>Hoàn thành nhiệm vụ: <b>+3đ</b></p>
                        </li>
                        <li className='flex items-center'>
                            <FaRegCircle className='text-[8px]' />
                            <p className='pl-1'>Hoàn thành tốt/xuất sắc nhiệm vụ: <b>+6đ</b></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Tham gia đội xung kích trường: <b>+3đ</b></p>
            </div>
        </div>
    )
}

export default Noidung42