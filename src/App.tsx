import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroPost from './components/postagem/cadastrar/CadastrarPost';
import DeletarPostagem from './components/postagem/deletar/DeletarPost';
import ListaPostagem from './components/postagem/lista/ListaPost';
import Footer from './components/statics/footer/Footer';
import Navbar from './components/statics/navbar/NavBar';
import CadastroTema from './components/tema/cadatro/CadastroTema';
import DeletarTema from './components/tema/deletar/DeletarTema';
import ListaTema from './components/tema/lista/ListaTema';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="/login" element={<Login /> }/>

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/posts" element={<ListaPostagem />} />

        <Route path="/formularioPostagem" element={<CadastroPost />} />

        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

        <Route path="/formularioTema" element={<CadastroTema />} />

       <Route path="/formularioTema/:id" element={<CadastroTema />} />

       <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

       <Route path="/deletarTema/:id" element={<DeletarTema />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
