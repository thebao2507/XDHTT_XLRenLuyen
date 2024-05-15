import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/login/Login";
import Dashboard from "./pages/Dashboard";
import Thongke from "./component/admin/Thongke";
import Danhsachhocky from "./component/admin/Danhsachhocky";
import DashboardSV from "./pages/DashboardSV";
import Hoatdong from "./component/Sinhvien/Hoatdong";
import PaginateXLRL from "./component/Sinhvien/PaginateXLRL";
import Thongbao from "./component/Sinhvien/Thongbao";
import DanhsachHDRL from "./component/admin/DanhsachHDRL";
import DashboardGV from "./pages/DashboardGV";
import DSSV from "./component/giangvien/DSSV";
import ForgotPass from "./component/yuki/ForgotPass";
import ThongbaoSV from "./component/giangvien/ThongbaoSV";
import QLDSDRL from "./component/Sinhvien/componentCBL/QLDSDRL";
import DSHDLop from "./component/Sinhvien/componentCBL/DSHDLop";
import Chitiet from "./component/Sinhvien/componentCBL/Chitiet";
import KetquaRL from "./component/Sinhvien/KetquaRL"
import PrivateRoute from "./component/auth/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/forgotpassword',
        element: <ForgotPass />
    },
    {
        path: '/dashboardSV/chitietdanhgia/:masv',
        element: <Chitiet />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
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
        element: <PrivateRoute><DashboardSV /></PrivateRoute>,
        children: [
            {
                path: '/dashboardSV/hoatdongrenluyen',
                element: <Hoatdong />
            },
            {
                path: '/dashboardSV/ketquarl',
                element: <KetquaRL />
            },
            {
                path: '/dashboardSV/writeXLRL',
                element: <PaginateXLRL />
            },
            {
                path: '/dashboardSV/thongbao',
                element: <Thongbao />
            },
            {
                path: '/dashboardSV/qldsdrl',
                element: <QLDSDRL />
            },
            {
                path: '/dashboardSV/qldshd',
                element: <DSHDLop />
            }
        ]
    },
    {
        path: '/dashboardGV',
        element: <PrivateRoute><DashboardGV /></PrivateRoute>,
        children: [
            {
                path: '/dashboardGV/dssv',
                element: <DSSV />
            },
            {
                path: '/dashboardGV/thongbaosv',
                element: <ThongbaoSV />
            }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
