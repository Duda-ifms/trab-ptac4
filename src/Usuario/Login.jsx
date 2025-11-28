import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css"; // se estiver usando o mesmo css

export default function Login() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // pega o usuario salvo (mesma chave do Cadastro)
    const usuarioSalvo = JSON.parse(localStorage.getItem("cadastroUsuario"));

    // debug rápido (remova depois se quiser)
    // console.log("usuarioSalvo:", usuarioSalvo);

    if (!usuarioSalvo) {
      alert("Nenhum usuário cadastrado. Faça o cadastro primeiro.");
      return;
    }

    // compara email e senha exatamente como foram salvos
    if (form.email === usuarioSalvo.email && form.senha === usuarioSalvo.senha) {
      // login OK - podemos salvar um token simples ou marcar user logado
      localStorage.setItem("userLogged", JSON.stringify({
        email: usuarioSalvo.email,
        nome: usuarioSalvo.nome
      }));

      alert("Login realizado com sucesso!");
      navigate("/perfil"); // redireciona para perfil (ou outra rota)
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn" type="submit">Entrar</button>
      </form>
    </div>
  );
}
