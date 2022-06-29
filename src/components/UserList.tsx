import React from 'react'
import { IVal } from '../App';
import UserItem from './UserItem';

  const UserList = ({users, title, remove}: {users: IVal[], title: string, remove: any}) => {
  if(!users.length){
    return (
      <h1 style={{textAlign: 'center'}}>Users not found!</h1>
    )
  }
  return (
    <div>
        <h1 style={{textAlign: "center"}}>{title}</h1>
            { users.map((user: any, index: number) =>
                <UserItem remove={remove} number={index+1} user={user} key={user.id} />
            )}
    </div>
  )
}

export default UserList;