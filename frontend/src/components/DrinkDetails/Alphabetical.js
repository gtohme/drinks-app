import { useState } from 'react';
import styled from 'styled-components';
import DrinkCard from './DrinkCard';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Alphabetical = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const handleAlphabetical = (letter) => {
    setLoading(false);
    fetch(`/api/get-drinks-letter/${letter}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setDrinks(data.data.drinks);
          setLoading(true);
          // console.log(data.data.drinks);
        } else {
          console.log(data.message);
        }
      });
  };

  return (
    <BigDiv>
      {!letters ? (
        <CircularProgressbar />
      ) : (
        <>
          <AtoZ>
            {letters?.map((letter) => {
              return (
                <>
                  <Letter
                    onClick={() => {
                      handleAlphabetical(letter);
                    }}
                  >
                    {letter}
                  </Letter>
                </>
              );
            })}
          </AtoZ>

          <Div>
            {drinks?.map((drink) => {
              return (
                <>
                  <div>
                    <DrinkCard drink={drink} />
                  </div>
                </>
              );
            })}
          </Div>
        </>
      )}
    </BigDiv>
  );
};
const BigDiv = styled.div`
  margin-top: 80px;
`;
const Letter = styled.button`
  background-color: black;
  color: white;
  padding: 15px 20px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  margin: 4px;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    transform: scale(1.04);
    /* color: #f35b04; */
    cursor: pointer;
  }
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  gap: 5%;
  margin: 4%;
  margin-bottom: 400px;
`;

const AtoZ = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin-left: 200px;
`;

export default Alphabetical;
