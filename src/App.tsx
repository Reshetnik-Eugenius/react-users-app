import React, { ChangeEvent, useState } from "react";
import PButton from "./components/UI/button/PButton";
import PInput from "./components/UI/input/PInput";
import PSelect from "./components/UI/select/PSelect";
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
        { id: 2, name: 'Ervin Howell', email: 'Ahanna@melissa.tv' },
        { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' }
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const createUser = (newUser: IVal) => {
        setUsers([...users, newUser])
    }
    const removeUser = (user: IVal) => {
        setUsers(users.filter(p => p.id !== user.id))
    }
    
    const sortUsers = (sortByValue: string) => {
        setSelectedSort(sortByValue);
        // [...users].sort((a:IVal,b:IVal)=>(a.name < b.name)?-1:1);
        setUsers([...users].sort((a:any,b:any)=>(a[sortByValue].localeCompare(b[sortByValue]))));
    }

    return (
        <div className="App">
            <UserAddForm create ={createUser}/>
            
            <hr style={{margin: '15px 0'}}/>
            <div>
                <PSelect 
                    value={selectedSort}
                    onChange={sortUsers}
                    defaultValue='sorting'
                    options={[
                        {value: 'name', name: 'By the name'},
                        {value: 'email', name: 'By the email'},
                    ]} 
                />
            </div>

            {users.length !== 0
                ? <UserList remove={removeUser} users={users} title='List users:'/>
                : <h1 style={{textAlign: "center"}}>Users not found!</h1>
            }
        </div>
    );
}

export default App;