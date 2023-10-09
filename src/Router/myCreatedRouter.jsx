import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayOuts/MainLayouts";
import Home from "../All_Pages/Home/Home";
import EventCordinator from "../Components/Header/EventCordinator/EventCordinator";
import ContactUs from "../Components/Header/ContactUs/ContactUs";
import Login from "../Components/Header/Login/Login";
import ErrorPage from "../All_Pages/Error_Page/ErrorPage";
import EventsCardsDetails from "../All_Pages/Events_Card_details/EventsCardsDetails";
import Catelogue from "../Components/Header/Catalogue_Cart/Catelogue";
import RegisterPage from "../Components/Header/RegisterPage/RegisterPage";
import PrivatesRoute from "./PrivatesRoute";



const myCreatedRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayouts></MainLayouts> ,
        errorElement : <ErrorPage></ErrorPage>,
        children:[
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=>fetch('/events.json')
            },
            {
                path: "/catalogue",
                element: <PrivatesRoute> <Catelogue></Catelogue> </PrivatesRoute>
            },
            
            {
                path: "/eventscordinator",
                element : <EventCordinator></EventCordinator>
            },
            {
                path: "/contacus",
                element :<ContactUs></ContactUs>
            },
            {
                path: "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element: <RegisterPage></RegisterPage>
            },
            {
                path: "/events/:id",
                element : <PrivatesRoute><EventsCardsDetails></EventsCardsDetails></PrivatesRoute> ,
                loader :()=> fetch('/events.json')
            }
        ]
    }
])
export default myCreatedRouter;