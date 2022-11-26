import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../../Layout/DashBoardLayOut";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import MyOrders from "../../Pages/DashBoard/MyOrders";
import Categories from "../../Pages/Home/Categories/Categories";
import CategoriesDetails from "../../Pages/Home/Categories/CategoriesDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/categories/:id',
                element: <CategoriesDetails />,
                loader:({params}) => fetch(`categories.json/categories/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    },
    {
        path:'/dashboard',
        element: <DashBoardLayOut />,
        children:[
            {
                path: '/dashboard',
                element: <MyOrders />
            },
            {
                path: '/dashboard',
                element: <AddProduct />
            },
        ]
    }
])

export default router;