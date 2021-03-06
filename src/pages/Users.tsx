import { SetStateAction, useEffect, useState } from "react";
import UserService from "../API/UserService";
import PButton from "../components/UI/button/PButton";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/pagination";
import PModal from "../components/UI/PModal/PModal";
import PSelect from "../components/UI/select/PSelect";
import UserAddForm from "../components/UserAddForm";
import UserFilter from "../components/UserFilter";
import UserList from "../components/UserList";
import { useFetching } from "../hooks/useFetching";
import { useUsers } from "../hooks/useUser";
import { getPageCount } from "../utils/pages";

export interface IVal {
    id: number; 
    name: string; 
    email: string;
}
const API_URL = 'https://jsonplaceholder.typicode.com/users';
function Users() {
    const [users, setUsers] = useState<IVal[]>([]);
    const [filter, setFilter] = useState({sort:'', query:''}) 
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);
    const [fetchUsers, isUsersLoading, error] = useFetching(async () => {
        const response = await UserService.getAll(limit, page);
        // console.log(response.data);
        setUsers(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(Number(totalCount), limit));
    })

    useEffect(() => {  
        fetchUsers();
      }, [page, limit]);

    const createUser = (newUser: IVal) => {
        setUsers([...users, newUser])
        setModal(false);
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

            <PSelect 
                value={limit}
                onChange={(value: SetStateAction<number>) => setLimit(value)}
                defaultValue="Count element to page"
                options={[
                    {value: 3, name: '3'},
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: -1, name: 'all'},
                ]}/>

            {isUsersLoading
                // ? <h1>Loading...</h1>
                ? <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <UserList remove={removeUser} users={sortedAndSearchedUsers} title='List users:'/>
            }
            {error && <h1 style={{display:'flex', justifyContent: 'center', color:'red'}}>Error message: {error}</h1>}
            
            <Pagination 
                page={page} 
                changePage={changePage} 
                totalPages={totalPages}
            />
        </div>
    );
}

export default Users;