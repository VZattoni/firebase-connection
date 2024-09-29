import React from 'react'
import Cadastro from './pages/Cadastro/index';
import Principal from './pages/Principal';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'


const Rotas = () => {
    return (

        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Cadastro</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/principal">Principal</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default Rotas;