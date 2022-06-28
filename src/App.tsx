import React, { ChangeEvent, useState } from "react";
import PButton from "./components/UI/button/PButton";
import PInput from "./components/UI/input/PInput";
import UserAddForm from "./components/UserAddForm";
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

    const createUser = (newUser: IVal) => {
        setUsers([...users, newUser])
    }
    return (
        <div className="App">
            <UserAddForm create ={createUser}/>
            <UserList users={users} title='List users:'/>
        </div>
    );
}

export default App;