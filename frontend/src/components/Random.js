import { useState } from 'react';
import styled from 'styled-components';

const Random = () => {
  const [randomDrink, setRandomDrink] = useState({});
  const [loading, setLoading] = useState(false);

  const handleRandomDrink = () => {
    setLoading(false);
    fetch('/api/get-random-drink')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setRandomDrink(data.data);
          setLoading(true);
          console.log(data.data);
        } else {
          console.log(data.message);
        }
      });
  };

  return (
    <>
      <Wrapper>
        <Title>Random</Title>
        <Button onClick={handleRandomDrink}>random drink</Button>
        <DrinkName>{loading && randomDrink.strDrink}</DrinkName>
        <Img src={randomDrink.strDrinkThumb} alt='image of drink' />
        <div>Ingredients</div>
        <ul>
          <li>
            {randomDrink.strIngredient1} {randomDrink.strMeasure1}
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
        </ul>
        <div>{randomDrink.strGlass}</div>
        <ul>
          <li></li>
        </ul>
        <div>Recipe</div>
        <div>{randomDrink.strInstructions}</div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div``;
const Button = styled.button``;
const Img = styled.img`
  width: 20%;
`;
const DrinkName = styled.div``;

export default Random;
