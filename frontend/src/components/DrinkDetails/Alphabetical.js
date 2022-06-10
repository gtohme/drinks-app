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
      <div>Alphabetical</div>
      <div>
        {letters.map((letter) => {
          return (
            <>
              <button
                onClick={() => {
                  handleAlphabetical(letter);
                }}
              >
                {letter}
              </button>
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
      {/* letter.filter((item) => {
      return letter=== item.indexOf <Li>{item.drink.strDrink}</Li>
      
      }) */}
    </BigDiv>
  );
};
const BigDiv = styled.div`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  /* grid: 3; */
`;
// const Li = styled.li`
//   position: sticky;
//   top: 0;
// `;

export default Alphabetical;
