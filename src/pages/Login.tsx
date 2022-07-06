import React, { useContext } from 'react'
import { AuthContext } from '../components/context'
import PButton from '../components/UI/button/PButton'
import PInput from '../components/UI/input/PInput'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Page Login</h1>
            <form onSubmit={login}>
                <PInput type="text" placeholder="Enter Login" />
                <PInput type="password" placeholder="Enter Password" />
                <PButton>Enter</PButton>
            </form>
        </div>
    )
}

export default Login