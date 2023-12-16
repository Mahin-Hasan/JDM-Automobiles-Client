import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import EditBrand from "../components/EditBrand/EditBrand";
import FullDetails from "../components/FullDetails/FullDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: 'brandDetails/:brand_name',
                element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
                loader: () => fetch('/brands.json')
            },
            {
                path: 'addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
            },
            {
                path: '/editBrand/:id',
                element: <PrivateRoute><EditBrand></EditBrand></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
            },
            {
                path: '/fullDetails/:id',
                element: <PrivateRoute><FullDetails></FullDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default router;