import React from 'react'
import PButton from './UI/button/PButton';

const UserItem = (props: any) => {

  return (
    <div className="user">
        <div className="user__content">
            <strong>USER # id = {props.user.id}</strong>
            <div>{props.user.name}</div>
            <div>{props.user.email}</div>
        </div>
        <div className="user__btns">
            <PButton onClick={() => props.remove(props.user)}>Delete</PButton>
        </div>
    </div>
  );
}

export default UserItem