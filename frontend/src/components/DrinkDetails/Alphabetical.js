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
      {!letters ? (
        <CircularProgressbar />
      ) : (
        <>
          <Why>
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
          </Why>

          <Div>
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
          </Div>
        </>
      )}
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
  /* margin: auto; */
  padding: 5px 10px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  gap: 5%;
  margin: 4%;
  margin-bottom: 400px;
`;
const Grid = styled.div`
  /* display: flex;
  flex-direction: column;
  flex-wrap: nowrap; */
  /* display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  gap: 5%;
  margin: 4%; */
`;
const Why = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: auto;
`;

export default Alphabetical;
