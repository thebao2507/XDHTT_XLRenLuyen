import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuSV from '../component/Sinhvien/MenuSV'

const DashboardSV = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className='min-h-screen bg-gray-50/50'>
            {/*<p className='text-center'>{user[0].username}</p>*/}
            <MenuSV user={user} />
            <div className='p-4 xl:ml-64'>
                <Outlet user={user} />
            </div>
        </div>
    )
}

export default DashboardSV