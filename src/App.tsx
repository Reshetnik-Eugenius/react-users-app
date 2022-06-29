import React, { ChangeEvent, useMemo, useState } from "react";
import PButton from "./components/UI/button/PButton";
import PInput from "./components/UI/input/PInput";
import PSelect from "./components/UI/select/PSelect";
import UserAddForm from "./components/UserAddForm";
import UserFilter from "./components/UserFilter";
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
    const [filter, setFilter] = useState({sort:'', query:''})

    const sortedUsers = useMemo(()=>{
        console.log("sorted");
        if(filter.sort) {
            return [...users].sort((a:any,b:any)=>(a[filter.sort].localeCompare(b[filter.sort])));
        }
        return users;
    },[filter.sort, users]);
    const sortedAndSearchedUsers = useMemo(()=>{
        return sortedUsers.filter(user => user.name.toLowerCase().includes(filter.query));
    },[filter.query, sortedUsers])

    const createUser = (newUser: IVal) => {
        setUsers([...users, newUser])
    }
    const removeUser = (user: IVal) => {
        setUsers(users.filter(p => p.id !== user.id))
    }

    return (
        <div className="App">
            <UserAddForm create ={createUser}/>
            
            <hr style={{margin: '15px 0'}}/>
            <UserFilter 
                filter={filter} 
                setFilter={setFilter}
            />
            <UserList remove={removeUser} users={sortedAndSearchedUsers} title='List users:'/>
        </div>
    );
}

export default App;