import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../API/UserService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { IVal } from "./Users";

const UserIdPage = () => {
    const params = useParams();
    const [user, setUser] = useState<IVal>({id: 0, name: '', email: ''});
    const [fetchUserById, isLoading, error] = useFetching(async () => {
        const response = await UserService.getUserById(Number(params.id));
        setUser(response.data);
    })
 
    useEffect(() => {
        fetchUserById(); 
    },[])

    return (
        <div>
            { isLoading
                ?   <Loader/>
                :   <div>
                        <h1>UserIdPage OPEN! ID={params.id}</h1>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                    </div>
                }
        </div>
    );
};

export default UserIdPage;
