import DrinkCard from './DrinkCard';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

const NamesOfDrinks = () => {
  const { value } = useParams();
  const [drinks, setDrinks] = useState();
  // const [loading, setLoading] = useState(false);
  console.log('bahabhabaha', value);
  const { items } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  console.log('iteammsssss', items);

  useEffect(() => {
    setLoading(false);
    fetch(`/api/searchDrinks/${value}`)
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
  return (
    loading && (
      <>
        <Title>AllDrinks</Title>

        <div>
          {drinks.map((drink) => {
            return (
              <DivCard>
                <DrinkCard drink={drink} />
              </DivCard>
            );
          })}
        </div>
      </>
    )
  );
};
const Title = styled.div`
  margin-top: 200px;
`;
const DivCard = styled.div``;
export default NamesOfDrinks;
