import React from "react";
import UserItem from "./components/UserItem";
import './styles/App.css'

function App() {
    return (
        <div className="App">
            <UserItem 
                user={{
                    id:1, 
                    name: 'Leanne Graham', 
                    username: 'Bret', 
                    email: 'Sincere@april.biz'
                }} 
            />
        </div>
    );
}

export default App;