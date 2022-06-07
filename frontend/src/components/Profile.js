import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <div data={user}>Welcome {user.name}</div>
        {/* <div data={user}>Profile</div> */}
      </div>
    )
  );
};

export default Profile;
