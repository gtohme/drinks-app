import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Comments from './Comments';
import DrinkCard from './DrinkDetails/DrinkCard';
import ErrorMessage from '../ErrorMessage';
import { UserContext } from './UserContext';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { favourites, setFavourites } = useContext(UserContext);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetch(`/api/get-user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setFavourites(data.data.favourites);
            setLoading(false);
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
        <Hello>Welcome @{user.nickname}</Hello>
        <div>
          {favourites?.map((drink) => {
            return (
              <BigDiv key={drink.idDrink}>
                <div>
                  <DrinkCard drink={drink} />
                </div>
                <Comments drink={drink} />
                <CommentReturn>
                  <Span>Next time: </Span>
                  {drink.comment}
                </CommentReturn>
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
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hello = styled.div`
  margin-top: 100px;
  margin-left: 20px;
  font-family: 'Lato', sans-serif;
  font-size: 30px;
`;
const CommentReturn = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  margin: auto;
`;
const Span = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
`;

export default Profile;
