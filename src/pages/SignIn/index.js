import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido!')
    .required('Email obrigatório!'),
  password: Yup.string().required('Senha obrigatória!'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Entrar</button>
        <Link to="/register">Cria conta</Link>
      </Form>
    </>
  );
}
