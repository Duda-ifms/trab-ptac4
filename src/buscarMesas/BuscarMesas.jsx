
import React, { useState } from "react";

const BuscarMesas = () => {
  const [mesas] = useState([
    { numero: "1", capacidade: 2, localizacao: "Janela" },
    { numero: "2", capacidade: 4, localizacao: "Centro" },
    { numero: "3", capacidade: 6, localizacao: "Varanda" },
  ]);

  const [filtro, setFiltro] = useState("");

  const mesasFiltradas = mesas.filter(
    (mesa) =>
      mesa.numero.includes(filtro) ||
      mesa.capacidade.toString().includes(filtro) ||
      mesa.localizacao.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Buscar Mesas</h2>
      <input
        type="text"
        placeholder="Buscar por número, capacidade ou localização"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
      />
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Número</th>
            <th>Capacidade</th>
            <th>Localização</th>
          </tr>
        </thead>
        <tbody>
          {mesasFiltradas.length > 0 ? (
            mesasFiltradas.map((mesa, index) => (
              <tr key={index}>
                <td>{mesa.numero}</td>
                <td>{mesa.capacidade}</td>
                <td>{mesa.localizacao}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Nenhuma mesa encontrada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BuscarMesas;
