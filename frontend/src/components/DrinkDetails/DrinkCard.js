import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';
const DrinkCard = ({ drink }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();
  console.log(drink);

  const handleLike = (e) => {
    // e.preventDefault();
    fetch(`/api/update-favourites/?id=${drink.idDrink}&email=${user.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "fave data");
        if (data.status === 400) {
          // setErrorMessage(data.message);
          console.log('errordrinks');
        } else if (data.status === 200) {
          console.log('saved drink', data);
          // setStatus(data.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <BigDiv>
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
          <ButtonLike onClick={handleLike}>
            <BsHeart />
          </ButtonLike>
        </Wrapper>
      </BigDiv>
    </>
  );
};
const Wrapper = styled.div`
  /* background-color: black; */
  /* background-color: #f7f5f0; */
  background-color: #f3eff0;
  /* background-color: #fcf7f6; */
  /* color: white; */
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
  border: 3px solid black;
  margin-bottom: 100px;
`;
const Title = styled.div`
  font-family: 'Limelight', cursive;

  /* font-family: 'Poiret One', cursive; */

  /* font-family: 'Voltaire', sans-serif; */

  font-size: 40px;
`;

const Img = styled.img`
  width: 80px;
`;
const ButtonLike = styled.button`
  background-color: transparent;
  color: red;
  border: none;
  font-size: 30px;
`;
const Instructions = styled.div`
  font-size: 14px;
`;

export default DrinkCard;
