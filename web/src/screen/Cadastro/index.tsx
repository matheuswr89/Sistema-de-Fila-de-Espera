import React from "react";
import { toast } from "react-toastify";

import { auth } from "../../database/auth";
import { CAMPO_VAZIO } from "../../helpers/const";
import { LoginInterface } from "../../helpers/interfaces";
import { openToast } from "../../helpers/util";

import "./style.css";

const Cadastro = () => {
  new Promise((resolve) => setTimeout(resolve, 3000));

  const enviar = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados: LoginInterface = {
      name: e.target.nome.value,
      email: e.target.email.value,
      senha: e.target.senha.value,
    };
    if (dados?.name && dados?.email && dados?.senha) {
      if (
        dados?.name?.trim().length > 0 &&
        dados?.email?.trim().length > 0 &&
        dados?.senha?.trim().length > 0
      ) {
        openToast(auth(dados));
      } else {
        toast.error(CAMPO_VAZIO);
      }
    }
  };
  return (
    <section>
      <form onSubmit={enviar} className="form">
        <div className="field">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome do atendente..."
            required
          />
        </div>
        <div className="field">
          <label htmlFor="em">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email do atendente..."
            required
          />
        </div>
        <div className="field">
          <label htmlFor="se">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha do atendente..."
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};

export default Cadastro;
