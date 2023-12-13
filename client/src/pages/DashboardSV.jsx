import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuSV from '../component/Sinhvien/MenuSV'
import MenuCBL from '../component/Sinhvien/MenuCBL'

const DashboardSV = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(user[0].chucvu)
    return (
        <div className='min-h-screen bg-gray-50/50'>
            {user[0].chucvu === 'không' ? (
                <MenuSV user={user} />
            ) : (
                <MenuCBL />
            )}
            <div className='p-4 xl:ml-64'>
                <Outlet user={user} />
            </div>
        </div>
    )
}

export default DashboardSV