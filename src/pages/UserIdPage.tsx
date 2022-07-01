import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../API/UserService";
import { useFetching } from "../hooks/useFetching";

const UserIdPage = () => {
    const params = useParams();
    //   console.log(params);
    // const [user, setUser] = useState({});
    // const [fetchUserById, isLoading, error] = useFetching(async (id: number) => {
        // const response = await UserService.getById(id);
        // setUser(response.data);
    // })

    // useEffect(() => {
    //     fetchUserById();
    // },[])

    return (
        <div>
            <h1>UserIdPage OPEN! ID={params.id}</h1>
            {/* { isLoading
                ? <Loader/>
                : <div>{user.id}. {user.name}</div>} */}
        </div>
    );
};

export default UserIdPage;
