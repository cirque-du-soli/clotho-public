// IMPORT: Dashboards
import AdminDashboard from "../views/AdminDashboard";
import StandardDashboard from "../views/StandardDashboard";

// IMPORT: Views

/*
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
*/

var routes = [
    {
        path: "/dashboard",
        name: "Admin Dashboard",
        component: <AdminDashboard />,
        layout: "AdminLayout"
    },
    {
        path: "/",
        name: "Standard Dashboard",
        component: <StandardDashboard />,
        layout: "StandardLayout",
    },


    /* 
    ADD HERE: anything that is its own page (login, signup, etc.)
    {
        path: "/login",
        name: "Log In",
        component: <LoginView />,
        layout: "StandardLayout",
    },


    */

    /*

    

    
    {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        icon: "tim-icons icon-bell-55",
        component: <Notifications />,
        layout: "/admin",
    },
    {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        icon: "tim-icons icon-single-02",
        component: <UserProfile />,
        layout: "/admin",
    },
    {
        path: "/tables",
        name: "Table List",
        rtlName: "قائمة الجدول",
        icon: "tim-icons icon-puzzle-10",
        component: <TableList />,
        layout: "/admin",
    },
    {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        icon: "tim-icons icon-align-center",
        component: <Typography />,
        layout: "/admin",
    },
    {
        path: "/rtl-support",
        name: "RTL Support",
        rtlName: "ار تي ال",
        icon: "tim-icons icon-world",
        component: <Rtl />,
        layout: "/rtl",
    },
    */
];
export default routes;
