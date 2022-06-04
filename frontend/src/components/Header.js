import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <Logolink to='/'>
        <Logo>Tipsy Lab</Logo>
      </Logolink>
      <Loginlink to='/login'>
        <Login>LOG IN</Login>
      </Loginlink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  padding: 20px;
  background-color: #000000;
  color: #fca311;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  font-family: 'Architects Daughter', cursive;
  font-size: 50px;
`;
const Login = styled.div`
  font-family: 'Architects Daughter', cursive;
  font-size: 20px;
`;

const Logolink = styled(NavLink)``;

const Loginlink = styled(NavLink)``;

export default Header;
