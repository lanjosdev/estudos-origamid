import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages:
import Home from '../pages/Home';
import Produto from '../pages/Produto';
import Contato from '../pages/Contato';

// Components:
import { Header } from '../components/Header/Header';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />

                <Route path="/produto/:id" element={<Produto />} />
            </Routes>
            
        </BrowserRouter>
    );
};
export default AppRoutes;