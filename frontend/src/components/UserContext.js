import { createContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

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
  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/add-user', {
        method: 'POST',
        body: JSON.stringify({
          user: user,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('datamessage', data.message);
        });
    }
  }, [user]);

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
