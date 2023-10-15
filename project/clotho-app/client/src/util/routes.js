// IMPORT: Dashboards/Views
import AdminDashboard from "../views/AdminDashboard";
import StandardDashboard from "../views/StandardDashboard";
import TestDashboard from "../views/TestDashboard";

// IMPORT: Components for testing
import PhotoUpload from '../components/PhotoUpload';
import Listings from '../components/Listings';
import CreateListing from '../components/CreateListing';
import Header from '../components/Header';
import { Auth } from '../context/Auth';
import PageNotFound from '../components/PageNotFound';
import Login from '../components/Forms/Login';
import Logout from '../components/Forms/Logout';
import UserProfileV2 from '../components/UserProfileV2';
// import Listings from '../../TEMP/Listings';
// import ListingsV3 from '../../TEMP/ListingsV3';
// import UserProfile from './components/UserProfile';





var routes = [

    // Add to this array: anything that is its own page (login, signup, etc.)

    ///////////////////////////// ADMIN ROUTES ////////////////////////
    {
        layout: "AdminLayout",
        path: "/dashboard",
        name: "Admin Dashboard",
        component: <AdminDashboard />,
    },

    ///////////////////////////// USER ROUTES ////////////////////////
    {
        layout: "StandardLayout",
        path: "/",
        name: "Standard Dashboard",
        component: <StandardDashboard />,
    },

    ///////////////////////////// TEST ROUTES ////////////////////////
    {
        layout: "TestLayout",
        path: "/",
        name: "Test: Dashboard",
        component: <TestDashboard />,
    },

    {
        layout: "TestLayout",
        path: "/login",
        name: "Test: Login",
        component: <Login />,
    },

    {
        layout: "TestLayout",
        path: "/photoupload",
        name: "Test: Photo Upload",
        component: <PhotoUpload />,
    },

    {
        layout: "TestLayout",
        path: "/listings",
        name: "Test: Listings",
        component: <Listings />,
    },

    {
        layout: "TestLayout",
        path: "/createlisting",
        name: "Test: Create Listing",
        component: <CreateListing />,
    },

    {
        layout: "TestLayout",
        path: "/header",
        name: "Test: Header",
        component: <Header />,
    },

    {
        layout: "TestLayout",
        path: "/logout",
        name: "Test: Logout",
        component: <Logout />,
    },

    {
        layout: "TestLayout",
        path: "/logout",
        name: "Test: Logout",
        component: <Logout />,
    },

    {
        layout: "TestLayout",
        path: "/UserProfileV2",
        name: "Test: UserProfileV2",
        component: <UserProfileV2 />,
    },

    {
        layout: "TestLayout",
        path: "/PageNotFound",
        name: "Test: PageNotFound",
        component: <PageNotFound />,
    },




    /* 
    // UNUSED DEFAULTS
    {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        icon: "tim-icons icon-single-02",
        component: <UserProfile />,
        layout: "/admin",
    },
    */
    
];
export default routes;
