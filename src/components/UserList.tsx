import React from 'react'
import { IVal } from '../App';
import UserItem from './UserItem';

const UserList = ({users}: {users: IVal[]}) => {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>List users:</h1>
            { users.map((user: any) =>
                <UserItem user={user} key={user.id} />
            )}
    </div>
  )
}

export default UserList;