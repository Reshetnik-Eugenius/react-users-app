import React from "react";
import { IVal } from "../pages/Users";
import UserItem from "./UserItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const UserList = ({
    users,
    title,
    remove,
}: {
    users: IVal[];
    title: string;
    remove: any;
}) => {
    if (!users.length) {
        return <h1 style={{ textAlign: "center" }}>Users not found!</h1>;
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <TransitionGroup>
                {users.map((user: any, index: number) => (
                    <CSSTransition
                        key={user.id}
                        timeout={500}
                        classNames="user"
                    >
                        <UserItem
                            remove={remove}
                            number={index + 1}
                            user={user}
                        />
                        </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default UserList;
