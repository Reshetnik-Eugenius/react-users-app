import React from "react";
import PButton from "./UI/button/PButton";
import { useNavigate } from 'react-router-dom'

const UserItem = (props: any) => {
    const navigate = useNavigate();
    
    return (
        <div className="user">
            <div className="user__content">
                <strong>USER # id = {props.user.id}</strong>
                <div>{props.user.name}</div>
                <div>{props.user.email}</div>
            </div>
            <div className="user__btns">
                <PButton onClick={() => navigate(`/users/${props.user.id}`)}>
                    Get posts
                </PButton>
                <PButton onClick={() => props.remove(props.user)}>
                    Delete
                </PButton>
            </div>
        </div>
    );
}; 

export default UserItem;
