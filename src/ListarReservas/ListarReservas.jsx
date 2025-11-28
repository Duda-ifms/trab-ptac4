import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListarReservas() {
  const [reservas, setReservas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(dados);
  }, []);

  const cancelarReserva = (id) => {
    const novaLista = reservas.filter((reserva) => reserva.id !== id);
    setReservas(novaLista);
    localStorage.setItem("reservas", JSON.stringify(novaLista));
  };

  const verDetalhes = (id) => {
    navigate(`/consultarmesas/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Minhas Reservas</h2>

      {reservas.length === 0 ? (
        <p>Nenhuma reserva encontrada.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Nº da Mesa</th>
              <th>Nº da Reserva</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.numeroMesa}</td>
                <td>{reserva.id}</td>
                <td>{reserva.data}</td>
                <td>
                  <button onClick={() => alert("Editar em construção")}>
                    Editar
                  </button>

                  <button onClick={() => cancelarReserva(reserva.id)}>
                    Cancelar
                  </button>

                  <button onClick={() => verDetalhes(reserva.id)}>
                    Ver Detalhes
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListarReservas;
