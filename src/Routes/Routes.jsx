import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import Error from "../Error/Error";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Toys from "../components/Toys";
import Details from "../components/Details";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Toys></Toys>
            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/allToys',
        element: <AllToys></AllToys>,
        // loader: () => fetch('https://toy-market-server-phi.vercel.app/allToys/null')
    },
    {
        path: '/addtoy',
        element: <PrivateRoute><AddToy /></PrivateRoute>
    },
    {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://toy-market-server-phi.vercel.app/details/${params.id}`)

    },
    {
        path: '/details/:id',
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-market-server-phi.vercel.app/details/${params.id}`)
    },
    {
        path: '/myToys',
        element: <MyToys></MyToys>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }

]);

export default router;