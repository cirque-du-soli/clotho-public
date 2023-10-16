// IMPORT: Dashboards/Views
import AdminDashboard from "../views/AdminDashboard";
import StandardDashboard from "../views/StandardDashboard";
import TestDashboard from "../views/TestDashboard";

// IMPORT: Admin Components

// IMPORT: Standard Components

// IMPORT: Test Components
import PhotoUpload from '../components/Forms/PhotoUpload';
import CreateListing from '../components/Forms/CreateListing';
import CreateListingAdminTest from '../components/Forms/CreateListingAdminTest';
import CreateListingUserTest from '../components/Forms/CreateListingUserTest';

import Header from '../components/Navbars/Header';
import { Auth } from '../context/Auth';
import PageNotFound from '../components/Pages/PageNotFound';
import Login from '../components/Forms/Login';
import Logout from '../components/Buttons/Logout';
import UserProfileV2 from '../components/Pages/UserProfileV2';
import UserProfile from '../components/Pages/UserProfile';
import UserProfilePrivate from '../components/Pages/UserProfilePrivate';
import UserProfilePublic from '../components/Pages/UserProfilePublic';
import Listings from '../components/Tables/Listings';



// import ListingsV2 from '../components/ListingsV2';
// import ListingsV3 from '../components/ListingsV3';
//import Listings from '../../TEMP/Listings';

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
        path: "/home",
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
        path: "/profile",
        name: "Test: Private profile",
        component: <UserProfilePrivate />,
    },

    {
        layout: "TestLayout",
        path: "/seller/:username",
        name: "Test: Public profile (add username param)",
        component: <UserProfilePublic />,
    },

    {
        layout: "TestLayout",
        path: "/photoupload",
        name: "Test: Photo Upload",
        component: <PhotoUpload />,
    },

    {
        layout: "TestLayout",
        path: "/createlisting",
        name: "Test: Create Listing",
        component: <CreateListing />,
    },

    {
        layout: "TestLayout",
        path: "/createlistingadmin",
        name: "Test: Create Listing Admin (test)",
        component: <CreateListingAdminTest />,
    },

    {
        layout: "TestLayout",
        path: "/createlistinguser",
        name: "Test: Create Listing Admin (test)",
        component: <CreateListingUserTest />,
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
        path: "/listings",
        name: "Test: Listings",
        component: <Listings />,
    },

    /*
        {
            layout: "TestLayout",
            path: "/ListingsV2",
            name: "Test: ListingsV2",
            component: <ListingsV2 />,
        },
    
        {
            layout: "TestLayout",
            path: "/ListingsV3",
            name: "Test: ListingsV3",
            component: <ListingsV3 />,
        },
        
        {
            layout: "TestLayout",
            path: "/UserProfile",
            name: "Test: UserProfile",
            component: <UserProfile />,
        },
    */
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
