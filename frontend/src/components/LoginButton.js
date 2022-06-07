import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const LoginButton = () => {
  let Navigate = useNavigate();

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log('user', user);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/add-user', {
        method: 'POST',
        body: JSON.stringify({
          user: user,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('datamessage', data.message);
        });
    }
  }, [user]);

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
