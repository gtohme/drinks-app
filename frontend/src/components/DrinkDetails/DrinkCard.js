import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';

const DrinkCard = ({ drink }) => {
  const { user } = useAuth0();
  const { isLiked, setIsLiked, favourites } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  // const [isLiked, setIsLiked] = useState(false);

  // console.log('User', user);

  const handleLike = (e) => {
    // e.preventDefault();
    setLoading(true);
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
          setLoading(false);
          // setIsLiked(!isLiked);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    loading && (
      <>
        <BigDiv>
          <MoveHeart>
            <ButtonLike onClick={handleLike}>
              {favourites?.filter((el) => el.idDrink === drink.idDrink).length >
              0 ? (
                <AiFillHeart />
              ) : (
                <FiHeart />
              )}
            </ButtonLike>
          </MoveHeart>
          <Wrapper>
            <Title>{drink.strDrink}</Title>
            <Top>
              <Lefts>
                <Img src={drink.strDrinkThumb} alt='image of drink' />
              </Lefts>
              <Rights>
                <GlassSubtitle>Glass</GlassSubtitle>
                <div>{drink.strGlass}</div>
                <IngredientsSubtitle>Ingredients</IngredientsSubtitle>
                <ul>
                  <Li>
                    • {drink.strIngredient1} {drink.strMeasure1}
                  </Li>
                  <Li>
                    • {drink.strIngredient2} {drink.strMeasure2}
                  </Li>
                  <Li>
                    {drink.strIngredient3 ? (
                      <div>
                        • {drink.strIngredient3} {drink.strMeasure3}
                      </div>
                    ) : (
                      ''
                    )}
                  </Li>
                  <Li>
                    {drink.strIngredient4 ? (
                      <div>
                        • {drink.strIngredient4} {drink.strMeasure4}
                      </div>
                    ) : (
                      ''
                    )}
                  </Li>
                </ul>
              </Rights>
            </Top>
            <InstructionsSubtitle>Instructions</InstructionsSubtitle>
            <InstructionsWrapper>
              <Instructions>{drink.strInstructions}</Instructions>
            </InstructionsWrapper>
          </Wrapper>
        </BigDiv>
      </>
    )
  );
};
const Wrapper = styled.div`
  background-color: #f3eff0;
  color: black;
  height: 400px;
  display: block;
  padding: 15px;
  overflow: hidden;
`;

const BigDiv = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  border: 5px solid black;
  box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
`;
const Title = styled.h3`
  font-family: 'Limelight', cursive;
  font-size: 36px;
  text-align: center;
  margin: 0 0 20px;
`;
const GlassSubtitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin: 0 0 4px;
`;
const IngredientsSubtitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin: 8px 0;
`;

const Img = styled.img`
  width: 150px;
`;
const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 10px;
`;
const Lefts = styled.div`
  flex: 0 0 auto;
  margin: 0 30px 0 0;
`;
const Rights = styled.div`
  flex: 0 0 auto;
`;
const MoveHeart = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-end;
`;
const ButtonLike = styled.button`
  background-color: transparent;
  color: red;
  border: none;
  font-size: 30px;
`;
const Instructions = styled.div`
  margin-top: 5px;
  font-size: 16px;
  padding: 5px 5px 40px;
`;

const InstructionsSubtitle = styled.div`
  padding: 10 0 10px;
  font-weight: bold;
  font-size: 18px;
`;

const InstructionsWrapper = styled.div`
  overflow-y: auto;
  height: 200px;
  margin-right: -15px;
`;
const Li = styled.div`
  font-size: 15px;
`;
export default DrinkCard;
