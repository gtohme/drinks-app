import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>
        <CgProfile />
      </Button>
    )
  );
};
const Button = styled.button`
  margin-right: 60px;
  background-color: white;
  border-radius: 50%;
  padding: 5px 8px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;
export default LoginButton;
