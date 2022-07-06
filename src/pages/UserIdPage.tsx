import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../API/UserService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { IPost } from "../model/users.model";
import { IVal } from "./Users";

const UserIdPage = () => {
    // {userId: 0, id: 0, title: '', body: ''}
    const params = useParams();
    const [user, setUser] = useState<IVal>({id: 0, name: '', email: ''});
    const [posts, setPosts] = useState<IPost[]>();
    const [fetchUserById, isLoading, error] = useFetching(async () => {
        const response = await UserService.getUserById(Number(params.id));
        setUser(response.data);
    })
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await UserService.getPostsByUserId(Number(params.id));
        setPosts(response.data);
    })
 
    useEffect(() => {
        fetchUserById(); 
        fetchPosts();
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

            <h1>Posts:</h1>
            { isPostsLoading
                ?   <Loader/>
                :   <div>
                        {posts?.map(postItem =>
                            <div key={postItem.id} style={{marginTop: 15}}>
                                <h1>{postItem.title}</h1>
                                <div>{postItem.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default UserIdPage;
