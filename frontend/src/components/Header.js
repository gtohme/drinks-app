import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Burger from './Burger';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const Header = () => {
  return (
    <BigDiv>
      <Wrapper>
        <LogoLogin>
          <Logolink to='/'>
            <Logo>MIXOLOGY</Logo>
          </Logolink>
          {/* <LogoutButton /> */}
        </LogoLogin>
        <NavLink to='/profile'>
          <ProfileButton>My Profile</ProfileButton>
        </NavLink>
        <LoginButton />

        <Burger />
      </Wrapper>
    </BigDiv>
  );
};
const BigDiv = styled.div`
  position: fixed;
  top: 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 20px;
  background-color: black;
  width: 100vw;
  align-items: center;

  box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
`;
const LogoLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  position: absolute;
  top: 10px;
  font-family: 'Zen Loop', cursive;
  font-size: 80px;

  /* color: #fca311; */
  color: white;
  &:hover {
    transform: scale(1.03);
  }
`;

const Logolink = styled(NavLink)`
  text-decoration: none;
  height: 30px;
`;
const ProfileButton = styled.button`
  background-color: black;
  color: white;
  font-family: 'Zen Loop', cursive;
  font-size: 30px;
  margin-right: 20px;
`;
//object-fit: cover

export default Header;
