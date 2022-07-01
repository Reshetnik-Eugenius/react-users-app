import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Users from './pages/Users';
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <div className='navbar'>
                <div className="navbar__links">
                    <Link to="/about">About</Link>
                    <Link to="/users">Users</Link>
                </div>
            </div>
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;