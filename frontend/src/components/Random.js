import { useState } from 'react';

const Random = () => {
  const [randomDrink, setRandomDrink] = useState({});
  const [loading, setLoading] = useState(false);

  const handleRandomDrink = () => {
    setLoading(false);
    fetch('/api/get-random-drink')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setRandomDrink(data.data);
          setLoading(true);
          console.log(data.data);
        } else {
          console.log(data.message);
        }
      });
  };

  return (
    <>
      <div>Random</div>
      <button onClick={handleRandomDrink}>random drink</button>
      <div>{loading && randomDrink.strDrink}</div>
    </>
  );
};

export default Random;
