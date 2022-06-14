import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState();//should come from AUTHO0
  // const [user, setUser] = useState();//should come from AUTHO0
  const [likedDrink, setLikedDrink] = useState();
  const [drinkId, setDrinkId] = useState();
  const [comment, setComment] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [drink, setDrink] = useState({});
  const [display, setDisplay] = useState(false);
  const [items, setItems] = useState();
  const [favourites, setFavourites] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    fetch('/api/get-random-drink')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status === 200) {
          setDrink(data.data);
          setLoading(true);
          setDisplay(true);
          // console.log(data.data);
        } else {
          console.log(data.message);
        }
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        likedDrink,
        setLikedDrink,
        drinkId,
        setDrinkId,
        comment,
        setComment,

        isLiked,
        setIsLiked,
        hasError,
        setHasError,
        drink,
        setDrink,
        display,
        setDisplay,
        items,
        setItems,
        favourites,
        setFavourites,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
