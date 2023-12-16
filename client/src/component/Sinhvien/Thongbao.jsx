import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FaRegCircle } from 'react-icons/fa'

const danhmucs = [
    {
        title: 'Cột Ghi chú ghi cụ thể nội dung của cộng/trừ điểm tương ứng',
        child: ''
    },
    {
        title: 'Người học bị kỷ luật:',
        child: (
            <ul className='ml-36'>
                <li className='flex items-center'>
                    <FaRegCircle className='text-[8px] w-[20px]' />
                    <p>mức <b>khiển trách</b>, khi đánh giá kết quả rèn luyện không được vượt quá loại <b>khá</b>.</p>
                </li>
                <li className='flex items-center'>
                    <FaRegCircle className='text-[8px] w-[20px]' />
                    <p>mức <b>cảnh cáo</b>, khi đánh giá kết quả rèn luyện không được vượt quá loại <b>trung bình</b>.</p>
                </li>
            </ul>)
    },
    {
        title: 'Mục 1.1, cần ghi rõ kết quả học tập (điểm TBC học kỳ) của kỳ đang xét và kỳ trước để đối chiếu.',
        child: ''
    },
    {
        title: 'Điểm trừ (nếu có) ở mục 1.4, mục 2 và mục 4.1 không vượt quá (tổng) số điểm của mục tương ứng (đảm bảo tổng điểm của mỗi mục tương ứng là không âm).',
        child: ''
    },
    {
        title: <p>Mục 5.1 tiến hành theo hình thức sv trong lớp/BCH LCĐ/BCH LCH/thành viên đội xung kích khoa <b>bỏ phiếu</b> đánh giá (theo thang điểm từ -2 đến +7) mức độ đóng góp của các cá nhân trong danh sách BCS lớp, BCH chi đoàn, BCH chi hội sv/BCH LCĐ/BCH LCH/đội trưởng, phó đội xung kích khoa. Sinh viên kiêm nhiệm nhiều chức vụ thì chỉ tính điểm 1 mục.</p>,
        child: ''
    },
    {
        title: <p>Mục 5.2, danh sách sẽ được <b>đề xuất</b> và <b>thống nhất</b> bởi CVHT, BCS lớp, BCH LCĐ, BCH LCH SV, BCH chi đoàn, BCH chi hội SV và các SV trong lớp. Trường hợp đặc biệt sẽ được hội đồng khoa xem xét</p>,
        child: ''
    },
    {
        title: <p>Người học bị xếp loại rèn luyện Yếu, Kém trong 2 học kỳ liên tiếp thì phải <b>tạm ngừng</b> học ít nhất 1 học kỳ ở học kỳ tiếp theo và bị xếp loại Yếu, Kém 2 học kỳ liên tiếp lần thứ 2 thì sẽ bị buộc <b>thôi học</b>.</p>,
        child: ''
    },
    {
        title: 'Điểm cộng được tính trên mỗi chương trình, hoạt động,... đã tham gia (Lưu ý: các chương trình, hoạt động phải được khoa, LCĐ/LCH xác nhận, và phải được ghi chi tiết tên và kết quả trong cột Ghi chú)',
        child: ''
    },
    {
        title: 'Chứng chỉ được tính nếu vẫn còn giá trị hiệu lực tại học kỳ đang xét rèn luyện.',
        child: ''
    },
    {
        title: 'Các hoạt động tình nguyện được tính là do trường/khoa/LCĐ/LCH hoặc các đơn vị tương đương tổ chức. Nếu lớp/chi đoàn/chi hội tổ chức thì cần khoa/LCĐ/LCH duyệt và chấp thuận kế hoạch.',
        child: ''
    },
    {
        title: 'Dựa vào bảng đánh giá xếp loại hàng kỳ của đội xung kích khoa.',
        child: ''
    },
    {
        title: 'Các trường hợp đặc biệt sẽ do Hội đồng khoa quyết định',
        child: ''
    },
    {
        title: 'Quy mô tổ chức phải đạt ít nhất từ 25% thành viên lớp tham gia.',
        child: ''
    },
    {
        title: '',
        child: (
            <table className='border-2 w-[80%] ml-20 mt-5'>
                <tr>
                    <td colspan="6" className='text-center'><b>Phân loại kết quả rèn luyện</b></td>
                </tr>
                <tr className='border-2'>
                    <td className='border-2 text-center' colSpan='3'>
                        <ul className='ml-20'>
                            <li className='flex items-center'>
                                <FaRegCircle className='text-[8px] w-[20px]' />
                                <p>90 '' Tổng điểm: Xuất sắc</p>
                            </li>
                            <li className='flex items-center'>
                                <FaRegCircle className='text-[8px] w-[20px]' />
                                <p>80 '' Tổng điểm '' 90 điểm: Tốt</p>
                            </li>
                            <li className='flex items-center'>
                                <FaRegCircle className='text-[8px] w-[20px]' />
                                <p>65 '' Tổng điểm '' 80 điểm: khá</p>
                            </li>
                        </ul>
                    </td>
                    <td className='border-2 text-center' colSpan='3'>
                        <ul className='ml-20'>
                            <li className='flex items-center'>
                                <FaRegCircle className='text-[8px] w-[20px]' />
                                <p>50 '' Tổng điểm '' 65 điểm: TB</p>
                            </li>
                            <li className='flex items-center'>
                                <FaRegCircle className='text-[8px] w-[20px]' />
                                <p>35 '' Tổng điểm '' 50 điểm: Yếu</p>
                            </li>
                            <li className='flex items-center'>
                                <FaRegCircle className='text-[8px] w-[20px]' />
                                <p>35 '' Tổng điểm: kém</p>
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
        )
    }
]



