import React, { useEffect, useState } from "react";
import "../css/style.css";

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("userLogged"));
    setUser(dados);
  }, []);

  if (!user) {
    return <h2>Nenhum usuário logado!</h2>;
  }

  return (
    <div className="perfil-container">
      <h1>Perfil do Usuário</h1>

      <p><strong>Nome:</strong> {user.nome}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
