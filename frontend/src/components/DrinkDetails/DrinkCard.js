import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';

import { AiFillHeart } from 'react-icons/ai';
const DrinkCard = ({ drink }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();
  const [isLiked, setIsLiked] = useState(false);

  console.log(drink);

  const handleLike = (e) => {
    // e.preventDefault();
    fetch(`/api/update-favourites/?email=${user.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(drink),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "fave data");
        if (data.status === 400) {
          // setErrorMessage(data.message);
          console.log('errordrinks');
        } else if (data.status === 200) {
          console.log('saved drink', data);
          setIsLiked(!isLiked);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // color={isLiked ? 'rgb(224, 36, 94)' : 'black'}
  // fill={isLiked ? 'rgb(224, 36, 94)' : 'transparent'}
  return (
    <>
      <BigDiv>
        <MoveHeart>
          {isLiked ? (
            <ButtonLike onClick={handleLike}>
              <AiFillHeart />
            </ButtonLike>
          ) : (
            <ButtonLike onClick={handleLike}>
              <FiHeart />
            </ButtonLike>
          )}
        </MoveHeart>
        <Wrapper>
          <Title>{drink.strDrink}</Title>

          <Img src={drink.strDrinkThumb} alt='image of drink' />
          <div>Glass</div>
          <div>{drink.strGlass}</div>

          <div>Ingredients</div>
          <ul>
            <li>
              •{drink.strIngredient1} {drink.strMeasure1}
            </li>
            <li>
              • {drink.strIngredient2} {drink.strMeasure2}
            </li>
          </ul>
          <div>Instructions</div>
          <Instructions>{drink.strInstructions}</Instructions>
        </Wrapper>
      </BigDiv>
    </>
  );
};
const Wrapper = styled.div`
  /* background-color: black; */

  background-color: #f3eff0;

  color: black;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
`;
const BigDiv = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  border: 5px solid black;
  /* margin-bottom: 100px; */
  box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
`;
const Title = styled.div`
  font-family: 'Limelight', cursive;
  font-size: 40px;
`;

const Img = styled.img`
  width: 80px;
`;
const MoveHeart = styled.div`
  background-color: black;
`;
const ButtonLike = styled.button`
  background-color: transparent;
  color: red;
  border: none;
  font-size: 30px;
  margin-left: 380px;
`;
const Instructions = styled.div`
  font-size: 14px;
`;

export default DrinkCard;
