import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Users from './pages/Users';
import Error from './pages/Error';
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="about" element={<About />} />
                    <Route path="users" element={<Users />} />
                    <Route path="*" element={<Error />} />
                </Routes>

        </BrowserRouter>
    );
}

export default App;