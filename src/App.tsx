import axios from "axios";
import { useEffect, useState } from "react";
import UserService from "./API/UserService";
import PButton from "./components/UI/button/PButton";
import PModal from "./components/UI/PModal/PModal";
import UserAddForm from "./components/UserAddForm";
import UserFilter from "./components/UserFilter";
import UserList from "./components/UserList";
import { useUsers } from "./hooks/useUser";
import './styles/App.css'
export interface IVal {
    id: number; 
    name: string; 
    email: string;
}

function App() {
    const [users, setUsers] = useState<IVal[]>([]);
    const [filter, setFilter] = useState({sort:'', query:''}) 
    const [modal, setModal] = useState(false);
    const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);

    useEffect(() => { 
        // console.log('useEffect');
        fetchUsers();
    },[])

    const createUser = (newUser: IVal) => {
        setUsers([...users, newUser])
        setModal(false);
    }

    async function fetchUsers(){
        const users = await UserService.getAll();
        // console.log(response.data);
        setUsers(users);
    }

    const removeUser = (user: IVal) => {
        setUsers(users.filter(p => p.id !== user.id))
    }

    return (
        <div className="App">
            <button onClick={fetchUsers}>GET USERS</button>
            <PButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                ADD USER
            </PButton>
            <PModal visible={modal} setVisible={setModal}>
                <UserAddForm create ={createUser}/>
            </PModal>

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