import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Comments from './Comments';
import DrinkCard from './DrinkDetails/DrinkCard';
import ErrorMessage from '../ErrorMessage';
///add saved drinks options
//get filtered drinks
//
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [favourites, setFavourites] = useState();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetch(`/api/get-user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setFavourites(data.data.favourites);
            setLoading(false);

            console.log('favesdata', data.data.favourites);
          } else {
            console.log('data.message');
          }
        });
    }
  }, [isAuthenticated]);
  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    isAuthenticated &&
    !loading && (
      <Center>
        {/* <NavLink to='/profile'>
          <ProfilePin>Profile</ProfilePin>
        </NavLink> */}
        <Hello>Welcome {user.nickname}</Hello>
        <div>
          {favourites?.map((drink) => {
            // console.log('whyyyy', drink);
            return (
              <BigDiv key={drink.idDrink}>
                <div>
                  <DrinkCard drink={drink} />
                </div>
                <Comments drink={drink} />
                <CommentReturn>{drink.comment}</CommentReturn>
              </BigDiv>
            );
          })}
        </div>
      </Center>
    )
  );
};
const Center = styled.div`
  margin: auto;
`;
const BigDiv = styled.div`
  margin-bottom: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hello = styled.div`
  margin-top: 100px;
`;
const CommentReturn = styled.div`
  font-size: 20px;
`;
export default Profile;
