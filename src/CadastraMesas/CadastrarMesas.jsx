import "../css/style.css";
import React, { useState } from "react";

const CadastraMesas = () => {
  const [numero, setNumero] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // salva a mesa
    const novaMesa = {
      numero,
      capacidade,
      localizacao,
    };

    console.log("Mesa cadastrada:", novaMesa);

    // Limpar formulário 
    setNumero("");
    setCapacidade("");
    setLocalizacao("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Cadastrar Mesa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número da Mesa:</label>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Capacidade:</label> 
          <input
            type="number"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Localização:</label>
          <input
            type="text"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastraMesas;
