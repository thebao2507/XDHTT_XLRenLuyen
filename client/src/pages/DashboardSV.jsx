import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuSV from '../component/Sinhvien/MenuSV'

const DashboardSV = () => {
    return (
        <div className='flex justify-between items-center'>
            Dashboard sinh vien
            <MenuSV />
            <div className='text-xl text-purple-500'>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardSV