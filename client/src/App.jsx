import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Thongke from "./component/admin/Thongke";
import Danhsachhocky from "./component/admin/Danhsachhocky";
import DashboardSV from "./pages/DashboardSV";
import Page1 from "./component/Sinhvien/Page1";
import Page2 from "./component/Sinhvien/Page2";

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
            }
        ]
    },
    {
        path: "/DashboardSV",
        element: <DashboardSV />,
        children: [
            {
                path: '/DashboardSV/page1',
                element: <Page1 />
            },
            {
                path: '/DashboardSV/page2',
                element: <Page2 />
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
