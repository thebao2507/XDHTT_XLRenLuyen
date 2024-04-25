import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const ThongbaoSV = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('')
    const [yeucau, setYeucau] = useState(false)

    const magv = !user ? "error" : user[0].magv

    const editor = document.querySelector('.ql-editor');
    const textContent = editor ? editor.textContent : '';

    const handleSubmit = () => {
        // console.log('cc')
        axios.post('http://localhost:8000/giaovien/thongbaosv', {
            magv,
            title,
            textContent
        })
        alert("lưu thông báo thành công")
        window.location.reload()
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/giaovien/xoathongbao/${!user ? "error" : user[0].magv}`)
            .then(response => {
                alert('Xóa thông báo thành công!');
                window.location.reload(); // Reload trang sau khi xóa thông báo thành công
            })
            .catch(error => {
                console.error('Đã xảy ra lỗi khi xóa thông báo:', error);
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/giaovien/laythongbao/${!user ? "error" : user[0].magv}`)
            .then((response) => {
                const { data } = response
                if (data.length > 0) {
                    setYeucau(true)
                }
            })
            .catch((error) => {
                console.log("lỗi khi lấy dữ liệu", error)
            })
    })

    return (
        <div>
            <div className='flex items-center mb-5'>
                <label htmlFor="" className='block w-[8%] text-base font-medium text-gray-900 dark:text-black'>Tiêu đề</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5'
                />
            </div>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
            />
            <div dangerouslySetInnerHTML={{ __html: content }} />

            {
                // false có nghĩa là chưa nhập thông báo còn true là đã có
                yeucau === false ? (
                    <button
                        onClick={handleSubmit}
                        className='text-gray-900 bg-white mt-2 border border-gray-300 font-medium rounded-lg text-sx px-6 py-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600'
                    >
                        lưu
                    </button>
                ) : (
                    <>
                        <p className='my-2'>đã có thông báo , xóa để nhập mới</p>
                        <button onClick={handleDelete} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Xóa</button>
                    </>
                )
            }
        </div>
    )
}

export default ThongbaoSV