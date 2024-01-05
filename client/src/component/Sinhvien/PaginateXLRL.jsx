import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { GrNext, GrPrevious } from "react-icons/gr"
import axios from 'axios'
import Ketquahoctap from './noidung/Ketquahoctap'
import Noidung13 from './noidung/Noidung13'
import Noidung14 from './noidung/Noidung14'
import Noidung21 from './noidung_muc2/Noidung21'
import Noidung22 from './noidung_muc2/Noidung22'
import Noidung23 from './noidung_muc2/Noidung23'
import Noidung6 from './noidung_muc6/Noidung6'
import Noidung52 from './noidung_muc5/Noidung52'
import Noidung51 from './noidung_muc5/Noidung51'
import Noidung43 from './noidung_muc4/Noidung43'
import Noidung41 from './noidung_muc4/Noidung41'
import Noidung42 from './noidung_muc4/Noidung42'
import Noidung31 from './noidung_muc3/Noidung31'
import Noidung12 from './noidung/Noidung12'


const evaluationItems = [
    {
        idmuc: 1,
        titlemuc: 'Ý thức học tập',
        dsm: [
            { iddsm: 1.1, title: 'Kết quả học tập', noidung: <Ketquahoctap /> },
            { iddsm: 1.2, title: 'Ý thức và kết quả tham gia các hoạt động học thuật', noidung: <Noidung12 /> },
            { iddsm: 1.3, title: 'Tích học nâng cao trình độ ngoại ngữ:', noidung: <Noidung13 /> },
            { iddsm: 1.4, title: 'Chấp hành tốt các nội quy, quy định về học vụ (chuyên cần, thực hành thực tế, thực tập): +4đ', noidung: <Noidung14 /> },
        ]
    },
    {
        idmuc: 2,
        titlemuc: 'Ý thức và kết quả chấp hành nội quy, quy chế trong nhà trường',
        dsm: [
            { iddsm: 2.1, title: 'Chấp hành đầy đủ và không vi phạm các nội quy, quy chế về: học tập, sinh hoạt, thực hiện nếp sống văn hóa, văn minh: +20đ', noidung: <Noidung21 /> },
            { iddsm: 2.2, title: 'Chấp hành đầy đủ và không vi phạm các quy chế nội, ngoại trú: +5đ', noidung: <Noidung22 /> },
            { iddsm: 2.3, title: 'Sinh viên vi phạm các nội quy, quy chế thi,… bị kỷ luật', noidung: <Noidung23 /> },
        ]
    },
    {
        idmuc: 3,
        titlemuc: 'Ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội:',
        dsm: [
            { iddsm: 3.1, title: 'Tham gia các hoạt động chính trị-XH, VH-VN-TDTT, ngoại khóa, phòng chống tệ nạn XH:', noidung: <Noidung31 /> },
            { iddsm: 3.2, title: `Tham gia các hoạt động huy động lực lượng (cấp khoa trở lên): +3đ/lần`, noidung: '' },
        ]
    },
    {
        idmuc: 4,
        titlemuc: 'Phẩm chất công dân và quan hệ cộng đồng',
        dsm: [
            { iddsm: 4.1, title: 'Chấp hành tốt và tuyên truyền các chủ trương của Đảng, chính sách, pháp luật của Nhà nước; quan hệ tốt trong lớp, trong trường, ở nơi cư trú; có lối sống lành mạnh (không sử dụng ma túy và các chất gây nghiện; không hút thuốc lá; hạn chế uống rượu, bia,...): +15đ', noidung: <Noidung41 /> },
            { iddsm: 4.2, title: 'Tham gia các hoạt động tình nguyện, hoạt động xã hội:', noidung: <Noidung42 /> },
            { iddsm: 4.3, title: 'Tham gia giữ gìn trật tự an toàn xã hội, đấu tranh bảo vệ pháp luật; chia sẻ giúp đỡ người thân; cứu giúp người khó khăn, hoạn nạn: +3đ', noidung: <Noidung43 /> },
        ]
    },
    {
        idmuc: 5,
        titlemuc: 'Ý thức và kết quả tham gia hoạt động của lớp, các đoàn thể, tổ chức khác trong trường',
        dsm: [
            { iddsm: 5.1, title: 'Ban cán sự lớp, cán bộ Đoàn (chi đoàn, LCĐ, Đoàn trường), cán bộ Hội Sinh viên (chi hội, LCH, HSV trường), đội trưởng/phó đội xung kích (khoa, trường), ban chủ nhiệm các CLB thuộc khoa:', noidung: <Noidung51 /> },
            { iddsm: 5.2, title: 'Sinh viên là nhân tố tích cực trong các hoạt động của lớp, khoa, trường (không thuộc các đối tượng ở mục 5.1):', noidung: <Noidung52 /> },
            { iddsm: 5.3, title: `Là thành viên của ít nhất 1 câu lạc bộ học thuật/kỹ năng của Trường Đại học Quy Nhơn: +3đ`, noidung: '' },
        ]
    },
    {
        idmuc: 6,
        titlemuc: 'Sinh viên có thành tích đặc biệt',
        dsm: [
            { iddsm: 6, title: 'Sinh viên có thành tích đặc biệt:', noidung: <Noidung6 /> }
        ]
    }
]

