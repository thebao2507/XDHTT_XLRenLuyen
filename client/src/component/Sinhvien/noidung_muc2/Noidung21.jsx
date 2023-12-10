import React from 'react'
import { FaCircle } from "react-icons/fa";

const Noidung21 = () => {
    return (
        <div className='pl-4'>
            <p>Trong trường hợp có vi phạm thì điểm trên sẽ bị giảm trừ như sau:</p>
            <div className='flex items-start'>
                <FaCircle className='text-[10px] mt-2' />
                <p className='pl-2'>Không tham gia (hoặc bài thu hoạch không đạt) các buổi sinh hoạt chính trị đầu năm, đầu khóa, cuối khóa: <b>-10đ</b></p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Vắng đại hội lớp, đoàn, hội (không có lý do chính đáng): <b>-7đ</b></p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Vắng sinh hoạt lớp, đoàn,… (không lý do chính đáng): <b>-5đ</b></p>
            </div>
            <div className='flex items-start'>
                <FaCircle className='text-[10px] mt-2' />
                <p className='pl-2'>Đóng học phí, các loại quỹ (lớp, đoàn, hội,...): đóng trễ hạn <b>-2đ</b>/nội dung, không đóng <b>-5đ</b>/nội dung.</p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Vi phạm quy định đồng phục, trang phục: <b>-1đ</b></p>
            </div>
            <div className='flex items-center'>
                <FaCircle className='text-[8px]' />
                <p className='pl-2'>Các trường hợp khác do lớp, hội đồng khoa quyết định điểm trừ.</p>
            </div>
        </div>
    )
}

export default Noidung21