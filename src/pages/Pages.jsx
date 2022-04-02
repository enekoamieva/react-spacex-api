import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import LaunchPage from './LaunchPage';


function Pages() {


    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/launch/:id" element={<LaunchPage />} />
        </Routes>
    )
}

export default Pages;