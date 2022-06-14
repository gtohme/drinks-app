import { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';
import { useAuth0 } from '@auth0/auth0-react';
import DrinkCard from './DrinkDetails/DrinkCard';

const Random = () => {
  const [drink, setDrink] = useState({});
  const { user } = useAuth0();
  const [display, setDisplay] = useState(false);

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
          setDisplay(true);
          console.log(data.data);
        } else {
          console.log(data.message);
        }
      });
  };

  // const saveDrink = (e) => {
  //   fetch(`/api/update-comments`, {
  //     body: JSON.stringify({
  //       user: user,
  //       drinkId: drink.idDrink,
  //       comment: '',
  //     }),
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data, "second data");
  //       if (data.status === 400) {
  //         // setErrorMessage(data.message);
  //         console.log('errordrinks');
  //       } else if (data.status === 200) {
  //         console.log('saved drink', data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return loading ? (
    <>
      <BigDiv>
        <Wrapper>
          <Title>Push me to find your next drink!</Title>
          <Button onClick={handleRandomDrink}>Surprise me!</Button>
          {display && <DrinkCard drink={drink} />}
        </Wrapper>
      </BigDiv>
    </>
  ) : (
    'loading'
  );
};
const BigDiv = styled.div`
  margin: auto;
  margin-top: 120px;
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
const Title = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 3px solid black;
  /* border-radius: 5px; */
  font-size: 16px;
  width: fit-content;
  height: 30px;

  &:hover {
    transform: scale(1.6);
    background-color: #f35b04;
    color: white;
    border: none;
  }
`;

export default Random;
