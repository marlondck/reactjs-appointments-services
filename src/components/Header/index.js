import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  
  function avatarExists() {
    if (profile.avatar === null) {
    return 'https://api.adorable.io/avatars/50/abott@adorable.png';
    } else {
      return profile.avatar.url;
    }
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={avatarExists()}
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