const Thongbao = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [thongtin, setThongtin] = useState([])
    const [thongbao, setThongbao] = useState([])

    const notify = () => toast(`Hello sinh viên ${user[0].tensv} !`, {
        style: {
            backgroundColor: '#F7D477', // Màu nền của toast
            color: 'black' // Màu chữ của toast
        },
        position: toast.POSITION.TOP_CENTER
    });

    /*useEffect(() => {
        axios.get(`http://localhost:5000/sinhvien/laythongtin/${user[0].masv}`)
            .then((response) => {
                const { data } = response
                setThongtin(data)
                //console.log(data)
            })
            .catch((error) => {
                console.log("lỗi khi lấy dữ liệu", error)
            })
    })*/

    useEffect(() => {
        Promise.all([
            axios.get(`http://localhost:5000/sinhvien/laythongtin/${user[0].masv}`),
            axios.get(`http://localhost:5000/sinhvien/laythongbao/${user[0].masv}`)
            // Thêm các yêu cầu Axios khác vào đây nếu cần
        ])
            .then((responses) => {
                // responses sẽ chứa kết quả của tất cả các yêu cầu Axios
                const [firstResponse, secondResponse] = responses;
                const firstData = firstResponse.data;
                const secondData = secondResponse.data;
                // Xử lý dữ liệu từ các yêu cầu ở đây
                setThongtin(firstData);
                setThongbao(secondData)
                // Xử lý dữ liệu từ yêu cầu thứ hai và các yêu cầu khác ở đây
                //console.log(firstData)
                //console.log(secondData)
            })
            .catch((error) => {
                console.log("lỗi khi lấy dữ liệu", error);
            });
    }, []);

    return (
        <div>
            <button
                onClick={notify}
                className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'
            >Nhấn để xem
            </button>
            <ToastContainer />
            {/*phần thông tin sinh viên*/}
            <div>
                <p className='border-b border-black font-semibold text-xl my-5'>Thông tin sinh viên</p>
                <div className='ml-2'>
                    <p><b>Tên sinh viên</b>: {user[0].tensv}</p>
                    <p><b>Mã sinh viên</b>: {user[0].username}</p>
                    {
                        thongtin.length > 0 ? (
                            <>
                                <p><b>Ngành</b>: {thongtin[0].tenlop}</p>
                                <p><b>lớp</b>: {thongtin[0].tennganh}</p>
                            </>
                        ) : (
                            <p>...</p>
                        )
                    }
                </div>
            </div>
            {/*phần giáo viên thông báo cho sinh viên*/}
            <div>
                <p className='border-b border-black font-semibold text-xl my-5'>Thông báo của giáo viên</p>
                <div className='ml-2'>
                    {
                        thongbao.length > 0 ? (
                            <>
                                <p><b>Tiêu đề</b>: {thongbao[0].tieude}</p>
                                <p><b>Nội dung thông báo</b>: {thongbao[0].noidung}</p>
                            </>
                        ) : (
                            <p>...</p>
                        )
                    }
                </div>
            </div>
            {/*ghi chú phần đgrl*/}
            <div>
                <p className='border-b border-black font-semibold text-xl my-5'>Ghi chú cho phần đánh giá rèn luyện</p>
                <ul className='list-none'>
                    {
                        danhmucs.map(item => (
                            <li className='flex items-start justify-start'>
                                <FaRegCircle className='text-[8px] w-[20px] mt-2 mx-2' />
                                <div className='w-[100%]'>
                                    <p>{item.title}</p>
                                    <p className=''>{item.child}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Thongbao