import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Main from "../layout/Main";
import CourseEnroll from "../Pages/CourseEnroll";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import OffCanvas from "../Shared/OffCanvas";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../Pages/Others/TermsAndCondition/TermsAndConditions";
import Profile from "../Pages/Others/Profile/Profile";
import Faq from "../Pages/Faq";
import ErrorPage from "../Pages/Others/ErrorPage";
import PDFFile from "../Shared/PDFfile";
import Enrollment from "../Pages/Enrollment";
import Courses from "../Pages/Courses";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:4000/courses')

            },
            {
                path: '/courses',
                element: <Courses></Courses>
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
                element: <CourseEnroll></CourseEnroll>,
                loader: ({ params }) => fetch(`http://localhost:4000/courses/${params.id}`)
            },
            {
                path: '/enrollment',
                element: <PrivateRoute><Enrollment></Enrollment></PrivateRoute>
            },
            {
                path: '/pdffile/:id',
                element: <PDFFile></PDFFile>,
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
            },
        ]
    }
])