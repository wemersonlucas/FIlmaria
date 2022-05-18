import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filmes from  './pages/Filmes';

import ButtonAppBar from './components/AppBar';

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <ButtonAppBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/filmes/:id" element={<Filmes/>} />
        </Routes>
        </BrowserRouter>
    )
}