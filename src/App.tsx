import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Users from './pages/Users';
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;