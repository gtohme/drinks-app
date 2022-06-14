import { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';
import { useAuth0 } from '@auth0/auth0-react';
import DrinkCard from './DrinkDetails/DrinkCard';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Random = () => {
  const [drink, setDrink] = useState({});
  const { user } = useAuth0();
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRandomDrink = () => {
    setLoading(true);
    setDisplay(false);
    fetch('/api/get-random-drink')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setDrink(data.data);
          setLoading(false);
          setDisplay(true);
          console.log(data.data);
        } else {
          console.log(data.message);
        }
      });
  };

  return !loading ? (
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
    <Circular>
      <CircularProgressbar />
    </Circular>
  );
};
const BigDiv = styled.div`
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  width: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 3px solid black;
  font-size: 16px;
  width: fit-content;
  height: 30px;
  margin-bottom: 30px;

  &:hover {
    transform: scale(1.6);
    background-color: #f75c1a;
    color: white;
    border: none;
  }
`;
const Circular = styled.div`
  width: 25px;
`;
export default Random;
