import React, { useState } from "react";
import UserList from "./components/UserList";
import './styles/App.css'

export interface IVal {
    id: number; 
    name: string; 
    username: string; 
    email: string;
}

function App() {
    const [users, setUsers] = useState<IVal[]>([
        { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
        { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
        { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' }
    ]);

    return (
        <div className="App">
            <UserList users={users} />
        </div>
    );
}

export default App;