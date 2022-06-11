import { useState } from 'react';
import styled from 'styled-components';
import DrinkCard from './DrinkCard';

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
  // const letter = letters.map((letter) => {
  //   console.log(letter);
  //   return letter;
  // });

  const handleAlphabetical = (letter) => {
    setLoading(false);
    fetch(`/api/get-drinks-letter/${letter}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setDrinks(data.data.drinks);
          setLoading(true);
          console.log(data.data.drinks);
        } else {
          console.log(data.message);
        }
      });
  };

  return (
    <BigDiv>
      <div>
        {letters.map((letter) => {
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
      </div>

      <div>
        {drinks?.map((drink) => {
          return (
            <>
              <Grid>
                <div>
                  <DrinkCard drink={drink} />
                </div>
              </Grid>
            </>
          );
        })}
      </div>
    </BigDiv>
  );
};
const BigDiv = styled.div`
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
`;
const Letter = styled.button`
  background-color: black;
  color: white;

  /* background-color: #eeeae6;
  color: black; */

  margin: 3px;
  padding: 5px 10px;
  border-radius: 50%;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export default Alphabetical;
