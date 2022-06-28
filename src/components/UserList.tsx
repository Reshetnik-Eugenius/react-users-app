import React from 'react'
import { IVal } from '../App';
import UserItem from './UserItem';

  const UserList = ({users, title}: {users: IVal[], title: string}) => {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>{title}</h1>
            { users.map((user: any, index: number) =>
                <UserItem number={index+1} user={user} key={user.id} />
            )}
    </div>
  )
}

export default UserList;