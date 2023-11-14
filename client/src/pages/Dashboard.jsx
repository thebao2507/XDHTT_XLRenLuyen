import React from 'react'
import Menu from '../component/admin/Menu'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50/50">
            <Menu />
            <div className="p-4 xl:ml-80">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard