import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Users from './pages/Users';
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;