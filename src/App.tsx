import React, { ChangeEvent, useState } from "react";
import PButton from "./components/UI/button/PButton";
import PInput from "./components/UI/input/PInput";
import UserList from "./components/UserList";
import './styles/App.css'
export interface IVal {
    id: number; 
    name: string; 
    email: string;
}

function App() {
    const [users, setUsers] = useState<IVal[]>([
        { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
        { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
        { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' }
    ]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addNewUser = (event: ChangeEvent<HTMLInputElement>) => { 
        event.preventDefault();
        const newUser = {
            id: Date.now(),
            name,
            email
        }
        setUsers([...users, newUser]);
        setName('');
        setEmail('');
        // console.log(newUser);
    }

    return (
        <div className="App">
            <form>
                <PInput
                    value={name}
                    onChange={(event: ChangeEvent<HTMLInputElement>)  => setName(event.target.value)}
                    type="text" 
                    placeholder="Name user" 
                />
                <PInput
                    value={email}
                    onChange={(event: ChangeEvent<HTMLInputElement>)  => setEmail(event.target.value)}
                    type="text" 
                    placeholder="Email user" 
                />
                <PButton onClick={addNewUser}>Add user</PButton>
            </form>
            <UserList users={users} title='List users:'/>
        </div>
    );
}

export default App;