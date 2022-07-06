import About from "../pages/About";
import UserIdPage from "../pages/UserIdPage";
import Users from "../pages/Users";
import Error from '../pages/Error';
import Login from "../pages/Login";


export const privateRoutes = [
    { path: "/", element: Users },
    { path: "about", element: About },
    { path: "users/:id", element: UserIdPage },
    { path: "*", element: Users },
    { path: "/", element: Error },
];

export const publicRoutes = [
    { path: "login", element: Login },
    { path: "*", element: Login },
];