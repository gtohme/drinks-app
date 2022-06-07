import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Burger from './Burger';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = () => {
  return (
    <>
      <Wrapper>
        <Logolink to='/'>
          <Logo>MIXOLOGY</Logo>
        </Logolink>

        <LoginButton />
        <LogoutButton />
      </Wrapper>
      <Burger />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 20px;
  background-color: black;

  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  font-family: 'Zen Loop', cursive;
  font-size: 80px;
  /* color: #fca311; */
  color: white;
  &:hover {
    transform: scale(1.03);
  }
`;
// const Login = styled.div`
//   margin-right: 70px;
//   font-family: 'Poiret One', cursive;
//   font-size: 30px;
//   color: #3f37c9;
//   &:hover {
//     transform: scale(1.04);
//   }
// `;

const Logolink = styled(NavLink)`
  text-decoration: none;
`;

// const Loginlink = styled(NavLink)`
//   text-decoration: none;
// `;

//object-fit: cover

export default Header;
