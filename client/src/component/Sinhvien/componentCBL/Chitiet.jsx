import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { evaluationItems } from '../componentCBL/Evaluation'
import axios from 'axios'



const Chitiet = () => {
    const { masv } = useParams()
    const [diemchitiet, setDiemchitiet] = useState([])
    const [xlrl, setXlrl] = useState('')
    const datahoc = JSON.parse(localStorage.getItem('datahocki'));
    const d = datahoc.filter(item => item.trangthai === 'pending')
    const [thongtin, setThongtin] = useState([])

    const [form, setForm] = useState({
        items: evaluationItems,
        totalScore: 0,
        totaltapthelopdanhgia: 0
    });

    const calculateTotal = (items) => {
        let total = 0;
        items.forEach((item) => {
            item.dsm.forEach((dsmItem) => {
                const lopdanhgia = parseFloat(dsmItem.lopdanhgia);
                if (!isNaN(lopdanhgia)) {
                    total += lopdanhgia;
                }
            });
        });
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
            totaltapthelopdanhgia: totalScore
        });
    };


    const handleSubmit = () => {
        const evaluationData = {
            username: masv,
            totallopdanhgia: form.totaltapthelopdanhgia,
            hocki: d[0].hocki,
            namhoc: d[0].namhoc,
            xeploai: xlrl,
            trangthai: 'xong',
            items: form.items.reduce((acc, item) => {
                const dsmData = item.dsm.map((dsmItem) => ({
                    iddsm: dsmItem.iddsm,
                    lopdanhgia: dsmItem.lopdanhgia || '0',
                    note: dsmItem.note || '',
                }));
                return acc.concat(dsmData);
            }, []),
        }
        //console.log(evaluationData)
        axios.post('http://localhost:8000/sinhvien/capnhatxlrl', evaluationData)
            .then((response) => {
                alert('đánh giá đã được cập nhật')
                console.log('Đánh giá đã được lưu vào cơ sở dữ liệu.', response.config.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gửi đánh giá tới máy chủ:', error);
            });

        //localStorage.setItem('trangthai', 'true')
        //window.location.reload();
    }


    //console.log(form)

    useEffect(() => {
        Promise.all([
            axios.get(`http://localhost:8000/sinhvien/laychitietrl/${masv}`),
            axios.get(`http://localhost:8000/sinhvien/laythongtinsinhvienedit/${masv}`)
            // Thêm các yêu cầu Axios khác vào đây nếu cần
        ])
            .then((responses) => {
                const [firstResponse, secondResponse] = responses;
                const firstData = firstResponse.data;
                const secondData = secondResponse.data;
                // responses sẽ chứa kết quả của tất cả các yêu cầu Axios
                setDiemchitiet(firstData)
                setThongtin(secondData)
                //console.log(diemchitiet)
            })
            .catch((error) => {
                console.log("lỗi khi lấy dữ liệu", error);
            });
    })
    return (
        <div>
            <div>
                <h1 className='font-bold text-center text-2xl'>PHIẾU ĐÁNH GIÁ KẾT QUẢ RÈN LUYỆN SINH VIÊN</h1>
                <div className='flex items-center justify-center'>
                    <div className='pl-20'>
                        <h3>HỌC KỲ: <input type="text" className='border-b border-black outline-none bg-transparent w-1/3' value={d[0].hocki} /></h3>
                    </div>
                    <div>
                        <h3>NĂM HỌC: <input type="text" className='border-b border-black outline-none bg-transparent w-1/3' value={d[0].namhoc} /></h3>
                    </div>
                </div>
                <div className='flex translate-x-[15%] justify-between py-2 w-[80%]'>
                    <div className='flex items-center w-[50%]'>
                        <p className='pr-2 w-[180px]'>Họ tên sinh viên: </p>
                        <input
                            className='w-full bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={thongtin.length > 0 ? thongtin[0].tensv : '...'} readOnly
                        />
                    </div>
                    <div className='flex items-center'>
                        <p className='pr-2'>Mã sinh viên: </p>
                        <input
                            className='bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={masv} readOnly
                        />
                    </div>
                </div>
                <div className="flex translate-x-[15%] w-[80%] justify-between items-center auto-cols-max pb-2">
                    <div className='pr-4 flex items-center'>
                        <p className='pr-2'>Ngành học: </p>
                        <input
                            className='bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={thongtin.length > 0 ? thongtin[0].tennganh : '...'} readOnly
                        />
                    </div>
                    <div className='px-4 flex items-center w-[200px]'>
                        <p className='pr-2'>Khóa: </p>
                        <input
                            className='bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={thongtin.length > 0 ? thongtin[0].khoahoc : '...'} readOnly
                        />
                    </div>
                    <div className='px-4 flex items-center'>
                        <p className='pr-2'>Lớp sinh hoạt: </p>
                        <input
                            className='bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={thongtin.length > 0 ? thongtin[0].tenlop : '...'} readOnly
                        />
                    </div>
                </div>
                {/* chức vụ */}
                <div className="flex translate-x-[15%] w-[80%] justify-start items-center pb-2" >
                    <p className='pr-4 w-[400px]'>Chức vụ(ban đại diện lớp, đoàn hội...): </p>
                    <input
                        className='w-full bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                        type="text" name="" id="" value={thongtin.length > 0 ? thongtin[0].chucvu : '...'} readOnly
                    />
                </div>

                <div className='flex translate-x-[15%] justify-between pb-2 w-[80%]'>
                    <div className='flex items-center'>
                        <p className='pr-2 w-[650px]'><b className='pr-2 font-bold'>Kết luận</b>của Hội đồng cấp khoa: Điểm rèn luyện:</p>
                        <input
                            className='w-full bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id=""
                        />
                    </div>
                    <div className='flex items-center'>
                        <p className='pr-2'>Xếp loại rèn luyện: </p>
                        <input
                            className='w-[100px] bg-transparent border-b border-gray-300 text-gray-900 text-sm  block px-2.5 py-1 dark:bg-white-700 dark:border-gray-600  dark:text-black'
                            type="text" name="" id="" value={xlrl} onChange={e => setXlrl(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-[80%] ml-40 mt-5'>
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
                                                //value={dsmItem.studentScore || ''}
                                                //onChange={(e) =>
                                                //    handleChange(e, item.idmuc, dsmItem.iddsm, 'studentScore')
                                                //}
                                                //value={diemchitiet.map(item => item.studentScore)}
                                                value={diemchitiet.find((item) => item.iddsm === dsmItem.iddsm)?.studentScore}
                                                readOnly
                                                className='w-full h-full py-1.5 rounded-md text-gray-900 bg-[#EBE7E6]'
                                            />
                                        </td>
                                        <td className='w-[5%] h-[0px] border-2'>
                                            <input
                                                type="text"
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                                //value={dsmItem.lopdanhgia || ''}
                                                //onChange={(e) =>
                                                //    handleChange(e, item.idmuc, dsmItem.iddsm, 'lopdanhgia')
                                                //}
                                                //readOnly
                                                value={dsmItem.lopdanhgia || ''}
                                                onChange={(e) =>
                                                    handleChange(e, item.idmuc, dsmItem.iddsm, 'lopdanhgia')
                                                }
                                                className='w-full h-full rounded-md border-0 py-1.5 text-gray-900 bg-[#EBE7E6]'
                                            />
                                        </td>
                                        <td className='w-[22%] h-[0px] border-2'>
                                            <input
                                                type="text"
                                                //value={dsmItem.note || ''}
                                                //onChange={(e) =>
                                                //    handleChange(e, item.idmuc, dsmItem.iddsm, 'note')
                                                //}
                                                placeholder={diemchitiet.find((item) => item.iddsm === dsmItem.iddsm)?.ghichu}
                                                value={dsmItem.note || ''}
                                                //value={dsmItem.note || dsmItem.note === (diemchitiet.find((item) => item.iddsm === dsmItem.iddsm)?.ghichu)}
                                                onChange={(e) => handleChange(e, item.idmuc, dsmItem.iddsm, 'note')}
                                                className='w-full h-full block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 bg-[#EBE7E6]'
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex items-center justify-around mt-5'>
                <button className='text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sx px-6 py-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600' onClick={handleSubmit}>save</button>
                <p className='font-semibold text-xl'>Tổng điểm cbl đánh giá: {form.totaltapthelopdanhgia}</p>
            </div>
        </div>
    )
}

export default Chitiet