import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Register/Register';

function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Layout;
