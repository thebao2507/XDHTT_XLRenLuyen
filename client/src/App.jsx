import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Thongke from "./component/admin/Thongke";
import Danhsachhocky from "./component/admin/Danhsachhocky";
import DashboardSV from "./pages/DashboardSV";
import Hoatdong from "./component/Sinhvien/Hoatdong";
import KetquaRL from "./component/Sinhvien/KetquaRL";
import PaginateXLRL from "./component/Sinhvien/PaginateXLRL";
import Thongbao from "./component/Sinhvien/Thongbao";
import DanhsachHDRL from "./component/admin/DanhsachHDRL";
import DashboardGV from "./pages/DashboardGV";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/trangchu',
                element: <Thongke />
            },
            {
                path: '/dashboard/danhsachhocky',
                element: <Danhsachhocky />
            },
            {
                path: '/dashboard/danhsachhoatdongrenluyen',
                element: <DanhsachHDRL />
            }
        ]
    },
    {
        path: "/dashboardSV",
        element: <DashboardSV />,
        children: [
            {
                path: '/dashboardSV/hoatdongrenluyen',
                element: <Hoatdong />
            },
            {
                path: '/dashboardSV/ketquarenluyen',
                element: <KetquaRL />
            },
            {
                path: '/dashboardSV/writeXLRL',
                element: <PaginateXLRL />
            },
            {
                path: '/dashboardSV/thongbao',
                element: <Thongbao />
            }
        ]
    },
    {
        path: '/dashboardGV',
        element: <DashboardGV />
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
