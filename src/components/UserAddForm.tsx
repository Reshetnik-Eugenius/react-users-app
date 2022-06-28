import React, { ChangeEvent, useState } from 'react'
import PButton from './UI/button/PButton';
import PInput from './UI/input/PInput';

const UserAddForm = ({create}:any) => {
    const [user, setUser] = useState({name:'', email:''});

    const addNewUser = (event: ChangeEvent<HTMLInputElement>) => { 
        event.preventDefault();
        const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
        // setUsers([...users, {...user, id: Date.now()}]);
        setUser({name:'', email:''});
    }

  return (
    <form>
        <PInput
            value={user.name}
            onChange={(event: ChangeEvent<HTMLInputElement>)  => setUser({...user, name: event.target.value})}
            type="text" 
            placeholder="Name user" 
        />
        <PInput
            value={user.email}
            onChange={(event: ChangeEvent<HTMLInputElement>)  => setUser({...user, email: event.target.value})}
            type="text" 
            placeholder="Email user" 
        />
        <PButton onClick={addNewUser}>Add user</PButton>
    </form>
  )
}

export default UserAddForm;