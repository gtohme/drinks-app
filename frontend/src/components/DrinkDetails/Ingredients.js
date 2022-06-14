import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

const Ingredients = () => {
  const { ingredient } = useParams();
  const [getIngredient, setGetIngredient] = useState();
  const { loading, setLoading } = useContext(UserContext);

  useEffect(() => {
    setLoading(false);
    fetch(`/api/get-ingredients-name/${ingredient}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data.data);
          setGetIngredient(data.data);
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log('fetch data error: ' + err);
      });
  }, []);
  console.log('the ingredients', getIngredient);

  return (
    <>
      <div>Ingredients</div>
      {/* <ul>
        <li>each ingredient</li>
      </ul> */}
      {/* <div>
        {getIngredient.map((ingredient) => {
          return <div>{ingredient}</div>;
        })}
      </div> */}
    </>
  );
};

export default Ingredients;
