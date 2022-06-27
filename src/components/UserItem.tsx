import React from 'react'

const UserItem = (props: any) => {

  return (
    <div className="user">
        <div className="user__content">
            <strong>USER # id = {props.user.id}</strong>
            <div>{props.user.name}</div>
            <div>{props.user.username}</div>
            <div>{props.user.email}</div>
        </div>
        <div className="user__btns">
            <button>Delete</button>
        </div>
    </div>
  );
}

export default UserItem