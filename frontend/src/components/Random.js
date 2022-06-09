import { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';
import { useAuth0 } from '@auth0/auth0-react';
import DrinkCard from './DrinkDetails/DrinkCard';

const Random = () => {
  const [drink, setDrink] = useState({});
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  console.log('user', user);

  const {
    likedDrink,
    setLikedDrink,
    drinkId,
    setDrinkId,
    comment,
    setComment,
    loading,
    setLoading,
  } = useContext(UserContext);

  const handleRandomDrink = () => {
    setLoading(false);
    fetch('/api/get-random-drink')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setDrink(data.data);
          setLoading(true);
          console.log(data.data);
        } else {
          console.log(data.message);
        }
      });
  };

  const saveDrink = (e) => {
    // e.preventDefault();
    fetch(`/api/update-comments`, {
      body: JSON.stringify({
        user: user,
        drinkId: drink.idDrink,
        comment: '',
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "second data");
        if (data.status === 400) {
          // setErrorMessage(data.message);
          console.log('errordrinks');
        } else if (data.status === 200) {
          console.log('saved drink', data);
          // setStatus(data.status);
          // localStorage.setItem('id', JSON.stringify(data.message.id));
          // // localStorage.setItem("id", JSON.stringify(clientId));
          // history.push('/confirmed');
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
          <Button onClick={handleRandomDrink}>random drink</Button>
          <DrinkCard drink={drink} />
          {/*<DrinkName>{loading && randomDrink.strDrink}</DrinkName>
          <Img src={randomDrink.strDrinkThumb} alt='image of drink' />
          <div>Ingredients</div>
          <ul>
            <li>
              {randomDrink.strIngredient1} ⚪ ⚫ ‣ ➡ {randomDrink.strMeasure1}
            </li>
            <li>
              {randomDrink.strIngredient2} {randomDrink.strMeasure2}
            </li>
            <li>
              {randomDrink.strIngredient3} {randomDrink.strMeasure3}
            </li>
            <li>
              {randomDrink.strIngredient4} {randomDrink.strMeasure4}
            </li>
            <li>
              {randomDrink.strIngredient5} {randomDrink.strMeasure5}
            </li>
            <li>
              {randomDrink.strIngredient6} {randomDrink.strMeasure6}
            </li>
            <li>
              {randomDrink.strIngredient7} {randomDrink.strMeasure7}
            </li>
          </ul>
          <div>{randomDrink.strGlass}</div>
          <ul>
            <li></li>
          </ul>
          <div>Recipe</div>
          <div>{randomDrink.strInstructions}</div>
          <button onClick={() => saveDrink(`${randomDrink.strDrink}`)}>
            Save
          </button>  */}
        </Wrapper>
      </BigDiv>
    </>
  );
};
const BigDiv = styled.div`
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// const Title = styled.div`
//   /* font-family: 'Limelight', cursive;

//   font-family: 'Poiret One', cursive; */

//   font-family: 'Voltaire', sans-serif;

//   font-size: 50px;
// `;
const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: fit-content;

  &:hover {
    transform: scale(1.3);
  }
`;
// const Img = styled.img`
//   width: 20%;
// `;
// const DrinkName = styled.div`
//   font-family: 'Poiret One', cursive;
// `;

export default Random;
