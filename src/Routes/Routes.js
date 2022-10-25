import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Main from "../layout/Main";
import RoomBooking from "../Pages/RoomBooking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import OffCanvas from "../Shared/OffCanvas";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/Others/TermsAndCondition/TermsAndConditions";
import Profile from "../Pages/Others/Profile/Profile";
import Faq from "../Pages/Faq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:4000/courses')

            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><RoomBooking></RoomBooking></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/offcanvas',
                element: <OffCanvas></OffCanvas>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])