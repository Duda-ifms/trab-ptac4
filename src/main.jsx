import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import { Cadastro } from "./Usuario/Cadastro";
import Perfil from "./Usuario/Perfil";
import Login from "./Usuario/Login";
import CadastrarMesas from "./CadastraMesas/CadastrarMesas";
import BuscarMesas from "./buscarMesas/BuscarMesas";
import ReservarMesas from "./ReservasdeMesas/ReservarMesas";
import ListarReservas from "./ListarReservas/ListarReservas";
import ConsultarMesas from "./ConsultarMesas/ConsultarMesas";
import Cardapio from "./Cardapio/Cardapio";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main style={{ paddingTop: "120px" }}>
        <Routes>
          <Route path="/" element={<h2>Bem-vindo!</h2>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrarmesas" element={<CadastrarMesas />} />
          <Route path="/buscarmesas" element={<BuscarMesas />} />
          <Route path="/reservarmesas" element={<ReservarMesas />} />
          <Route path="/listarreservas" element={<ListarReservas />} />
          <Route path="/consultarmesas" element={<ConsultarMesas />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/consultarmesas/:id" element={<ConsultarMesas />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
