import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/style.css";



const ConsultarMesas = () => {
  const { id } = useParams(); 
  const [reserva, setReserva] = useState(null);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("reservas")) || [];
    const encontrada = dados.find((r) => r.id == id);
    setReserva(encontrada);
  }, [id]);

  if (!reserva) {
    return (
      <div className="container">
        <h2>Detalhes da Reserva</h2>
        <p>Reserva não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Detalhes da Reserva</h2>

      <div className="detalhes-box">
        <p><strong>ID da Reserva:</strong> {reserva.id}</p>
        <p><strong>Número da Mesa:</strong> {reserva.numeroMesa}</p>
        <p><strong>Capacidade:</strong> {reserva.capacidade || "Não informada"}</p>
        <p><strong>Data:</strong> {reserva.data}</p>
      </div>
    </div>
  );
};

export default ConsultarMesas;
