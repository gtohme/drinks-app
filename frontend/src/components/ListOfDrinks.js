import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DrinkCard from './DrinkDetails/DrinkCard';

const ListOfDrinks = () => {
  const { drink } = useParams();
  const [drinks, setDrinks] = useState();
  const [loading, setLoading] = useState(false);

  console.log('value', drink);
  useEffect(() => {
    fetch(`/api/searchDrinks/${drink}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data.data.drinks);
          setDrinks(data.data.drinks);
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log('fetch data error: ' + err);
      });
  }, []);
  console.log('items', drinks);
  // console.log('drink list', drink);
  return (
    <>
      {' '}
      {loading ? (
        <>
          <h1
            style={{
              margin: '0 0 0 20px',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 'bold',
              fontSize: '24px',
            }}
          >
            Search Results
          </h1>
          <Wrapper>
            {drinks?.map((drink) => {
              return (
                <DivCard key={drink.idDrink}>
                  <Div>
                    <DrinkCard drink={drink} />
                  </Div>
                </DivCard>
              );
            })}
          </Wrapper>
        </>
      ) : (
        'loading'
      )}
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
`;
const DivCard = styled.div`
  margin: 20px;
  max-width: 30%;
  flex: 1 1 auto;
`;

export default ListOfDrinks;
