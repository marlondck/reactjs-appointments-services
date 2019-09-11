import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido!')
    .required('Email obrigatório!'),
  password: Yup.string().required('Senha obrigatória!'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    //console.tron.log(data);
    dispatch(signInRequest(email, password));
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
