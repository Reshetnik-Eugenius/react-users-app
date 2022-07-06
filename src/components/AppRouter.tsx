import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Users from "../pages/Users";
import Error from "../pages/Error";
import UserIdPage from "../pages/UserIdPage";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "./context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    // console.log(isAuth);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?   <Routes>
                { 
                    privateRoutes.map(route =>
                        <Route 
                            path={route.path} 
                            element={<route.element/>}
                            key = { route.path }
                        />
                )}
                </Routes>

            :   <Routes>
                { 
                    publicRoutes.map(route =>
                        <Route 
                            path={route.path} 
                            element={<route.element/>}
                            key = { route.path }
                        />
                )}
                </Routes>
    );
};

export default AppRouter;
