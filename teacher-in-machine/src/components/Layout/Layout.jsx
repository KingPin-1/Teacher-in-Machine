import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Learn from '../Learn/Learn';

function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/learn" element={<Learn />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Layout;
