import {createBrowserRouter, Navigate} from "react-router-dom"
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/Register"


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <Navigate to="/login" replace />
    }
])