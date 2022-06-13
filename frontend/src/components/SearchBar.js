import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';
import { useState, useEffect, useContext } from 'react';
import ErrorMessage from '../ErrorMessage';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
// import DrinkCard from './DrinkDetails/DrinkCard';
// <DrinkCard drink={drink} />

const SearchBar = () => {
  const navigate = useNavigate();

  // const [allDrinks, setAllDrinks] = useState();
  // const [filteredData, setFilteredData] = useState([]);
  // const [searchItems, setSearchItems] = useState('');
  const [wordEntered, setWordEntered] = useState(['']);

  const {
    drinkId,
    setDrinkId,
    loading,
    setLoading,
    hasError,
    setHasError,
    drink,
    setDrink,
    items,
    setItems,
  } = useContext(UserContext);

  const handleKeyUp = (e) => {
    fetch(`/api/searchDrinks/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log('list', data.data.drinks.strDrink);
          setItems(data.data.drinks);
        }
      })
      .catch((err) => {
        console.log('fetch data error: ' + err);
      });
  };

  const handleKeyEnter = () => {
    // setItems('');
    navigate(`/name/${items}`);
  };

  const handleSuggestions = (drink) => {
    navigate(`/result/${drink}`);
  };
  return (
    <>
      {loading ? (
        <Div>
          <Wrapper>
            <Input
              type='text'
              value={wordEntered}
              placeholder='Search'
              onChange={(e) => setWordEntered(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handleKeyEnter(e.target.value);
                }
                handleKeyUp(e);
              }}
            />

            <ButtonSearch onClick={() => handleKeyEnter(wordEntered)}>
              <BsSearch />
            </ButtonSearch>
            {items && (
              <ListedItems>
                {items?.map((drink) => {
                  return (
                    <ItemsDropdown
                      key={drink._id}
                      onClick={() => handleSuggestions(drink.strDrink)}
                    >
                      <span>
                        {drink.strDrink.slice(
                          0,
                          drink.strDrink
                            .toLowerCase()
                            .indexOf(wordEntered.toLowerCase()) +
                            wordEntered.length
                        )}

                        <Suggestions>
                          {drink.strDrink.slice(
                            drink.strDrink
                              .toLowerCase()
                              .indexOf(wordEntered.toLowerCase()) +
                              wordEntered.length
                          )}
                        </Suggestions>
                      </span>
                    </ItemsDropdown>
                  );
                })}
              </ListedItems>
            )}
          </Wrapper>
        </Div>
      ) : (
        'loading'
      )}
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 5px 16px -5px rgba(0, 0, 0, 0.5);
  }
`;
const Input = styled.input`
  height: 15px;
  width: 600px;
  font-size: 18px;
  position: relative;
  padding: 10px;
  border: none;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;

// const ButtonDelete = styled.button`
//   background-color: transparent;
//   border: none;
//   font-size: 16px;
//   width: fit-content;
//   &:hover {
//     transform: scale(1.3);
//   }
// `;

const ButtonSearch = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: fit-content;

  &:hover {
    transform: scale(1.3);
  }
`;
const ListedItems = styled.ul`
  margin-top: 35px;
  display: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
  width: 600px;
  border-radius: 5px;
  position: absolute;
  height: 300px;
  /* background: white; */
  color: #707072;
  overflow-y: auto;
`;

const ItemsDropdown = styled.li`
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px;
  :hover {
    cursor: pointer;
    background-color: #f7f5f0;
    background-color: #fcb97d;
    background-color: #f97d10;
    color: black;
  }
`;
const Suggestions = styled.span`
  font-weight: bold;
`;

export default SearchBar;
