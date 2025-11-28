import React, { useState } from "react";
import "../css/style.css";

const ReservaMesas = () => {
  const [mesas] = useState([
    { numero: "1", capacidade: 2, localizacao: "Janela" },
    { numero: "2", capacidade: 4, localizacao: "Centro" },
    { numero: "3", capacidade: 6, localizacao: "Varanda" },
  ]);

  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [dataReserva, setDataReserva] = useState("");
  const [horaReserva, setHoraReserva] = useState("");
  const [qtdePessoas, setQtdePessoas] = useState("");
  const [mesaSelecionada, setMesaSelecionada] = useState("");

  const [reservas, setReservas] = useState(() => {
    return JSON.parse(localStorage.getItem("reservas")) || [];
  });

  const handleReserva = (e) => {
    e.preventDefault();

    if (!nome || !contato || !dataReserva || !horaReserva || !qtdePessoas || !mesaSelecionada) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaReserva = {
      id: Date.now(),
      nome,
      contato,
      dataReserva,
      horaReserva,
      qtdePessoas,
      numeroMesa: mesaSelecionada,
    };

    const novasReservas = [...reservas, novaReserva];

    setReservas(novasReservas);
    localStorage.setItem("reservas", JSON.stringify(novasReservas));

    alert("Reserva confirmada!");

    // limpar campos
    setNome("");
    setContato("");
    setDataReserva("");
    setHoraReserva("");
    setQtdePessoas("");
    setMesaSelecionada("");
  };

  return (
    <div style={{ maxWidth: "550px", margin: "auto" }}>
      <h2>Reservar Mesa</h2>

      <form onSubmit={handleReserva}>
        <div>
          <label>Nome do Cliente:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Contato (WhatsApp):</label>
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Data da Reserva:</label>
          <input
            type="date"
            value={dataReserva}
            onChange={(e) => setDataReserva(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Horário:</label>
          <input
            type="time"
            value={horaReserva}
            onChange={(e) => setHoraReserva(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Quantidade de Pessoas:</label>
          <input
            type="number"
            min="1"
            value={qtdePessoas}
            onChange={(e) => setQtdePessoas(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Selecione a Mesa:</label>
          <select
            value={mesaSelecionada}
            onChange={(e) => setMesaSelecionada(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {mesas.map((mesa) => (
              <option key={mesa.numero} value={mesa.numero}>
                Mesa {mesa.numero} - {mesa.capacidade} pessoas - {mesa.localizacao}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
};

export default ReservaMesas;
