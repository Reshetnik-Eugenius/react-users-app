import { SetStateAction, useEffect, useState } from "react";
import UserService from "./API/UserService";
import PButton from "./components/UI/button/PButton";
import Loader from "./components/UI/Loader/Loader";
import Pagination from "./components/UI/pagination/pagination";
import PModal from "./components/UI/PModal/PModal";
import UserAddForm from "./components/UserAddForm";
import UserFilter from "./components/UserFilter";
import UserList from "./components/UserList";
import { useUsers } from "./hooks/useUser";
import './styles/App.css'
import { getPageCount, getPagesArray } from "./utils/pages";
export interface IVal {
    id: number; 
    name: string; 
    email: string;
}

function App() {
    const [users, setUsers] = useState<IVal[]>([]);
    const [filter, setFilter] = useState({sort:'', query:''}) 
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);
    const [isUsersLoading, setIsUsersLoading] = useState(false);

    useEffect(() => { 
        // console.log('useEffect');
        fetchUsers();
    },[page])

    const createUser = (newUser: IVal) => {
        setUsers([...users, newUser])
        setModal(false);
    }

    async function fetchUsers(){
        setIsUsersLoading(true);
        setTimeout(async() => {
            const response = await UserService.getAll(limit, page);
            // console.log(response.data);
            setUsers(response.data);
            const totalCount = response.headers['x-total-count'];
            setTotalPages(getPageCount(Number(totalCount), limit));
            setIsUsersLoading(false);
        },1000);
    }

    const removeUser = (user: IVal) => {
        setUsers(users.filter(p => p.id !== user.id))
    }

    const changePage = (page: number) => {
        setPage(page);
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
            {isUsersLoading
                // ? <h1>Loading...</h1>
                ? <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <UserList remove={removeUser} users={sortedAndSearchedUsers} title='List users:'/>
            }
            <Pagination 
                page={page} 
                changePage={changePage} 
                totalPages={totalPages}
            />
        </div>
    );
}

export default App;