const PanigateXLRL = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const trangthai = localStorage.getItem('trangthai')
    const datahoc = JSON.parse(localStorage.getItem('datahocki'));
    const d = datahoc.filter(item => item.trangthai === 'pending')

    // const [selectedItem, setSelectedItem] = useState(null)

    // const handleItemClick = (index) => {
    //     setSelectedItem(index);
    // }
    //${dsmItem.iddsm === selectedItem ? 'h-[1px]' : '' }

    const [form, setForm] = useState({
        items: evaluationItems,
        totalScore: 0,
        totaltapthelopdanhgia: 0
    });

    const calculateTotal = (items) => {
        let total = 0;
        items.forEach((item) => {
            item.dsm.forEach((dsmItem) => {
                const studentScore = parseFloat(dsmItem.studentScore);
                if (!isNaN(studentScore)) {
                    total += studentScore;
                }
            });
        });
        // Nếu tổng vượt quá 100, gán giá trị total là 100
        if (total > 100) {
            total = 100;
        }
        return total;
    };

    const handleChange = (e, itemId, dsmId, field) => {
        const { value } = e.target;
        const updatedItems = form.items.map((item) => {
            if (item.idmuc === itemId) {
                const updatedDsm = item.dsm.map((dsmItem) => {
                    if (dsmItem.iddsm === dsmId) {
                        return { ...dsmItem, [field]: value };
                    }
                    return dsmItem;
                });
                return { ...item, dsm: updatedDsm };
            }
            return item;
        });

        const totalScore = calculateTotal(updatedItems);

        setForm({
            items: updatedItems,
            totalScore,
            totaltapthelopdanhgia: form.totaltapthelopdanhgia,
        });
    };

    useEffect(() => {
        console.log(form)
        //console.log(typeof (trangthai))
    }, [form])


    const handleSubmit = () => {
        const evaluationData = {
            username: !user ? "error" : user[0].username,
            totalScore: form.totalScore,
            totallopdanhgia: form.totaltapthelopdanhgia,
            hocki: d[0].hocki,
            namhoc: d[0].namhoc,
            items: form.items.reduce((acc, item) => {
                const dsmData = item.dsm.map((dsmItem) => ({
                    iddsm: dsmItem.iddsm,
                    studentScore: dsmItem.studentScore || '0',
                    lopdanhgia: dsmItem.lopdanhgia || '0',
                    note: dsmItem.note || '',
                }));
                return acc.concat(dsmData);
            }, []),
        }
        //console.log(evaluationData)
        axios.post('http://localhost:5000/sinhvien/xlrl', evaluationData)
            .then((response) => {
                console.log('Đánh giá đã được lưu vào cơ sở dữ liệu.', response.config.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gửi đánh giá tới máy chủ:', error);
            });

        localStorage.setItem('trangthai', 'true')
        window.location.reload();
    }

    return (
        <div>
            {/*phần thông tin */}
            <div>
                <h1 className='font-bold text-center text-2xl'>PHIẾU ĐÁNH GIÁ KẾT QUẢ RÈN LUYỆN SINH VIÊN</h1>
                <div className='flex items-center justify-center'>
                    <div className='pl-20'>
                        <h3>HỌC KỲ: <input type="text" value={d[0].hocki} className='border-b border-black outline-none bg-transparent w-1/3' required /></h3>
                    </div>
                    <div>
                        <h3>NĂM HỌC: <input type="text" value={d[0].namhoc} className='border-b border-black outline-none bg-transparent w-1/3' required /></h3>
                    </div>
                </div>
                <div className='flex translate-x-[15%] justify-between py-2 w-[80%]'>
                    <div className='flex items-center w-[50%]'>
                        <p className='pr-2 w-[140px]'>Họ tên sinh viên: </p>
                        <input
                            className='w-[300px] bg-transparent border-b border-gray-300 text-gray-900 text-sx  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={!user ? "error" : user[0].tensv} readOnly
                        />
                    </div>
                    <div className='flex items-center'>
                        <p className='pr-2'>Mã sinh viên: </p>
                        <input
                            className=' bg-transparent border-b border-gray-300 text-gray-900 text-sx  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={!user ? "error" : user[0].username} readOnly
                        />
                    </div>
                </div>
                <div className="flex translate-x-[15%] w-[80%] justify-between items-center auto-cols-max pb-2">
                    <div className='pr-4 flex items-center'>
                        <p className='pr-2'>Ngành học: </p>
                        <input
                            className=' bg-transparent border-b border-gray-300 text-gray-900 text-sx  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id=""
                        />
                    </div>
                    <div className='px-4 flex items-center w-[200px]'>
                        <p className='pr-2'>Khóa: </p>
                        <input
                            className='w-[140px]  bg-transparent border-b border-gray-300 text-gray-900 text-sx  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={!user ? "error" : user[0].khoahoc} readOnly
                        />
                    </div>
                    <div className='px-4 flex items-center'>
                        <p className='pr-2'>Lớp sinh hoạt: </p>
                        <input
                            className=' bg-transparent border-b border-gray-300 text-gray-900 text-sx  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id=""
                        />
                    </div>
                </div>
                {/* chức vụ */}
                <div className="flex translate-x-[15%] w-[80%] justify-start items-center pb-2" >
                    <p className='pr-4'>Chức vụ(ban đại diện lớp, đoàn hội...): </p>
                    <input
                        className='w-[560px] bg-transparent border-b border-gray-300 text-gray-900 text-sx  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                        type="text" name="" id="" value={!user ? "error" : user[0].chucvu} readOnly
                    />
                </div>

                <div className='flex translate-x-[15%] justify-between pb-2 w-[80%]'>
                    <div className='flex items-center'>
                        <p className='pr-2 w-[370px]'><b className='pr-2 font-bold'>Kết luận</b>của Hội đồng cấp khoa: Điểm rèn luyện:</p>
                        <input
                            className='w-[150px] bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" readOnly
                        />
                    </div>
                    <div className='flex items-center'>
                        <p className='pr-2'>Xếp loại rèn luyện: </p>
                        <input
                            className='w-[160px] bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" readOnly
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center'>
                    {/* Giao diện trang 1 */}
                    <table className='border-2'>
                        <thead className='border-2'>
                            <tr className='border-2'>
                                <th scope="col" className="px-6 py-3 border-2 rounded-s-lg text-xl">
                                    Nội dung đánh giá
                                </th>
                                <th scope="col" className="px-6 py-3 border-2 rounded-s-lg text-base">
                                    SV tự đ.giá
                                </th>
                                <th scope="col" className="px-6 py-3 border-2 rounded-s-lg text-base">
                                    T.thể lớp đánh giá
                                </th>
                                <th scope="col" className="px-6 py-3 border-2 rounded-s-lg text-base">
                                    Ghi chú
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {form.items.map((item) => (
                                <React.Fragment key={item.idmuc}>
                                    <tr className=' text-center'>
                                        <td className=''>{item.idmuc}. {item.titlemuc}</td>
                                        <td className=''></td>
                                        <td className=''></td>
                                        <td className=''></td>
                                    </tr>
                                    {item.dsm.map((dsmItem) => (
                                        <tr key={dsmItem.iddsm}>
                                            <td className='border-2'>
                                                {dsmItem.iddsm} {dsmItem.title}
                                                <tr>
                                                    <td>{dsmItem.noidung}</td>
                                                </tr>
                                            </td>
                                            <td className='w-[5%] h-[0px] border-2'>
                                                <input
                                                    type="text"
                                                    pattern="[0-9]*"
                                                    inputMode="numeric"
                                                    value={dsmItem.studentScore || ''}
                                                    onChange={(e) =>
                                                        handleChange(e, item.idmuc, dsmItem.iddsm, 'studentScore')
                                                    }
                                                    className='w-full h-full py-1.5 rounded-md text-gray-900 bg-[#f7f4f4]'
                                                />
                                            </td>
                                            <td className='w-[5%] h-[0px] border-2'>
                                                <input
                                                    type="text"
                                                    value={dsmItem.lopdanhgia || ''}
                                                    onChange={(e) =>
                                                        handleChange(e, item.idmuc, dsmItem.iddsm, 'lopdanhgia')
                                                    }
                                                    readOnly
                                                    className='w-full h-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-[#f7f4f4]'
                                                />
                                            </td>
                                            <td className={`w-[26%] border-2 h-[0px]`}>
                                                <textarea
                                                    cols="40"
                                                    rows="6"
                                                    type="text"
                                                    value={dsmItem.note || ''}
                                                    onChange={(e) =>
                                                        handleChange(e, item.idmuc, dsmItem.iddsm, 'note')
                                                    }
                                                    className='w-full h-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-[#f7f4f4]'
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <div>
                        {trangthai === 'true' ? (
                            <p className='text-green-500'>Đã lưu rồi</p>
                        ) : (
                            <>
                                <p className='font-semibold text-red-500'>Xem kĩ lại đánh giá trước khi nhấn Save</p>
                                <button
                                    onClick={handleSubmit}
                                    className='text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sx px-6 py-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600'>
                                    Save
                                </button>
                            </>
                        )
                        }
                    </div>
                    <div className='font-semibold text-xl'>Tổng điểm: {form.totalScore}</div>
                </div>
            </div>

        </div>
    )
}

export default PanigateXLRL