import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/Home";
import About from "../pages/About";

export const Routes = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'/',
                Component:HomePage
            },
            {
                path: '/about',
                Component: About
            }
        ]
    },
    {
        path: '/login',
        Component: Login,
        
    },
    {
        path: '/register',
        Component: Register
    }
])
 