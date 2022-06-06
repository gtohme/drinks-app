import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import Burger from './Burger';

const Header = () => {
  return (
    <>
      <Wrapper>
        <Logolink to='/'>
          <Logo>MIXOLOGY</Logo>
        </Logolink>
        <Loginlink to='/login'>
          {/* <Login>LOG IN</Login> */}
          <Login>
            <CgProfile />
          </Login>
        </Loginlink>
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
  background-color: white;

  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  font-family: 'Zen Loop', cursive;
  font-size: 80px;
  /* color: #fca311; */
  color: #3f37c9;
  &:hover {
    transform: scale(1.03);
  }
`;
const Login = styled.div`
  margin-right: 70px;
  font-family: 'Poiret One', cursive;
  font-size: 30px;
  color: #3f37c9;
  &:hover {
    transform: scale(1.04);
  }
`;

const Logolink = styled(NavLink)`
  text-decoration: none;
`;

const Loginlink = styled(NavLink)`
  text-decoration: none;
`;

//object-fit: cover

export default Header;
