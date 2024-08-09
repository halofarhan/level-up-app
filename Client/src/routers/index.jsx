import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import DashboardPage from "../views/DashboardPage";
import NewProfilePage from "../views/RegisterPage";

const router = createBrowserRouter([
    {   
        path: "/login",
        element: <LoginPage/>
    },
    {   
        path: "/my-dashboard",
        element: <DashboardPage/>,
        loader: () => {
            if(localStorage.isProfile === "false"){
                return redirect('/new-profile')
            }
            return null
        }
    },
    {   
        path: "/new-profile",
        element: <NewProfilePage/>
    },
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }
        ]
    }
])

export default router