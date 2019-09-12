import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Email" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Senha antiga" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar nova senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
