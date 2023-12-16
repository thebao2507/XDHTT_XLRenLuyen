import React, { useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import MenuGV from '../component/giangvien/MenuGV'

const DashboardGV = () => {

    return (
        <div className="min-h-screen bg-gray-50/50">
            <MenuGV />
            <div className="p-4 xl:ml-80">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardGV