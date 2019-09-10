import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório!'),
  email: Yup.string()
    .email('Email inválido!')
    .required('Email obrigatório!'),
  password: Yup.string()
    .min(6, 'É necessário mais de 6 caracteres!')
    .required('Senha obrigatória!'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já possuo uma conta</Link>
      </Form>
    </>
  );
}
