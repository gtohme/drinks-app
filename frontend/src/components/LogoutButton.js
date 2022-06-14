import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <Button id='logoutbutton' onClick={() => logout()}>
          <AiOutlineLogout />
        </Button>
      </>
    )
  );
};

const Button = styled.button`
  /* margin-right: 60px; */
  background-color: #f35b04;
  border-radius: 50%;
  padding: 5px 8px;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export default LogoutButton;
