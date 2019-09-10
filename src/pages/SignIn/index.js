import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <form>
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Entrar</button>
        <Link to="/register">Cria conta</Link>
      </form>
    </>
  );
}
