import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
///add saved drinks options
//get filtered drinks
//
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [favourites, setFavourites] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetch(`/api/get-user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setFavourites(data.data);
            setLoading(true);
            console.log('favesdata', data.data);
          } else {
            console.log('data.message');
          }
        });
    }
  }, [user]);

  return (
    isAuthenticated && (
      <div>
        {/* <NavLink to='/profile'>
          <ProfilePin>Profile</ProfilePin>
        </NavLink> */}
        <Hello data={user}>Welcome {user.name}</Hello>
        <div></div>
      </div>
    )
  );
};
const ProfilePin = styled.button`
  color: white;
`;
const Hello = styled.div`
  margin-top: 100px;
`;

export default Profile;
