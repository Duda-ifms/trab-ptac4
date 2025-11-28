import React, { useState } from "react";

export function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar campos vazios
    for (const key in form) {
      if (!form[key]) {
        alert("Preencha todos os campos!");
        return;
      }
    }

    // Verificar se senha == confirmar senha
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Criar objeto sem confirmarSenha
    const usuario = {
      nome: form.nome,
      sobrenome: form.sobrenome,
      email: form.email,
      rua: form.rua,
      numero: form.numero,
      bairro: form.bairro,
      cidade: form.cidade,
      uf: form.uf,
      senha: form.senha,
    };

    // Salvar no localStorage
    localStorage.setItem("cadastroUsuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    // Limpar formulário
    setForm({
      nome: "",
      sobrenome: "",
      email: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
      senha: "",
      confirmarSenha: "",
    });
  };

  return (
    <div className="container">
      <h2>Cadastro de Usuário</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} />

        <label>Sobrenome:</label>
        <input type="text" name="sobrenome" value={form.sobrenome} onChange={handleChange} />

        <label>E-mail:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />

        <label>Rua:</label>
        <input type="text" name="rua" value={form.rua} onChange={handleChange} />

        <label>Nº:</label>
        <input type="text" name="numero" value={form.numero} onChange={handleChange} />

        <label>Bairro:</label>
        <input type="text" name="bairro" value={form.bairro} onChange={handleChange} />

        <label>Cidade:</label>
        <input type="text" name="cidade" value={form.cidade} onChange={handleChange} />

        <label>UF:</label>
        <input
          type="text"
          name="uf"
          value={form.uf}
          onChange={(e) =>
            setForm({ ...form, uf: e.target.value.toUpperCase() })
          }
          maxLength={2}
        />

        <label>Senha:</label>
        <input
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label>Confirmar Senha:</label>
        <input
          type="password"
          name="confirmarSenha"
          value={form.confirmarSenha}
          onChange={handleChange}
        />

        <button type="submit" className="botao">Cadastrar</button>
      </form>
    </div>
  );
}
