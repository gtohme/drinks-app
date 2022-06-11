import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState();//should come from AUTHO0
  // const [user, setUser] = useState();//should come from AUTHO0
  const [likedDrink, setLikedDrink] = useState();
  const [drinkId, setDrinkId] = useState();
  const [comment, setComment] = useState();
  const [loading, setLoading] = useState();

  // useEffect(() => {
  //   fetch(`/api/update-favourites/${drinkId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLikedDrink(data);
  //       console.log('likeddrink', data);
  //     });
  // }, [drinkId]);

  return (
    <UserContext.Provider
      value={{
        likedDrink,
        setLikedDrink,
        drinkId,
        setDrinkId,
        comment,
        setComment,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
